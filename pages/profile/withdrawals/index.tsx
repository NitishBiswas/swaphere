import { customStyles } from '@/assets/data/tableStyle'
import CustomButton from '@/components/CustomButton'
import CustomDropdown from '@/components/CustomDropdown'
import DeleteModal from '@/components/DeleteModal'
import Loading from '@/components/Loading'
import ParentDiv from '@/components/ParentDiv'
import ParentModal from '@/components/ParentModal'
import { selectAuthToken } from '@/redux/features/authSlice'
import { Add } from 'iconsax-react'
import moment from 'moment'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

interface IWithdraw {
    id: string;
    accountFrom: string;
    accountTo: string;
    amount: string;
    accountNumber: string;
    time: string;
}

const TO_ACCOUNT_LIST = [
    {
        label: "PayPal",
        value: "PayPal",
    },
    {
        label: "Bkash",
        value: "Bkash",
    },
    {
        label: "Rocket",
        value: "Rocket",
    },
    {
        label: "Nagad",
        value: "Nagad",
    },
    {
        label: "WebMoney",
        value: "WebMoney",
    },
    {
        label: "Payeer",
        value: "Payeer",
    },
    {
        label: "Perfect Money",
        value: "Perfect Money",
    }
];

const Withdrawals = () => {
    const [showAddReviewModal, setShowAddReviewModal] = useState(false);
    const [accountFrom, setAccountFrom] = useState("");
    const [accountTo, setAccountTo] = useState("PayPal");
    const [amount, setAmount] = useState("");
    const [accountNumber, setAccountNumber] = useState("");

    const [withdrawList, setWithdrawList] = useState([]);

    const columns = [
        {
            name: "Account From",
            selector: (row: IWithdraw) => row?.accountFrom,
            sortable: true,
        },
        {
            name: "Account To",
            selector: (row: IWithdraw) => row?.accountTo,
            sortable: true,
        },
        {
            name: "Account Number",
            selector: (row: IWithdraw) => row?.accountNumber,
            sortable: true,
        },
        {
            name: "Date",
            selector: (row: IWithdraw) => moment(row?.time).format("lll"),
            sortable: true,
        },
    ];

    const route = useRouter();
    const authToken: string | null = useSelector(selectAuthToken);

    const handleWithdrawal = async () => {
        if (!accountFrom) {
            toast.error("Account From is required");
            return;
        }
        if (!accountTo) {
            toast.error("Account To is required");
            return;
        }
        if (!amount) {
            toast.error("Amount is required");
            return;
        }
        if (!accountNumber) {
            toast.error("Account Number is required");
            return;
        }

        try {
            // Call API to withdrawal
            toast.success("Withdrawal request sent successfully");
        } catch (error: any) {
            toast.error(error?.message || error?.data?.message || "Something went wrong");
        }
    }

    if (!authToken) {
        route.push('/login');
        return <Loading />;
    }

    return (
        <div className='w-full py-[60px] bg-[#f7f7f7] min-h-[50vh]'>
            <Head>
                <title>Withdrawals | SwapHere</title>
            </Head>
            <ParentDiv>
                <div className='w-full p-[10px] lg:p-[20px] bg-white shadow flex flex-col gap-[10px]'>
                    <div className='w-full flex items-center justify-between gap-[10px]'>
                        <div className='text-h6 md:text-h5 font-[500] text-gray-200'>Withdrawals</div>
                        <CustomButton onClick={() => {
                            setShowAddReviewModal(true);
                        }} title='Request Fund Withdrawals' size='medium' leftIcon={<Add />} />
                    </div>
                    <div className='h-[1px] bg-gray-200/20 w-full my-[10px]' />

                    <div className='w-full'>
                        <DataTable
                            columns={columns}
                            data={withdrawList}
                            customStyles={customStyles}
                            persistTableHead
                            responsive
                        />
                    </div>

                    {withdrawList?.length === 0 && <div className='w-full flex items-center justify-center mt-[10px]'>
                        <div className='border-[0.5px] border-indigo-300 bg-indigo-200 p-[10px] text-secondary'> Still no have withdrawals.</div>
                    </div>}

                </div>
            </ParentDiv>
            <ParentModal
                showModal={showAddReviewModal}
                setShowModal={setShowAddReviewModal}
                title={"Request Fund Withdrawals"}
                submitButton={true}
                handleSubmit={handleWithdrawal}
                className='max-w-[300px] !min-w-[77%] sm:!min-w-[75%] md:!min-w-[45%] lg:!min-w-[35vw] xl:!min-w-[25vw]'
            >
                <div className='w-full flex flex-col gap-[20px]'>
                    <div className='w-full flex flex-col gap-[10px]'>
                        <div className='text-small text-gray-300 font-[700]'>Account From</div>
                        <CustomDropdown
                            data={[]}
                            onChange={setAccountFrom}
                            value={accountFrom}
                            initialLabel='-- Select Account --'
                        />
                    </div>
                    <div className='w-full flex flex-col gap-[10px]'>
                        <div className='text-small text-gray-300 font-[700]'>Account To</div>
                        <CustomDropdown
                            data={TO_ACCOUNT_LIST}
                            onChange={setAccountTo}
                            value={accountTo}
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
                        <div className='text-small text-gray-300 font-[700]'>আপনার {accountTo} একাউন্ট দিন</div>
                        <input
                            type="text"
                            className={`flex-grow text-primary border-[1px] border-primary/20 placeholder:text-gray-400 p-[12px] rounded-[6px] w-full focus:border-primary focus:outline text-medium`}
                            placeholder={"Type here your account no."}
                            onChange={e => setAccountNumber(e.target.value)}
                            value={accountNumber}
                        />
                    </div>
                </div>
            </ParentModal>
        </div>
    )
}

export default Withdrawals