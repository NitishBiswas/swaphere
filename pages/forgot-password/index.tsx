import CheckboxButton from '@/components/CheckboxButton';
import CustomButton from '@/components/CustomButton';
import Loading from '@/components/Loading';
import ParentDiv from '@/components/ParentDiv'
import { login } from '@/redux/features/authSlice';
import { Eye, EyeSlash } from 'iconsax-react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const route = useRouter();

    const handleLogin = async () => {
        if (!email) {
            toast.error("Email is required");
            return;
        }

        setLoading(true);
        try {
            route.push("/otp");
        } catch (error: any) {
            setLoading(false);
            toast.error(error?.message || error?.data?.message || "Something went wrong!");
        }
    }

    return (
        <div className='w-full py-[60px] bg-[#f7f7f7] min-h-[50vh]'>
            <Head>
                <title>Forgot Password | SwapHere</title>
            </Head>
            <ParentDiv>
                <div className='w-full sm:w-[400px] lg:w-[600px] p-[10px] lg:p-[20px] bg-white shadow flex flex-col gap-[20px]'>
                    <div className='w-full text-h5 lg:text-h4 font-[900] text-primary text-center my-[30px]'>Forgot Password</div>
                    <div className='w-full flex flex-col gap-[10px]'>
                        <div className='text-small text-gray-300 font-[700]'>Email</div>
                        <input
                            type="text"
                            className={`flex-grow text-primary border-[1px] border-primary/20 placeholder:text-gray-400 p-[12px] rounded-[6px] w-full focus:border-primary focus:outline text-medium`}
                            placeholder={"Type here your email"}
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <CustomButton onClick={handleLogin} title='Send OTP' size='large' className='w-full my-[20px]' />
                    <div className='w-full text-justify text-small text-gray-200 bg-gray-500/40 p-[20px]'>
                        Secure your $wapHere account! Enter your registered email above to request a password reset OTP. Follow the OTP sent to your inbox within the next 10 minutes to easily set a new password and regain access to your account.
                    </div>
                </div>
            </ParentDiv>
            {loading && <Loading />}
        </div>
    )
}

export default ForgotPassword