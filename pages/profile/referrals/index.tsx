import CustomButton from '@/components/CustomButton';
import Loading from '@/components/Loading';
import ParentDiv from '@/components/ParentDiv'
import { selectAuthToken } from '@/redux/features/authSlice';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const MyReferrals = () => {
    const referralUrl = "https://swaphere.com/ref/3113";
    const textRef = useRef(null);
    const route = useRouter();
    const authToken: string | null = useSelector(selectAuthToken);

    const seleteUrl = () => {
        if (textRef.current) {
            const range = document.createRange();
            const selection = window.getSelection();
            if (selection) {
                range.selectNodeContents(textRef.current);
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }
    }


    if (!authToken) {
        route.push('/login');
        return <Loading />;
    }

    useEffect(() => {
        seleteUrl();
    }, []);

    return (
        <div className='w-full py-[60px] bg-[#f7f7f7] min-h-[50vh]'>
            <ParentDiv>
                <div className='w-full p-[10px] lg:p-[20px] bg-white shadow flex flex-col gap-[10px]'>
                    <div className='text-h6 md:text-h5 font-[500] text-gray-200'>My Referrals</div>
                    <div className='h-[1px] bg-gray-200/20 w-full my-[10px]' />

                    <div className='w-full h-[40px] flex items-center'>
                        <div className='w-[120px] h-full bg-gray-500 px-[10px] flex items-center justify-center text-gray-200 text-small font-[500]'>Referral Link</div>
                        <div className='w-[calc(100%-120px)] h-full flex items-center justify-between px-[10px] border-[0.5px] border-gray-500'>
                            <div ref={textRef}
                                onClick={seleteUrl} className='text-gray-200' style={{
                                    userSelect: 'text',
                                    whiteSpace: 'nowrap', // To handle long text
                                    scrollbarWidth: 'none', // For Firefox
                                    msOverflowStyle: 'none', // For IE and Edge
                                }}>{referralUrl}</div>
                            <CustomButton onClick={() => {
                                navigator.clipboard.writeText(referralUrl);
                                toast.success("URL copied successfully!");
                            }} title='Copy' />
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center mt-[10px]'>
                        <div className='border-[0.5px] border-indigo-300 bg-indigo-200 p-[10px] text-secondary'>Still no have exchanges from your referral link.</div>
                    </div>
                </div>
            </ParentDiv>
        </div>
    )
}

export default MyReferrals