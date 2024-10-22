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

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);
    const [loading, setLoading] = useState(false);
    const route = useRouter();
    const dispatch = useDispatch();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async () => {
        if (!email) {
            toast.error("Email is required");
            return;
        }
        if (!password) {
            toast.error("Password is required");
            return;
        }

        setLoading(true);
        try {
            if (email === "test@gmail.com" && password === "1234") {
                setTimeout(() => {
                    dispatch(login({ token: "nitishbiswas" }));
                    setLoading(false);
                    toast.success("Logged in successfully");
                    route.push('/');
                }, 3000);
            } else {
                toast.error("Invalid credentials");
                setLoading(false);
            }
        } catch (error: any) {
            setLoading(false);
            toast.error(error?.message || error?.data?.message || "Something went wrong!");
        }
    }

    return (
        <div className='w-full py-[60px] bg-[#f7f7f7] min-h-[50vh]'>
            <Head>
                <title>Login | SwapHere</title>
            </Head>
            <ParentDiv>
                <div className='w-full sm:w-[400px] lg:w-[600px] p-[10px] lg:p-[20px] bg-white shadow flex flex-col gap-[20px]'>
                    <div className='w-full text-h5 lg:text-h4 font-[900] text-primary text-center my-[30px]'>Login with Your Account</div>
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
                    <div className='w-full flex flex-col gap-[10px]'>
                        <div className='text-small text-gray-300 font-[700]'>Your Password</div>
                        <div className='w-full relative'>
                            <input
                                type={showPassword ? "text" : "password"}
                                className={`flex-grow text-primary border-[1px] border-primary/20 placeholder:text-gray-400 p-[12px] rounded-[6px] w-full focus:border-primary focus:outline text-medium`}
                                placeholder={"Write your current password"}
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                            />
                            <button
                                type="button"
                                className="outline-none focus:outline-none text-[#747474] absolute top-[30%] right-3 z-10 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <Eye size={24} />
                                ) : (
                                    <EyeSlash size={24} />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-between gap-[20px]'>
                        <CheckboxButton title='Remember Me' checked={rememberMe} setChecked={setRememberMe} />
                        <Link href={"/forgot-password"} className='hover:text-primary'>Forgot Password?</Link>
                    </div>
                    <CustomButton onClick={handleLogin} title='Login' size='large' className='w-full my-[20px]' />
                    <div className='w-full text-center text-small text-gray-300'>
                        Don't have an account? <Link href={"/signup"} className='text-primary hover:text-error'>Sign Up</Link>
                    </div>
                </div>
            </ParentDiv>
            {loading && <Loading />}
        </div>
    )
}

export default Login