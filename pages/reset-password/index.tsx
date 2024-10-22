import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import AUTH from '@/assets/images/auth.jpg';
import HERO from '@/assets/images/header-logo.svg';
import CustomInput from '@/components/CustomInput';
import { useDispatch } from 'react-redux';
import { useResetPasswordMutation } from '@/redux/api/authApi/authApi';
import { login } from '@/redux/features/authSlice';
import { toast } from 'react-toastify';

const ResetPassword = () => {
    const route = useRouter();
    const [resetPassword, resetPasswordResult] = useResetPasswordMutation();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            newPassword: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            newPassword: Yup.string()
                .required('New Password is required!'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('newPassword')], 'Passwords must match!')
                .required('Confirm Password is required!'),
        }),
        onSubmit: async (values) => {
            try {
                const otp_email = localStorage.getItem('qp_user_otp_email');
                if (otp_email) {
                    const res = await resetPassword({ email: otp_email, password: values.newPassword }).unwrap();
                    dispatch(login({ token: res?.data?.token, id: res?.data?.id }));
                    localStorage.removeItem('qp_user_otp_email');
                    toast.success("Password reset successfully!");
                    route.push('/');
                }
            } catch (error: any) {
                console.log(error);
                toast.error(error?.data?.message || error?.message || "Something went wrong!");
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
                <title>Reset Password | Quiickpage</title>
            </Head>
            <div className='w-full h-full flex overflow-hidden'>
                <div className='hidden md:flex w-full md:w-[50%] h-full overflow-hidden'>
                    <Image src={AUTH} alt='login' className='w-full h-[100vh] object-cover overflow-hidden' />
                </div>
                <div className='w-full md:w-[50%] h-[100vh] px-[20px]'>
                    <div className='w-full h-full flex flex-col items-center justify-center'>
                        <div className='text-h4 font-[600] text-center'>Forgot Password</div>
                        <div className='w-full h-[24px] flex justify-center items-center relative my-[20px]'>
                            <div className='h-[1px] w-full bg-[#000]/10 absolute' />
                            <Image src={HERO} alt='hero' className='bg-white z-10 px-[20px]' />
                        </div>
                        <div className='w-full md:w-[50%]'>
                            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[24px] mt-[30px]">
                                <CustomInput
                                    label="New Password"
                                    type="newPassword"
                                    fieldTitle="newPassword"
                                    setFieldValue={setFieldValue}
                                    value={values.newPassword}
                                    touched={touched.newPassword}
                                    error={errors.newPassword}
                                    handleBlur={handleBlur}
                                />
                                <CustomInput
                                    label="Confirm Password"
                                    type="confirmPassword"
                                    fieldTitle="confirmPassword"
                                    setFieldValue={setFieldValue}
                                    value={values.confirmPassword}
                                    touched={touched.confirmPassword}
                                    error={errors.confirmPassword}
                                    handleBlur={handleBlur}
                                />
                                <button
                                    type='submit'
                                    className={`w-full relative text-nowrap text-white z-[1] overflow-hidden flex items-center justify-center gap-[6px] rounded-[6px] bg-primary h-[40px] text-small font-[400] py-[10px] px-[20px]`}
                                >
                                    Change Password
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword