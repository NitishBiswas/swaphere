import OTPInput from 'react-otp-input';
import CustomButton from '@/components/CustomButton';
import Loading from '@/components/Loading';
import ParentDiv from '@/components/ParentDiv'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Head from 'next/head';

const OTP = () => {
    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const route = useRouter();

    const handleLogin = async () => {
        if (!otp || otp?.length !== 4) {
            toast.error("OTP is required and must be 4 digits");
            return;
        }

        setLoading(true);
        try {
            route.push("/reset-password");
        } catch (error: any) {
            setLoading(false);
            toast.error(error?.message || error?.data?.message || "Something went wrong!");
        }
    }

    return (
        <div className='w-full py-[60px] bg-[#f7f7f7] min-h-[50vh]'>
            <Head>
                <title>OTP | SwapHere</title>
            </Head>
            <ParentDiv>
                <div className='w-full sm:w-[400px] lg:w-[600px] p-[10px] lg:p-[20px] bg-white shadow flex flex-col gap-[20px]'>
                    <div className='w-full text-h5 lg:text-h4 font-[900] text-primary text-center my-[30px]'>Forgot Password</div>
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
                    <CustomButton onClick={handleLogin} title='Send OTP' size='large' className='w-full my-[20px]' />
                    <div className='w-full text-justify text-small text-gray-200 bg-gray-500/40 p-[20px]'>
                        Follow the OTP sent to your inbox within the next 10 minutes to easily set a new password and regain access to your account.
                    </div>
                </div>
            </ParentDiv>
            {loading && <Loading />}
        </div>
    )
}

export default OTP