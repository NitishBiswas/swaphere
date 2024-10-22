import React, { useState } from 'react';
import Head from 'next/head';
import AUTH from '@/assets/images/auth.jpg';
import Image from 'next/image';
import HERO from '@/assets/images/header-logo.svg';
import CustomInput from '@/components/CustomInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { login } from '@/redux/features/authSlice';
import { useSendUserAuthOtpMutation, useUserLoginMutation } from '@/redux/api/authApi/authApi';
import { useDispatch } from 'react-redux';
import Loading from '@/components/Loading';
import Captcha from '@/components/Captcha';
import OTPInput from 'react-otp-input';

const Login = () => {
    const route = useRouter();
    const [loginUser, loginUserResult] = useUserLoginMutation();
    const [sendUserAuthOtp, sendUserAuthOtpResult] = useSendUserAuthOtpMutation();
    const dispatch = useDispatch();
    const [reCaptcha, setReCaptcha] = useState<string | null>(null);
    const [otp, setOtp] = useState('');
    const next = localStorage.getItem('loginNext');

    const handleSendOtp = async (e: any) => {
        e.preventDefault();
        try {
            const userData = localStorage.getItem('userLoginData');
            let user = null;
            if (userData) {
                user = JSON.parse(userData);
            }
            if (otp?.length === 4 && user) {
                const res = await loginUser({ ...user?.data, password: user?.password, otp }).unwrap();
                dispatch(login({ token: res?.data?.token, id: res?.data?.id }));
                toast.success("Login successful!");
                localStorage.removeItem('userLoginData');
                localStorage.removeItem('loginNext');
                route.push('/');
            } else {
                toast.error('Invalid OTP!');
            }
        } catch (error: any) {
            console.log(error);
            toast.error(error?.data?.message || error?.message || "Something went wrong!");
        }
    };

    //handle email and password login
    const formik = useFormik({
        initialValues: {
            emailOrPhone: '',
            password: '',
        },
        validationSchema: Yup.object({
            emailOrPhone: Yup.string().required('Email or Phone is required!'),
            password: Yup.string().required('Password is required!'),
        }),
        onSubmit: async (values) => {
            // Regular expression for email and phone
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phonePattern = /^\d{10,15}$/; // Assuming phone numbers are 10 to 15 digits long

            // Determine if the input is an email or phone
            const isEmail = emailPattern.test(values.emailOrPhone);
            const isPhone = phonePattern.test(values.emailOrPhone);
            let data = {};
            if (isEmail) {
                data = { email: values.emailOrPhone };
            } else if (isPhone) {
                data = { phone: values.emailOrPhone };
            }
            if (reCaptcha) {
                try {
                    await sendUserAuthOtp(data).unwrap();
                    localStorage.setItem('userLoginData', JSON.stringify({ ...values, data }));
                    localStorage.setItem('loginNext', 'next');
                } catch (error: any) {
                    console.log(error);
                    toast.error(error?.data?.message || "Something went wrong!");
                }
            } else {
                toast.error("Please verify captcha!");
            }
        },
    });

    const {
        values,
        errors,
        touched,
        setFieldValue,
        handleChange,
        handleBlur,
        handleSubmit,
    } = formik;

    return (
        <div className='w-full h-full overflow-hidden'>
            <Head>
                <title>Login | Quiickpage</title>
            </Head>
            <div className='w-full h-full flex overflow-hidden'>
                <div className='hidden md:flex w-full md:w-[50%] h-full overflow-hidden'>
                    <Image src={AUTH} alt='login' className='w-full h-[100vh] object-cover overflow-hidden' />
                </div>
                <div className='w-full md:w-[50%] h-[100vh] px-[20px] custom-scrollbar overflow-y-auto py-[40px]'>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <div className='text-h4 font-[600] text-center'>Sign In</div>
                        <div className='w-full h-[24px] flex justify-center items-center relative my-[20px]'>
                            <div className='h-[1px] w-full bg-[#000]/10 absolute' />
                            <Image src={HERO} alt='hero' className='bg-white z-10 px-[20px]' />
                        </div>
                        <div className='w-full md:w-[50%]'>
                            {next ? <form className="w-full flex flex-col gap-[24px] mt-[30px]">
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
                                        type="tel"
                                        inputMode="numeric"
                                        key={index}
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
                                    onClick={handleSendOtp}
                                >
                                    Sign In
                                </button>
                            </form> : <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[20px] mt-[30px]">
                                <CustomInput
                                    label="Phone Number or Email Address"
                                    type="text"
                                    fieldTitle="emailOrPhone"
                                    setFieldValue={setFieldValue}
                                    value={values.emailOrPhone}
                                    touched={touched.emailOrPhone}
                                    error={errors.emailOrPhone}
                                    handleBlur={handleBlur}
                                />
                                <CustomInput
                                    label="Password"
                                    type="password"
                                    fieldTitle="password"
                                    setFieldValue={setFieldValue}
                                    value={values.password}
                                    touched={touched.password}
                                    error={errors.password}
                                    handleBlur={handleBlur}
                                />
                                <div className='w-full flex items-center justify-end gap-[5px]'>
                                    <Link href={"/forgot-password"} className='text-error cursor-pointer text-small underline'>
                                        Forgot Password ?
                                    </Link>
                                </div>
                                <div className='w-full'>
                                    <Captcha setCaptcha={setReCaptcha} />
                                </div>
                                <button
                                    className={`w-full relative text-nowrap text-white z-[1] overflow-hidden flex items-center justify-center gap-[6px] rounded-[6px] bg-primary h-[40px] text-small font-[400] py-[10px] px-[20px]`}
                                    onClick={() => {}}
                                >
                                    Next
                                </button>
                                <div className='w-full text-center text-normal cursor-pointer mt-[20px]'>New to App? <Link href="/signup" className='text-primary font-bold underline ml-[12px]'>Sign Up</Link></div>
                            </form>}
                        </div>
                    </div>
                </div>
            </div>
            {(loginUserResult.isLoading || sendUserAuthOtpResult.isLoading) && <Loading />}
        </div>
    )
}

export default Login