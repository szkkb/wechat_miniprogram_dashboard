import React, { useState } from 'react';
import { Reorder, useDragControls } from 'framer-motion';
import { GripVertical } from 'lucide-react';
import ShowcaseCard from '../ShowcaseCard';
import './Demos.css';

const INITIAL_LIST = [
    { id: "item-1", text: "1. 导航结构 Navigation" },
    { id: "item-2", text: "2. 视觉层级 Hierarchy" },
    { id: "item-3", text: "3. 组件库 Components" },
    { id: "item-4", text: "4. 动效规范 Motion" },
];

const DragItem = ({ item }) => {
    const controls = useDragControls();
    return (
        <Reorder.Item
            value={item}
            className="drag-item"
            dragListener={false}
            dragControls={controls}
            whileDrag={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
                backgroundColor: "rgba(168, 85, 247, 0.2)",
                borderColor: "rgba(168, 85, 247, 0.5)"
            }}
        >
            <span
                className="drag-icon-handle"
                onPointerDown={(e) => controls.start(e)}
                style={{ touchAction: 'none' }}
            >
                <GripVertical size={18} />
            </span>
            <span className="drag-item-text">{item.text}</span>
        </Reorder.Item>
    );
};

const FluidDragDrop = () => {
    const [items, setItems] = useState(INITIAL_LIST);

    return (
        <ShowcaseCard
            title="Fluid Drag & Drop 流体拖拽排序"
            description="按住左侧手柄拖拽排序 — 弹簧物理动画，无传统 HTML5 Drag API 的卡顿"
            tags={['interaction:drag-drop', 'pattern:reorderable-list', 'motion:spring-physics', '触屏兼容']}
            hasControls={false}
        >
            <Reorder.Group
                axis="y"
                values={items}
                onReorder={setItems}
                className="drag-list"
            >
                {items.map((item) => (
                    <DragItem key={item.id} item={item} />
                ))}
            </Reorder.Group>
        </ShowcaseCard>
    );
};

export default FluidDragDrop;
