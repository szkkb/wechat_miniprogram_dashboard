import React, { useState } from 'react';
import { Reorder } from 'framer-motion';
import { GripVertical } from 'lucide-react';
import ShowcaseCard from '../ShowcaseCard';
import './Demos.css';

const INITIAL_LIST = [
    { id: "item-1", text: "1. Navigation Structure" },
    { id: "item-2", text: "2. Visual Hierarchy" },
    { id: "item-3", text: "3. Component Library" },
    { id: "item-4", text: "4. Motion Guidelines" },
];

const FluidDragDrop = () => {
    const [items, setItems] = useState(INITIAL_LIST);

    return (
        <ShowcaseCard
            title="Fluid Drag & Drop"
            description="Achieving native-level smooth list reordering without the stuttering of traditional HTML5 drag APIs."
            tags={['interaction:drag-drop', 'pattern:reorderable-list', 'motion:spring-physics']}
            hasControls={false}
        >
            {/* Framer-Motion Reorder Group */}
            <Reorder.Group 
                axis="y" 
                values={items} 
                onReorder={setItems} 
                className="drag-list"
            >
                {items.map((item) => (
                    <Reorder.Item 
                        key={item.id} 
                        value={item} 
                        className="drag-item"
                        whileDrag={{
                            scale: 1.05,
                            boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
                            backgroundColor: "rgba(168, 85, 247, 0.2)",
                            borderColor: "rgba(168, 85, 247, 0.5)"
                        }}
                    >
                        <span className="drag-icon-handle">
                            <GripVertical size={18} />
                        </span>
                        <span className="drag-item-text">{item.text}</span>
                    </Reorder.Item>
                ))}
            </Reorder.Group>
        </ShowcaseCard>
    );
};

export default FluidDragDrop;
