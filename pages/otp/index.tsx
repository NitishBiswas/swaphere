import React, { useState } from 'react';
import Head from 'next/head';
import AUTH from '@/assets/images/auth.jpg';
import Image from 'next/image';
import HERO from '@/assets/images/header-logo.svg';
import { useRouter } from 'next/router';
import OTPInput from 'react-otp-input';
import { useVerifyOtpMutation } from '@/redux/api/authApi/authApi';
import { toast } from 'react-toastify';
import Loading from '@/components/Loading';

const OTP = () => {
    const route = useRouter();
    const [otp, setOtp] = useState('');
    const [verifyOtp, verifyOtpResult] = useVerifyOtpMutation();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const otp_email = localStorage.getItem('qp_user_otp_email');
            if (otp?.length === 4 && otp_email) {
                await verifyOtp({ email: otp_email, otp: otp }).unwrap();
                toast.success('OTP verified!');
                route?.push('/reset-password');
            } else {
                toast.error('Invalid OTP!');
            }
        } catch (error: any) {
            console.log(error);
            toast.error(error?.data?.message || error?.message || "Something went wrong!");
        }
    };

    return (
        <div className='w-full h-full overflow-hidden'>
            <Head>
                <title>OTP | Quiickpage</title>
            </Head>
            <div className='w-full h-full flex overflow-hidden'>
                <div className='hidden md:flex w-full md:w-[50%] h-full overflow-hidden'>
                    <Image src={AUTH} alt='login' className='w-full h-[100vh] object-cover overflow-hidden' />
                </div>
                <div className='w-full md:w-[50%] h-[100vh] px-[20px]'>
                    <div className='w-full h-full flex flex-col items-center justify-center'>
                        <div className='text-h4 font-[600] text-center'>OTP</div>
                        <div className='w-full h-[24px] flex justify-center items-center relative my-[20px]'>
                            <div className='h-[1px] w-full bg-[#000]/10 absolute' />
                            <Image src={HERO} alt='hero' className='bg-white z-10 px-[20px]' />
                        </div>
                        <div className='w-full md:w-[50%]'>
                            <form className="w-full flex flex-col gap-[24px] mt-[30px]">
                                <OTPInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={4}
                                    containerStyle={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                    renderInput={(props, index) => <input
                                        {...props}
                                        maxLength={1}
                                        key={index}
                                        type="tel"
                                        inputMode="numeric"
                                        style={{
                                            width: '48px',
                                            height: '48px',
                                            fontSize: '20px',
                                            textAlign: 'center',
                                            borderRadius: '6px',
                                            border: '1px solid #c4c4c4',
                                            color: '#4F4F4F',
                                        }}
                                    />}
                                />
                                <button
                                    className={`w-full relative text-nowrap text-white z-[1] overflow-hidden flex items-center justify-center gap-[6px] rounded-[6px] bg-primary h-[40px] text-small font-[400] py-[10px] px-[20px]`}
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            </form>
                            <div className='py-[18px] px-[12px] text-justify text-small text-gray-200 border-[1px] border-stroke bg-neutral-900 mt-[44px] rounded-[6px]'>
                                Follow the OTP sent to your inbox within the next 10 minutes to easily set a new password and regain access to your account.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {verifyOtpResult.isLoading && <Loading />}
        </div>
    )
}

export default OTP