import CustomButton from '@/components/CustomButton';
import Loading from '@/components/Loading';
import ParentDiv from '@/components/ParentDiv'
import { selectAuthToken } from '@/redux/features/authSlice';
import { Eye, EyeSlash } from 'iconsax-react';
import Head from 'next/head';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Settings = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState<number[]>([]);
    const route = useRouter();
    const authToken: string | null = useSelector(selectAuthToken);

    const togglePasswordVisibility = (id: number) => {
        if (showPassword?.includes(id)) {
            setShowPassword(showPassword.filter(id => id !== id));
        } else {
            setShowPassword([...showPassword, id]);
        }
    };

    if (!authToken) {
        route.push('/login');
        return <Loading />;
    }

    return (
        <div className='w-full py-[60px] bg-[#f7f7f7] min-h-[50vh]'>
            <Head>
                <title>Settings | SwapHere</title>
            </Head>
            <ParentDiv>
                <div className='w-full p-[10px] lg:p-[20px] bg-white shadow flex flex-col gap-[10px]'>
                    <div className='text-h6 md:text-h5 font-[500] text-gray-200'>Settings</div>
                    <div className='h-[1px] bg-gray-200/20 w-full my-[10px]' />

                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]'>
                        <div className='w-full flex flex-col gap-[10px]'>
                            <div className='text-small text-gray-300 font-[700]'>Current Password</div>
                            <div className='w-full relative'>
                                <input
                                    type={showPassword?.includes(1) ? "text" : "password"}
                                    className={`flex-grow text-primary border-[1px] border-primary/20 placeholder:text-gray-400 p-[12px] rounded-[6px] w-full focus:border-primary focus:outline text-medium`}
                                    placeholder={"Write your current password"}
                                    onChange={e => setCurrentPassword(e.target.value)}
                                    value={currentPassword}
                                />
                                <button
                                    type="button"
                                    className="outline-none focus:outline-none text-[#747474] absolute top-[30%] right-3 z-10 cursor-pointer"
                                    onClick={() => togglePasswordVisibility(1)}
                                >
                                    {showPassword?.includes(1) ? (
                                        <Eye size={24} />
                                    ) : (
                                        <EyeSlash size={24} />
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className='w-full flex flex-col gap-[10px]'>
                            <div className='text-small text-gray-300 font-[700]'>New Password</div>
                            <div className='w-full relative'>
                                <input
                                    type={showPassword?.includes(2) ? "text" : "password"}
                                    className={`flex-grow text-primary border-[1px] border-primary/20 placeholder:text-gray-400 p-[12px] rounded-[6px] w-full focus:border-primary focus:outline text-medium`}
                                    placeholder={"Write your new password"}
                                    onChange={e => setNewPassword(e.target.value)}
                                    value={newPassword}
                                />
                                <button
                                    type="button"
                                    className="outline-none focus:outline-none text-[#747474] absolute top-[30%] right-3 z-10 cursor-pointer"
                                    onClick={() => togglePasswordVisibility(2)}
                                >
                                    {showPassword?.includes(2) ? (
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
                                    type={showPassword?.includes(3) ? "text" : "password"}
                                    className={`flex-grow text-primary border-[1px] border-primary/20 placeholder:text-gray-400 p-[12px] rounded-[6px] w-full focus:border-primary focus:outline text-medium`}
                                    placeholder={"Confirm your new password"}
                                    onChange={e => setConfirmPassword(e.target.value)}
                                    value={confirmPassword}
                                />
                                <button
                                    type="button"
                                    className="outline-none focus:outline-none text-[#747474] absolute top-[30%] right-3 z-10 cursor-pointer"
                                    onClick={() => togglePasswordVisibility(3)}
                                >
                                    {showPassword?.includes(3) ? (
                                        <Eye size={24} />
                                    ) : (
                                        <EyeSlash size={24} />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-end mt-[20px]'>
                        <CustomButton title='Save Changes' size='large' className='w-full sm:w-fit' />
                    </div>
                </div>
            </ParentDiv>
        </div>
    )
}

export default Settings