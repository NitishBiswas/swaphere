import CustomButton from '@/components/CustomButton'
import CustomDropdown from '@/components/CustomDropdown';
import Loading from '@/components/Loading';
import ParentDiv from '@/components/ParentDiv'
import ParentModal from '@/components/ParentModal';
import { selectAuthToken } from '@/redux/features/authSlice';
import { Eye, EyeSlash } from 'iconsax-react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const GATEWAY_LIST = [
    {
        label: "Adv Cash USD",
        value: "Adv Cash USD",
    },
    {
        label: "Perfect Money USD",
        value: "Perfect Money USD",
    },
    {
        label: "Binance USDT USD",
        value: "Binance USDT USD",
    },
    {
        label: "Payeer USD",
        value: "Payeer USD",
    },
    {
        label: "PayPal USD",
        value: "PayPal USD",
    },
    {
        label: "B পার্সোনাল BDT",
        value: "B পার্সোনাল BDT",
    },
    {
        label: "N পার্সোনাল BDT",
        value: "N পার্সোনাল BDT",
    },
    {
        label: "WebMoney USD",
        value: "WebMoney USD",
    },
    {
        label: "ReDotPay USDT USD",
        value: "ReDotPay USDT USD",
    }
];

const Wallet = () => {

    // for exchange money
    const [fromWallet, setFromWallet] = useState("");
    const [toGateway, setToGateway] = useState("Adv Cash USD");
    const [amount, setAmount] = useState("");
    const [willReceive, setWillReceive] = useState("0");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [exchangeModal, setExchangeModal] = useState(false);

    // for deposit money
    const [depositModal, setDepositModal] = useState(false);

    // for send money
    const [usernameOrEmail, setUsernameOrEmail] = useState("");
    const [paymentDescription, setPaymentDescription] = useState("");
    const [sendModal, setSendModal] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const route = useRouter();
    const authToken: string | null = useSelector(selectAuthToken);

    if (!authToken) {
        route.push('/login');
        return <Loading />;
    }

    return (
        <div className='w-full py-[60px] bg-[#f7f7f7] min-h-[50vh]'>
            <Head>
                <title>Wallet | SwapHere</title>
            </Head>
            <ParentDiv>
                <div className='w-full p-[10px] lg:p-[20px] bg-white shadow flex flex-col gap-[10px]'>
                    <div className='text-h6 md:text-h5 font-[500] text-gray-200'>Wallet</div>
                    <div className='h-[1px] bg-gray-200/20 w-full my-[10px]' />

                    <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-[20px] lg:gap-[30px]'>
                        <CustomButton onClick={() => setExchangeModal(true)} title='Exchange' size='large' className='w-full' />
                        <CustomButton onClick={() => setDepositModal(true)} title='Deposit' size='large' className='w-full' />
                        <CustomButton onClick={() => setSendModal(true)} title='Send Money' size='large' className='w-full' />
                        <CustomButton onClick={() => toast.info("Still no have transactions yet.")} title='Transactions' size='large' className='w-full' />
                    </div>
                    <div className='w-full flex items-center justify-center mt-[10px]'>
                        <div className='border-[0.5px] border-indigo-300 bg-indigo-200 p-[10px] text-secondary'>Still no money in your wallet.</div>
                    </div>
                </div>
            </ParentDiv>
            <ParentModal
                showModal={exchangeModal}
                setShowModal={setExchangeModal}
                title={"Exchange Money"}
                submitButton={true}
                className='max-w-[300px] !min-w-[77%] sm:!min-w-[75%] md:!min-w-[45%] lg:!min-w-[35vw] xl:!min-w-[25vw]'
            >
                <div className='w-full flex flex-col gap-[20px]'>
                    <div className='w-full flex flex-col gap-[10px]'>
                        <div className='text-small text-gray-300 font-[700]'>From Wallet</div>
                        <CustomDropdown
                            data={[]}
                            onChange={setFromWallet}
                            value={fromWallet}
                            initialLabel='-- Select Wallet --'
                        />
                    </div>
                    <div className='w-full flex flex-col gap-[10px]'>
                        <div className='text-small text-gray-300 font-[700]'>To Gateway</div>
                        <CustomDropdown
                            data={GATEWAY_LIST}
                            onChange={setToGateway}
                            value={toGateway}
                        />
                    </div>
                    <div className='w-full flex flex-col gap-[10px]'>
                        <div className='text-small text-gray-300 font-[700]'>Amount</div>
                        <input
                            type="text"
                            className={`flex-grow text-primary border-[1px] border-primary/20 placeholder:text-gray-400 p-[12px] rounded-[6px] w-full focus:border-primary focus:outline text-medium`}
                            placeholder={"Type here your amount"}
                            onChange={e => setAmount(e.target.value)}
                            value={amount}
                        />
                    </div>
                    <div className='w-full flex flex-col gap-[10px]'>
                        <div className='text-small text-gray-300 font-[700]'>Will Receive</div>
                        <input
                            type="text"
                            className={`flex-grow text-primary border-[1px] border-primary/20 placeholder:text-gray-400 p-[12px] rounded-[6px] w-full focus:border-primary focus:outline text-medium`}
                            placeholder={"Type here your amount"}
                            onChange={e => setWillReceive(e.target.value)}
                            value={willReceive}
                            disabled
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
                </div>
            </ParentModal>
            <ParentModal
                showModal={depositModal}
                setShowModal={setDepositModal}
                title={"Deposit Money"}
                submitButton={true}
                className='max-w-[300px] !min-w-[77%] sm:!min-w-[75%] md:!min-w-[45%] lg:!min-w-[35vw] xl:!min-w-[25vw]'
            >
                <div className='w-full flex flex-col gap-[20px]'>
                    <div className='w-full flex flex-col gap-[10px]'>
                        <div className='text-small text-gray-300 font-[700]'>Deposit Via</div>
                        <CustomDropdown
                            data={GATEWAY_LIST}
                            onChange={setToGateway}
                            value={toGateway}
                        />
                    </div>
                    <div className='w-full flex flex-col gap-[10px]'>
                        <div className='text-small text-gray-300 font-[700]'>Amount</div>
                        <input
                            type="text"
                            className={`flex-grow text-primary border-[1px] border-primary/20 placeholder:text-gray-400 p-[12px] rounded-[6px] w-full focus:border-primary focus:outline text-medium`}
                            placeholder={"Type here your amount"}
                            onChange={e => setAmount(e.target.value)}
                            value={amount}
                        />
                    </div>
                </div>
            </ParentModal>
            <ParentModal
                showModal={sendModal}
                setShowModal={setSendModal}
                title={"Send Money"}
                submitButton={true}
                className='max-w-[300px] !min-w-[77%] sm:!min-w-[75%] md:!min-w-[45%] lg:!min-w-[35vw] xl:!min-w-[25vw]'
            >
                <div className='w-full flex flex-col gap-[20px]'>
                    <div className='w-full flex flex-col gap-[10px]'>
                        <div className='text-small text-gray-300 font-[700]'>Recipient Username or Email</div>
                        <input
                            type="text"
                            className={`flex-grow text-primary border-[1px] border-primary/20 placeholder:text-gray-400 p-[12px] rounded-[6px] w-full focus:border-primary focus:outline text-medium`}
                            placeholder={"Type here username/email"}
                            onChange={e => setUsernameOrEmail(e.target.value)}
                            value={usernameOrEmail}
                        />
                    </div>
                    <div className='w-full flex flex-col gap-[10px]'>
                        <div className='text-small text-gray-300 font-[700]'>Wallet</div>
                        <CustomDropdown
                            data={[]}
                            onChange={setFromWallet}
                            value={fromWallet}
                            initialLabel='-- Select Wallet --'
                        />
                    </div>
                    <div className='w-full flex flex-col gap-[10px]'>
                        <div className='text-small text-gray-300 font-[700]'>Amount</div>
                        <input
                            type="text"
                            className={`flex-grow text-primary border-[1px] border-primary/20 placeholder:text-gray-400 p-[12px] rounded-[6px] w-full focus:border-primary focus:outline text-medium`}
                            placeholder={"Type here your amount"}
                            onChange={e => setAmount(e.target.value)}
                            value={amount}
                        />
                    </div>
                    <div className='w-full flex flex-col gap-[10px]'>
                        <div className='text-small text-gray-300 font-[700]'>Payment Description</div>
                        <textarea
                            className={`flex-grow text-primary border-[1px] border-primary/20 placeholder:text-gray-400 p-[12px] rounded-[6px] w-full focus:border-primary focus:outline text-medium resize-none`}
                            placeholder='Type here payment info'
                            onChange={e => setPaymentDescription(e.target.value)}
                            value={paymentDescription}
                            rows={4}
                        />
                    </div>
                </div>
            </ParentModal>
        </div>
    )
}

export default Wallet