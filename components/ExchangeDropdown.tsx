import { IExchange } from '@/sections/Hero';
import { ArrowDown2, ArrowUp2 } from 'iconsax-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts';

interface IExDrop {
    data: IExchange[];
    value: string;
    onChange: (value: string) => void;
    type: string;
}

const ExchangeDropdown = ({ data, onChange, value, type }: IExDrop) => {
    const selectedValue = data?.filter(item => item?.id === value)[0];
    const [filteredValue, setFilteredValue] = useState(data);
    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState("");
    const exDropRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(exDropRef, () => setIsOpen(false));

    const handleSelect = (select: string) => {
        onChange(select);
        setIsOpen(false);
    }

    useEffect(() => {
        if (searchText) {
            setFilteredValue(data.filter(item => item?.name?.toLowerCase().includes(searchText.toLowerCase())));
        } else {
            setFilteredValue(data);
        }
    }, [searchText, data]);

    return (
        <div ref={exDropRef} className='relative w-full'>
            <div onClick={() => setIsOpen(!isOpen)} className='w-full h-[48px] rounded-[8px] cursor-pointer flex items-center justify-between gap-[20px] px-[10px] text-secondary bg-white'>
                <div className='w-[calc(100%-40px)] flex items-center gap-[20px]'>
                    <div className='h-[30px] w-[30px] rounded-full border-[2px] border-gray-400 p-[2px] bg-white'>
                        <Image src={selectedValue?.icon} alt={selectedValue?.name} height={30} width={30} className='rounded-full' />
                    </div>
                    <div>{selectedValue?.name}</div>
                </div>
                <div className='w-[20px] text-medium'>
                    <div className={`${isOpen ? "rotate-0" : "rotate-180"} transition-all duration-500`} >
                        <ArrowUp2 />
                    </div>
                </div>
            </div>
            {isOpen && <div className='absolute top-[49px] left-0 right-0 z-[20] w-full h-[400px] flex flex-col gap-[10px] bg-white rounded-b-[8px] overflow-hidden shadow-lg' style={{ boxShadow: "16px 16px 64px 0px rgba(242, 69, 53, 0.25)" }}>
                <div className='px-[20px] pt-[5px]'>
                    <input
                        type="text"
                        className={`flex-grow border-[1px] border-stroke placeholder:text-gray-400 p-[15px] rounded-[6px] w-full focus:border-primary focus:outline-none text-small`}
                        placeholder={"Search by name..."}
                        onChange={e => setSearchText(e.target.value)}
                        value={searchText}
                    />
                </div>
                <div className='w-full h-[calc(100%-25px)] overflow-auto custom-scrollbar flex flex-col gap-[10px]'>
                    {filteredValue?.length > 0 ? filteredValue?.filter(filterItem => type === "send" ? filterItem?.isSend : filterItem?.isReceive)?.map((item, index) => {
                        return (
                            <div onClick={() => handleSelect(item?.id)} key={index} className={`px-[20px] py-[10px] flex items-center gap-[20px] ${item?.id === value ? "bg-primary text-white" : ""} hover:bg-primary hover:text-white cursor-pointer`}>
                                <div className='h-[30px] w-[30px] rounded-full border-[2px] border-gray-400 p-[2px] bg-white'>
                                    <Image src={item?.icon} alt={item?.name} height={30} width={30} className='rounded-full' />
                                </div>
                                <div>{item?.name}</div>
                            </div>
                        )
                    }) : <div className='w-full text-center mt-[20px] text-primary'>No Data Found!</div>}
                </div>
            </div>}
        </div>
    )
}

export default ExchangeDropdown