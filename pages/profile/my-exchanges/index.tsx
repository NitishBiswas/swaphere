import Loading from '@/components/Loading';
import ParentDiv from '@/components/ParentDiv'
import { selectAuthToken } from '@/redux/features/authSlice';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { useSelector } from 'react-redux';

const MyExchanges = () => {
    const route = useRouter();
    const authToken: string | null = useSelector(selectAuthToken);

    if (!authToken) {
        route.push('/login');
        return <Loading />;
    }
    return (
        <div className='w-full py-[60px] bg-[#f7f7f7] min-h-[50vh]'>
            <ParentDiv>
                <div className='w-full p-[10px] lg:p-[20px] bg-white shadow flex flex-col gap-[10px]'>
                    <div className='text-h6 md:text-h5 font-[500] text-gray-200'>My Exchanges</div>
                    <div className='h-[1px] bg-gray-200/20 w-full my-[10px]' />

                    <div className='w-full flex items-center justify-center'>
                        <div className='border-[0.5px] border-indigo-300 bg-indigo-200 p-[10px] text-secondary'> আপনি এখনো এক্সচেঞ্জ করেননি। <Link href={"/"} className='text-blue-600 underline'>Click here</Link> to make your first exchange.</div>
                    </div>
                </div>
            </ParentDiv>
        </div>
    )
}

export default MyExchanges