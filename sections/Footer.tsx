import ParentDiv from '@/components/ParentDiv'
import Link from 'next/link'
import React from 'react'
import { Facebook, Instagram, Whatsapp } from 'iconsax-react';
import Image from 'next/image';
import TELEGRAM from '@/assets/images/telegram.svg';
import LINKEDIN from '@/assets/images/linkedin.svg';
import { usePathname } from 'next/navigation';

const QUICK_LINKS = [
    {
        id: 1,
        title: "Exchange",
        path: "/"
    },
    {
        id: 2,
        title: "Testimonials",
        path: "/testimonials"
    },
    {
        id: 3,
        title: "Affiliate",
        path: "/affiliate"
    },
];

const TERMS_SUPPORT = [
    {
        id: 1,
        title: 'Frequently Asked Questions',
        path: '/terms-and-support/faq',
    },
    {
        id: 2,
        title: 'Terms of Services',
        path: '/terms-and-support/terms-of-services',
    },
    {
        id: 3,
        title: 'Privacy Policy',
        path: '/terms-and-support/privacy-policy',
    },
    {
        id: 4,
        title: 'About',
        path: '/terms-and-support/about',
    },
    {
        id: 5,
        title: 'Data Deletion Policy',
        path: '/terms-and-support/data-deletion-policy',
    },
    {
        id: 6,
        title: "Contact",
        path: "/terms-and-support/contact"
    },
]

const SOCIAL_LINKS = [
    {
        title: 'Facebook',
        icon: <Facebook size="20" variant='Bold' className='text-[#b9b9c6]' />,
        path: 'https://www.facebook.com/appifydevs/',
    },
    {
        title: 'LinkedIn',
        icon: <Image src={LINKEDIN} alt='linkedin' height={16} width={16} className='opacity-70 group-hover:opacity-100' />,
        path: 'https://www.linkedin.com/company/appifydevs',
    },
    {
        title: 'Instagram',
        icon: <Instagram size="20" variant='Bold' className='text-[#b9b9c6]' />,
        path: 'https://www.instagram.com/appifydevs/',
    },
    {
        title: 'WhatsApp',
        icon: <Whatsapp size="20" variant='Bold' className='text-[#b9b9c6]' />,
        path: 'https://wa.me/8801601995906',
    },
    {
        title: 'Telegram',
        icon: <Image src={TELEGRAM} alt='telegram' height={18} width={18} className='opacity-70 group-hover:opacity-100' />,
        path: 'https://t.me/appifydevs',
    },
];

const Footer = () => {
    const pathName = usePathname();
    return (
        <div className='w-full bg-secondary'>
            <ParentDiv>
                <div className='w-full py-[40px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[40px]'>
                    <div className='w-full'>
                        <div className='text-white font-[900] text-h5 mb-[20px] tracking-[3px]'>QUICK LINKS</div>
                        <div className='flex flex-col gap-[10px]'>
                            {QUICK_LINKS?.map((item, index) => {
                                return (
                                    <Link href={item.path} key={index} className={`${pathName === item?.path ? "text-primary" : "text-white"} hover:text-primary text-[16px] font-[300] w-fit`}>
                                        {item.title}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='text-white font-[900] text-h5 mb-[20px] tracking-[3px]'>TERMS & SUPPORT</div>
                        <div className='flex flex-col gap-[10px]'>
                            {TERMS_SUPPORT?.map((item, index) => {
                                return (
                                    <Link href={item.path} key={index} className={`${pathName === item?.path ? "text-primary" : "text-white"} hover:text-primary text-[16px] font-[300] w-fit`}>
                                        {item.title}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='text-white font-[900] text-h5 mb-[20px] tracking-[3px]'>FOLLOW US ON</div>
                        <div className='flex flex-col gap-[10px]'>
                            {SOCIAL_LINKS?.map((item, index) => {
                                return (
                                    <div key={index} className='flex items-center gap-[10px]'>
                                        {item?.icon}
                                        <Link href={item.path} target='_blank' className={`tracking-[3px] ${pathName === item?.path ? "text-primary" : "text-white"} hover:text-primary text-[16px] font-[300] w-fit`}>
                                            {item.title}
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </ParentDiv>
            <div className='w-full h-[0.5px] bg-white/20' />
            <div className='w-full h-[60px] flex items-center justify-center text-white/80 tracking-[3px] text-[14px]'>
                © {new Date()?.getFullYear()} <Link href={"https://www.appifydevs.com/"} target='_blank'><span className='text-primary ml-[10px]'> Appify</span><span className='text-white'>Devs</span><span className='text-primary mr-[10px]'>. </span></Link> All rights reserved.
            </div>
        </div>
    )
}

export default Footer