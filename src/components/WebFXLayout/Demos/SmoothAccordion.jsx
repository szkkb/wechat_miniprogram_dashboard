import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ShowcaseCard from '../ShowcaseCard';
import './Demos.css';

const FAQ_DATA = [
    {
        id: 1,
        question: "Why use Framer Motion for Accordions?",
        answer: "Native CSS cannot smoothly transition from height: 0 to height: auto. Framer Motion measures the DOM content and smoothly interpolates the exact pixel height."
    },
    {
        id: 2,
        question: "Is this accessible?",
        answer: "Yes. In a production environment, we would also attach aria-expanded and appropriate role tags to ensure screen readers can understand the toggle state."
    },
    {
        id: 3,
        question: "How does the spring physics feel?",
        answer: "By utilizing spring damping instead of traditional ease-out curves, the accordion feels grounded. Notice how it slightly 'bounces' when it settles."
    }
];

const SmoothAccordion = () => {
    const [expanded, setExpanded] = useState(1);

    return (
        <ShowcaseCard
            title="Smooth Physics Accordion"
            description="Achieving flawless height:auto expansion with spring physics and layout measurement."
            tags={['component:accordion', 'pattern:progressive-disclosure', 'motion:spring-damping']}
        >
            <div className="accordion-wrapper">
                {FAQ_DATA.map((item) => (
                    <div className="accordion-item" key={item.id}>
                        <button 
                            className="accordion-header"
                            onClick={() => setExpanded(expanded === item.id ? false : item.id)}
                        >
                            <span className="accordion-question">{item.question}</span>
                            <motion.div
                                animate={{ rotate: expanded === item.id ? 180 : 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            >
                                <ChevronDown size={20} className="accordion-icon" />
                            </motion.div>
                        </button>
                        
                        <AnimatePresence initial={false}>
                            {expanded === item.id && (
                                <motion.section
                                    key="content"
                                    initial="collapsed"
                                    animate="open"
                                    exit="collapsed"
                                    variants={{
                                        open: { opacity: 1, height: "auto" },
                                        collapsed: { opacity: 0, height: 0 }
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    <div className="accordion-content">
                                        <p>{item.answer}</p>
                                    </div>
                                </motion.section>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </ShowcaseCard>
    );
};

export default SmoothAccordion;
