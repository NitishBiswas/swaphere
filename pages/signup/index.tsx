import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import Image from 'next/image';
import AUTH from '@/assets/images/auth.jpg';
import HERO from '@/assets/images/header-logo.svg';
import Link from 'next/link';
import CustomInput from '@/components/CustomInput';
import CustomPhoneInput from '@/components/CustomPhoneInput';
import RadioButton from '@/components/RadioButton';
import { useCreateUserMutation, useSendUserAuthOtpMutation } from '@/redux/api/authApi/authApi';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/features/authSlice';
import Loading from '@/components/Loading';
import CustomDropdown, { IDropdown } from '@/components/CustomDropdown';
import { useGetAllOccupationQuery } from '@/redux/api/occupationApi/occupationApi';
import Captcha from '@/components/Captcha';
import OTPInput from 'react-otp-input';
import CustomTextArea from '@/components/CustomTextArea';

export const GENDER_LIST = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' },
];

export const AGE_RANGE = [
    { label: "15-25", value: "15-25" },
    { label: "26-35", value: "26-35" },
    { label: "36-45", value: "36-45" },
    { label: "46-55", value: "46-55" },
    { label: "56-65", value: "56-65" },
    { label: "66-75", value: "66-75" },
];

const CreateAccount = () => {
    const route = useRouter();
    const [createUser, createUserResult] = useCreateUserMutation();
    const [sendUserAuthOtp, sendUserAuthOtpResult] = useSendUserAuthOtpMutation();
    const { data: allOccupations, isLoading: occupationLoading } = useGetAllOccupationQuery(null);
    const [occupationList, setOccupationList] = useState<IDropdown[]>([]);
    const dispatch = useDispatch();
    const [reCaptcha, setReCaptcha] = useState<string | null>(null);
    const [otp, setOtp] = useState('');
    const next = localStorage.getItem('signupNext');

    const handleSendOtp = async (e: any) => {
        e.preventDefault();
        try {
            const userData = localStorage.getItem('userSignupData');
            let user = null;
            if (userData) {
                user = JSON.parse(userData);
            }
            if (otp?.length === 4 && user) {
                const res = await createUser({ ...user, otp }).unwrap();
                dispatch(login({ token: res?.data?.token, id: res?.data?.id }));
                toast.success("Account created!");
                localStorage.removeItem('userSignupData');
                localStorage.removeItem('signupNext');
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
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            password: '',
            username: '',
            occupation: '',
            city: '',
            address: '',
            ageRange: '',
            gender: 'Male',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First Name is required!'),
            lastName: Yup.string().required('Last Name is required!'),
            username: Yup.string().required('Username is required!'),
            phone: Yup.string().required('Phone number is required!'),
            email: Yup.string().email('Invalid email address!').required('Email is required!'),
            city: Yup.string().required('City is required!'),
            ageRange: Yup.string().required('Age range is required!'),
            gender: Yup.string().required('Gender is required!'),
            password: Yup.string().required('Password is required!'),
        }),
        onSubmit: async (values) => {
            if (reCaptcha) {
                const data = {
                    fname: values.firstName,
                    lname: values.lastName,
                    phone: values.phone,
                    email: values.email,
                    password: values.password,
                    username: values.username,
                    occupation: values.occupation,
                    city: values.city,
                    address: values.address,
                    ageRange: values.ageRange,
                    gender: values.gender,
                }
                try {
                    await sendUserAuthOtp({ email: values?.email, phone: values?.phone }).unwrap();
                    localStorage.setItem('userSignupData', JSON.stringify(data));
                    localStorage.setItem('signupNext', 'next');
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

    useEffect(() => {
        if (allOccupations) {
            setOccupationList(allOccupations?.data?.map((occupation: any) => ({ label: occupation?.name, value: occupation?.name })));
        }
    }, [allOccupations]);

    return (
        <div className='w-full h-full'>
            <Head>
                <title>Create Account | Quiickpage</title>
            </Head>
            <div className='w-full h-full flex'>
                <div className='hidden md:flex w-full md:w-[50%] h-full overflow-hidden'>
                    <Image src={AUTH} alt='login' className='w-full h-[100vh] object-contain overflow-hidden' />
                </div>
                <div className='w-full md:w-[50%] h-[100vh] px-[20px] custom-scrollbar overflow-y-auto py-[40px]'>
                    <div className='w-full flex flex-col items-center justify-center'>
                        <div className='text-h4 font-[600] text-center'>Create Account</div>
                        <div className='w-full h-[24px] flex justify-center items-center relative my-[20px]'>
                            <div className='h-[1px] w-full bg-[#000]/10 absolute' />
                            <Image src={HERO} alt='hero' className='bg-white z-10 px-[20px]' />
                        </div>
                        <div className='w-full md:w-[60%]'>
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
                                    Sign Up
                                </button>
                            </form> : <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[20px] mt-[30px]">
                                <div className='flex gap-[24px]'>
                                    <CustomInput
                                        label="First Name"
                                        type="text"
                                        fieldTitle="firstName"
                                        setFieldValue={setFieldValue}
                                        value={values.firstName}
                                        touched={touched.firstName}
                                        error={errors.firstName}
                                        handleBlur={handleBlur}
                                    />
                                    <CustomInput
                                        label="Last Name"
                                        type="text"
                                        fieldTitle="lastName"
                                        setFieldValue={setFieldValue}
                                        value={values.lastName}
                                        touched={touched.lastName}
                                        error={errors.lastName}
                                        handleBlur={handleBlur}
                                    />
                                </div>
                                <CustomInput
                                    label="Username"
                                    type="text"
                                    fieldTitle="username"
                                    setFieldValue={setFieldValue}
                                    value={values.username}
                                    touched={touched.username}
                                    error={errors.username}
                                    handleBlur={handleBlur}
                                />
                                <CustomPhoneInput
                                    label="Phone Number"
                                    fieldTitle="phone"
                                    setFieldValue={setFieldValue}
                                    value={values.phone}
                                />
                                <CustomInput
                                    label="Email Address"
                                    type="email"
                                    fieldTitle="email"
                                    setFieldValue={setFieldValue}
                                    value={values.email}
                                    touched={touched.email}
                                    error={errors.email}
                                    handleBlur={handleBlur}
                                />
                                <CustomDropdown
                                    title="Occupation"
                                    data={occupationList}
                                    fieldTitle="occupation"
                                    setFieldValue={setFieldValue}
                                    value={values.occupation}
                                    touched={touched.occupation}
                                    error={errors.occupation}
                                    handleBlur={handleBlur}
                                    isRequired={false}
                                />
                                <div>
                                    <label className="text-small font-[600]">Gender</label>
                                    <div className='mt-[6px] text-small flex justify-between items-center'>
                                        {GENDER_LIST?.map((item, index) => {
                                            return (
                                                <RadioButton key={index} title={item?.label} checked={values?.gender === item?.value} setChecked={() => setFieldValue("gender", item?.value)} />
                                            )
                                        })}

                                    </div>
                                </div>
                                <CustomInput
                                    label="City"
                                    type="text"
                                    fieldTitle="city"
                                    setFieldValue={setFieldValue}
                                    value={values.city}
                                    touched={touched.city}
                                    error={errors.city}
                                    handleBlur={handleBlur}
                                />
                                <CustomTextArea
                                    label="Address"
                                    fieldTitle="address"
                                    setFieldValue={setFieldValue}
                                    value={values.address}
                                    touched={touched.address}
                                    error={errors.address}
                                    handleBlur={handleBlur}
                                    isRequired={false}
                                    numberOfRows={2}
                                />
                                <div>
                                    <label className="text-small font-[600]">Age Range<span className='text-error'> *</span></label>
                                    <div className='mt-[6px] text-small grid grid-cols-3 gap-[20px] justify-between'>
                                        {AGE_RANGE?.map((item, index) => {
                                            return (
                                                <RadioButton key={index} title={item?.label} checked={values?.ageRange === item?.value} setChecked={() => setFieldValue("ageRange", item?.value)} />
                                            )
                                        })}

                                    </div>
                                </div>
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
                                <div className='w-full'>
                                    <Captcha setCaptcha={setReCaptcha} />
                                </div>
                                <button
                                    className={`w-full relative text-nowrap text-white z-[1] overflow-hidden flex items-center justify-center gap-[6px] rounded-[6px] bg-primary h-[40px] text-small font-[400] py-[10px] px-[20px]`}
                                    onClick={() => {}}
                                >
                                    Next
                                </button>
                                <div className='w-full text-center text-normal cursor-pointer mt-[20px]'>Already have App? <Link href="/login" className='text-primary font-bold underline ml-[12px]'>Sign In</Link></div>
                            </form>}
                        </div>
                    </div>
                </div>
            </div>
            {(createUserResult.isLoading || occupationLoading || sendUserAuthOtpResult.isLoading) && <Loading />}
        </div>
    )
}

export default CreateAccount