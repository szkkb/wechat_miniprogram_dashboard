#!/usr/bin/env python3
"""Generate wireframe via OpenRouter Gemini 3 Pro Image Preview"""

import json, urllib.request, base64, re, sys

API_KEY = "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"
PROMPT_FILE = sys.argv[1] if len(sys.argv) > 1 else "analytics-dashboard-v1-prompt.md"
OUTPUT_FILE = PROMPT_FILE.replace("-prompt.md", ".png")

# Read prompt
with open(PROMPT_FILE) as f:
    raw = f.read()

m = re.search(r'```\n(.*?)```', raw, re.DOTALL)
prompt_text = m.group(1) if m else raw

print(f"Prompt length: {len(prompt_text)} chars")
print("Calling OpenRouter API...")

payload = json.dumps({
    "model": "google/gemini-3-pro-image-preview",
    "messages": [{"role": "user", "content": prompt_text}],
    "modalities": ["image", "text"],
    "image_config": {"aspect_ratio": "9:16"}
}).encode()

req = urllib.request.Request(
    "https://openrouter.ai/api/v1/chat/completions",
    data=payload,
    headers={
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
    }
)

resp = urllib.request.urlopen(req, timeout=180)
data = json.loads(resp.read())

# Debug: dump full response structure
print(f"Response keys: {list(data.keys())}")
choice = data["choices"][0]
msg = choice["message"]
print(f"Message keys: {list(msg.keys())}")
print(f"Content type: {type(msg.get('content'))}")
print(f"Content repr: {repr(msg.get('content'))[:500]}")

# Check for images in different locations
content = msg.get("content")
images = msg.get("images", [])

# If images field exists, use that directly
if images:
    for img_data in images:
        if isinstance(img_data, str) and img_data.startswith("data:"):
            header, b64 = img_data.split(",", 1)
            img_bytes = base64.b64decode(b64)
            with open(OUTPUT_FILE, "wb") as f:
                f.write(img_bytes)
            print(f"Saved {OUTPUT_FILE} from images field ({len(img_bytes)} bytes)")
            sys.exit(0)
        elif isinstance(img_data, dict):
            url = img_data.get("url", img_data.get("image_url", {}).get("url", ""))
            if url.startswith("data:"):
                header, b64 = url.split(",", 1)
                img_bytes = base64.b64decode(b64)
                with open(OUTPUT_FILE, "wb") as f:
                    f.write(img_bytes)
                print(f"Saved {OUTPUT_FILE} from images dict ({len(img_bytes)} bytes)")
                sys.exit(0)
    # Images might be raw base64 without data: prefix
    for img_data in images:
        if isinstance(img_data, str) and len(img_data) > 100:
            img_bytes = base64.b64decode(img_data)
            with open(OUTPUT_FILE, "wb") as f:
                f.write(img_bytes)
            print(f"Saved {OUTPUT_FILE} from raw base64 ({len(img_bytes)} bytes)")
            sys.exit(0)
    print(f"Images field content (first 200): {repr(images[0])[:200] if images else 'empty'}")

saved = False

if isinstance(content, list):
    for part in content:
        if part.get("type") == "image_url":
            url = part["image_url"]["url"]
            header, b64 = url.split(",", 1)
            img_bytes = base64.b64decode(b64)
            mime = header.split(":")[1].split(";")[0]
            if "png" not in mime:
                try:
                    from PIL import Image
                    import io
                    img = Image.open(io.BytesIO(img_bytes))
                    buf = io.BytesIO()
                    img.save(buf, format="PNG")
                    img_bytes = buf.getvalue()
                except ImportError:
                    pass  # Save as-is if PIL not available
            with open(OUTPUT_FILE, "wb") as f:
                f.write(img_bytes)
            print(f"Saved {OUTPUT_FILE} ({len(img_bytes)} bytes)")
            saved = True
            break
        elif part.get("type") == "text":
            print(f"Text: {part['text'][:300]}")
else:
    print(f"String response: {str(content)[:300]}")

if not saved:
    print("ERROR: No image in response")
    sys.exit(1)
