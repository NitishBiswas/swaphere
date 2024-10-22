import { TickSquare } from 'iconsax-react';
import React from 'react'

interface ICheckbox {
    title: string;
    checked: boolean;
    setChecked: (checked: boolean) => void;
    className?: string;
}

const CheckboxButton = ({ title, checked, setChecked, className }: ICheckbox) => {
    return (
        <div onClick={() => setChecked(!checked)} className='w-fit flex gap-[12px] cursor-pointer items-center text-primary'>
            <TickSquare size={24} variant={checked ? "Bold" : "TwoTone"} />
            <span className={`text-small text-black-100 ${className}`}>{title}</span>
        </div>
    )
}

export default CheckboxButton