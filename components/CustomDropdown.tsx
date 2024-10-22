import { IExchange } from '@/sections/Hero';
import { ArrowDown2, ArrowUp2 } from 'iconsax-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts';

interface IExDrop {
    data: {
        label: string;
        value: string;
    }[];
    value: string;
    onChange: (value: string) => void;
    initialLabel?: string;
}

const CustomDropdown = ({ data, onChange, value, initialLabel }: IExDrop) => {
    const selectedValue = data?.filter(item => item?.value === value)[0];
    const [isOpen, setIsOpen] = useState(false);
    const exDropRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(exDropRef, () => setIsOpen(false));

    const handleSelect = (select: string) => {
        onChange(select);
        setIsOpen(false);
    }

    return (
        <div ref={exDropRef} className='relative w-full'>
            <div onClick={() => setIsOpen(!isOpen)} className='w-full h-[48px] rounded-[8px] cursor-pointer flex items-center justify-between gap-[20px] px-[10px] text-secondary bg-white border-[1px] border-primary/20'>
                <div className='w-[calc(100%-40px)] flex items-center gap-[20px]'>
                    <div>{selectedValue?.label || initialLabel}</div>
                </div>
                <div className='w-[20px] text-medium'>
                    <div className={`${isOpen ? "rotate-0" : "rotate-180"} transition-all duration-500`} >
                        <ArrowUp2 />
                    </div>
                </div>
            </div>
            {isOpen && <div className='absolute top-[49px] left-0 right-0 z-[20] w-full max-h-[200px] flex flex-col gap-[10px] bg-white border-[1px] border-primary rounded-b-[8px] overflow-hidden shadow-lg' style={{ boxShadow: "16px 16px 64px 0px rgba(242, 69, 53, 0.25)" }}>
                <div className='w-full h-[calc(100%-25px)] overflow-auto custom-scrollbar flex flex-col gap-[5px] p-[5px]'>
                    {data?.length > 0 ? data?.map((item, index) => {
                        return (
                            <div onClick={() => handleSelect(item?.value)} key={index} className={`px-[20px] py-[10px] flex items-center gap-[20px] ${item?.value === value ? "bg-secondary text-white" : ""} hover:bg-secondary hover:text-white cursor-pointer`}>
                                <div>{item?.label}</div>
                            </div>
                        )
                    }) : <div className='w-full text-center my-[20px] text-primary'>No Data Found!</div>}
                </div>
            </div>}
        </div>
    )
}

export default CustomDropdown