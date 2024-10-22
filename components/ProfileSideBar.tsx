import Link from 'next/link';
import React from 'react';
import CustomButton from './CustomButton';
import { usePathname } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { logout } from '@/redux/features/authSlice';

interface IProfileSidebar {
    title: string;
    path: string;
}

const PROFILE_SIDEBAR: IProfileSidebar[] = [
    {
        title: 'Profile Info',
        path: '/profile',
    },
    {
        title: 'My Exchanges',
        path: '/profile/my-exchanges',
    },
    {
        title: 'My Reviews',
        path: '/profile/my-reviews',
    },
    {
        title: 'Referrals',
        path: '/profile/referrals',
    },
    {
        title: 'Wallet',
        path: '/profile/wallet',
    },
    {
        title: 'Withdrawals',
        path: '/profile/withdrawals',
    },
];

const ProfileSideBar = ({ onClose }: { onClose: () => void }) => {
    const dispatch = useDispatch();
    const pathName = usePathname();

    return (
        <div className='w-[160px] max-h-[90vh] custom-scrollbar overflow-y-auto flex flex-col gap-[16px] text-gray-200 text-small p-[16px] bg-white rounded-b-[6px]' style={{ boxShadow: "16px 16px 64px 0px rgba(242, 69, 53, 0.25)" }}>
            {PROFILE_SIDEBAR?.map((item, index) => {
                return (
                    <Link key={index} onClick={onClose} href={item?.path} className={`${pathName === item?.path ? "text-primary" : "hover:text-primary hover:underline"}`}>{item?.title}</Link>
                )
            })}
            <CustomButton onClick={() => dispatch(logout())} title='Log Out' color='error' size='medium' />
        </div>
    )
}

export default ProfileSideBar