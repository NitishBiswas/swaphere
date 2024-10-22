import React from 'react'

interface ICursorMovingText {
    text: string;
    className?: string;
}

const CursorMovingText = ({ className, text }: ICursorMovingText) => {
    return (
        <div data-text={text} className={`cursor-moving ${className}`}>{text}</div>
    )
}

export default CursorMovingText