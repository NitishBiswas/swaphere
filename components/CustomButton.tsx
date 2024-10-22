import React, { useEffect, useState } from 'react';

interface IButton {
    title: string;
    onClick?: () => void;
    color?: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "white" | "black";
    disabled?: boolean;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    className?: string;
    type?: "button" | "submit" | "reset";
    size?: "small" | "medium" | "large";
}

const CustomButton = ({
    title,
    onClick,
    color = "primary",
    disabled,
    leftIcon,
    rightIcon,
    className = "",
    type = "button",
    size = "small",
}: IButton) => {
    const [customColor, setCustomColor] = useState("");
    const [customSize, setCustomSize] = useState("");

    useEffect(() => {
        if (color) {
            switch (color) {
                case "primary":
                    setCustomColor(disabled ? "bg-gray-500 cursor-not-allowed" : "hover:bg-primary/90 bg-primary shadow-lg");
                    break;
                case "secondary":
                    setCustomColor(disabled ? "bg-gray-500 cursor-not-allowed" : "hover:bg-secondary/90 bg-secondary shadow-lg");
                    break;
                case "info":
                    setCustomColor(disabled ? "bg-gray-500 cursor-not-allowed" : "hover:bg-info/90 bg-info shadow-lg");
                    break;
                case "success":
                    setCustomColor(disabled ? "bg-gray-500 cursor-not-allowed" : "bhover:g-success/90 bg-success shadow-lg");
                    break;
                case "warning":
                    setCustomColor(disabled ? "bg-gray-500 cursor-not-allowed" : "hover:bg-warning/90 bg-warning shadow-lg");
                    break;
                case "error":
                    setCustomColor(disabled ? "bg-gray-500 cursor-not-allowed" : "hover:bg-error/90 bg-error shadow-lg");
                    break;
                case "white":
                    setCustomColor(disabled ? "bg-gray-500 cursor-not-allowed" : "hover:bg-white/90 bg-white shadow-lg text-primary");
                    break;
                case "black":
                    setCustomColor(disabled ? "bg-gray-500 cursor-not-allowed" : "hover:bg-[#000000]/90 bg-[#000000] shadow-lg text-primary");
                    break;
            }
        } else {
            setCustomColor(disabled ? "bg-gray-500 cursor-not-allowed" : "hover:bg-primary/90 bg-primary shadow-lg");
        }
    }, [color, disabled]);

    useEffect(() => {
        if (size) {
            switch (size) {
                case "small":
                    setCustomSize("h-[28px] text-xs font-[300] py-[6px] px-[12px]");
                    break;
                case "medium":
                    setCustomSize("h-[40px] text-small font-[400] py-[10px] px-[20px]");
                    break;
                case "large":
                    setCustomSize("h-[48px] text-normal font-[400] py-[12px] px-[32px]");
                    break;
            }
        } else {
            setCustomSize("h-[28px] text-xs font-[300] py-[6px] px-[12px]");
        }
    }, [size]);
    return (
        <button
            type={type}
            className={`relative text-nowrap ${color === "white" ? "text-primary" : "text-white"} z-[1] overflow-hidden flex items-center justify-center gap-[6px] rounded-[6px] ${customColor} ${customSize} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {leftIcon}
            {title}
            {rightIcon}
        </button>
    )
}

export default CustomButton