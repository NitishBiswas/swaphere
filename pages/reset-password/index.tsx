import CheckboxButton from '@/components/CheckboxButton';
import CustomButton from '@/components/CustomButton';
import Loading from '@/components/Loading';
import ParentDiv from '@/components/ParentDiv'
import { Eye, EyeSlash } from 'iconsax-react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Login = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [loading, setLoading] = useState(false);
    const route = useRouter();
    const dispatch = useDispatch();

    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    };
    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };

    const handleLogin = async () => {
        if (!newPassword) {
            toast.error("New password is required");
            return;
        }
        if (!confirmPassword) {
            toast.error("Confirm password is required");
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        setLoading(true);
        try {

        } catch (error: any) {
            setLoading(false);
            toast.error(error?.message || error?.data?.message || "Something went wrong!");
        }
    }

    return (
        <div className='w-full py-[60px] bg-[#f7f7f7] min-h-[50vh]'>
            <Head>
                <title>Reset Password | SwapHere</title>
            </Head>
            <ParentDiv>
                <div className='w-full sm:w-[400px] lg:w-[600px] p-[10px] lg:p-[20px] bg-white shadow flex flex-col gap-[20px]'>
                    <div className='w-full text-h5 lg:text-h4 font-[900] text-primary text-center my-[30px]'>Reset Password</div>

                    <div className='w-full flex flex-col gap-[10px]'>
                        <div className='text-small text-gray-300 font-[700]'>New Password</div>
                        <div className='w-full relative'>
                            <input
                                type={showPassword1 ? "text" : "password"}
                                className={`flex-grow text-primary border-[1px] border-primary/20 placeholder:text-gray-400 p-[12px] rounded-[6px] w-full focus:border-primary focus:outline text-medium`}
                                placeholder={"Write your new password"}
                                onChange={e => setNewPassword(e.target.value)}
                                value={newPassword}
                            />
                            <button
                                type="button"
                                className="outline-none focus:outline-none text-[#747474] absolute top-[30%] right-3 z-10 cursor-pointer"
                                onClick={togglePasswordVisibility1}
                            >
                                {showPassword1 ? (
                                    <Eye size={24} />
                                ) : (
                                    <EyeSlash size={24} />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-[10px]'>
                        <div className='text-small text-gray-300 font-[700]'>Confirm Password</div>
                        <div className='w-full relative'>
                            <input
                                type={showPassword2 ? "text" : "password"}
                                className={`flex-grow text-primary border-[1px] border-primary/20 placeholder:text-gray-400 p-[12px] rounded-[6px] w-full focus:border-primary focus:outline text-medium`}
                                placeholder={"Write your confirm password"}
                                onChange={e => setNewPassword(e.target.value)}
                                value={newPassword}
                            />
                            <button
                                type="button"
                                className="outline-none focus:outline-none text-[#747474] absolute top-[30%] right-3 z-10 cursor-pointer"
                                onClick={togglePasswordVisibility2}
                            >
                                {showPassword2 ? (
                                    <Eye size={24} />
                                ) : (
                                    <EyeSlash size={24} />
                                )}
                            </button>
                        </div>
                    </div>
                    <CustomButton onClick={handleLogin} title='Change Password' size='large' className='w-full my-[20px]' />
                </div>
            </ParentDiv>
            {loading && <Loading />}
        </div>
    )
}

export default Login