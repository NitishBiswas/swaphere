import React, { useRef } from 'react';

const Marquee = ({ text }: { text: string }) => {
    const marqueeRef = useRef<HTMLMarqueeElement | null>(null);

    const handleMouseEnter = () => {
        if (marqueeRef.current) {
            marqueeRef.current.stop(); // Pauses the marquee
        }
    };

    const handleMouseLeave = () => {
        if (marqueeRef.current) {
            marqueeRef.current.start(); // Resumes the marquee
        }
    };

    return (
        <marquee
            behavior="scroll"
            direction="left"
            scrollAmount={5}
            ref={marqueeRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {text}
        </marquee>
    );
};

export default Marquee;
