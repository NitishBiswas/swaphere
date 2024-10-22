import { CloseCircle } from 'iconsax-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import LOGO from '@/assets/images/logo.svg';
import React, { ReactNode } from 'react';
import Link from 'next/link';
import CursorMovingText from './CursorMovingText';

interface IParentSideBarProps {
    children: ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const ParentSideBar: React.FC<IParentSideBarProps> = ({ children, className = "", isOpen, onClose }) => {
    const route = useRouter();

    return (
        <div
            className={`px-[40px] py-[20px] h-[100vh] overflow-y-auto custom-scrollbar fixed top-0 left-0 bg-white z-[999999] transition-transform duration-1000 ease-in-out transform w-full sm:w-[350px] ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            style={isOpen ? {
                boxShadow: "16px 16px 64px 0px rgba(242, 69, 53, 0.25)"
            } : {}}
        >
            <div className='flex justify-between items-center mb-[40px]'>
                <Link href={'/'} className='flex items-center gap-[5px]'>
                    {/* <Image priority={true} className='cursor-pointer' src={LOGO} alt='logo' width={30} /> */}
                    <div className='text-[30px] font-bold flex items-center gap-[2px]'>
                        <CursorMovingText text='APPIFY' />
                        <div className='text-secondary'>DEVS<span className='text-primary'>.</span></div>
                    </div>
                </Link>
                <div onClick={onClose} className='w-fit text-primary hover:text-error cursor-pointer transition-all'>
                    <CloseCircle size="24" />
                </div>
            </div>
            {children}
        </div>
    );
};

export default ParentSideBar;
