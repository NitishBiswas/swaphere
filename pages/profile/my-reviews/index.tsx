import { customStyles } from '@/assets/data/tableStyle'
import CustomButton from '@/components/CustomButton'
import CustomDropdown from '@/components/CustomDropdown'
import DeleteModal from '@/components/DeleteModal'
import Loading from '@/components/Loading'
import ParentDiv from '@/components/ParentDiv'
import ParentModal from '@/components/ParentModal'
import { selectAuthToken } from '@/redux/features/authSlice'
import { Add } from 'iconsax-react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux'

interface IReview {
    id: string;
    username: string;
    exchange: string;
    comment: string;
    star: string;
}

const STAR = [
    {
        label: "⭐⭐⭐⭐⭐",
        value: "⭐⭐⭐⭐⭐"
    },
    {
        label: "⭐⭐⭐⭐",
        value: "⭐⭐⭐⭐"
    },
    {
        label: "⭐⭐⭐",
        value: "⭐⭐⭐"
    },
    {
        label: "⭐⭐",
        value: "⭐⭐"
    },
];

const MyReviews = () => {
    const [row, setRow] = React.useState<IReview | null>(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showAddReviewModal, setShowAddReviewModal] = useState(false);
    const [star, setStar] = useState("⭐⭐⭐⭐⭐");
    const [exchange, setExchange] = useState("");
    const [comment, setComment] = useState("");
    const [reviewList, setReviewList] = useState([]);
    const route = useRouter();
    const authToken: string | null = useSelector(selectAuthToken);

    const columns = [
        {
            name: "Exchange",
            selector: (row: IReview) => row?.exchange,
            sortable: true,
        },
        {
            name: "Star",
            selector: (row: IReview) => row?.star,
            sortable: true,
        },
        {
            name: "Comment",
            selector: (row: IReview) => row?.comment,
            sortable: true,
            wrap: true,
            grow: 2,
        },
        {
            name: "Actions",
            cell: (row: IReview) => (
                <div className='flex items-center gap-[5px]'>
                    <CustomButton onClick={() => {
                        setRow(row);
                        setShowAddReviewModal(true);
                    }} title='Edit' size='small' color='info' />
                    <CustomButton onClick={() => {
                        setRow(row);
                        setShowDeleteModal(true);
                    }} title='Delete' size='small' color='error' />
                </div>
            ),
            sortable: true,
        },
    ];

    useEffect(() => {
        if (row) {
            setStar(row?.star);
            setExchange(row?.exchange);
            setComment(row?.comment);
        } else {
            setStar("");
            setExchange("");
            setComment("");
        }
    }, [row]);


    if (!authToken) {
        route.push('/login');
        return <Loading />;
    }

    return (
        <div className='w-full py-[60px] bg-[#f7f7f7] min-h-[50vh]'>
            <Head>
                <title>My Reviews | SwapHere</title>
            </Head>
            <ParentDiv>
                <div className='w-full p-[10px] lg:p-[20px] bg-white shadow flex flex-col gap-[10px]'>
                    <div className='w-full flex items-center justify-between gap-[10px]'>
                        <div className='text-h6 md:text-h5 font-[500] text-gray-200'>My Reviews</div>
                        <CustomButton onClick={() => {
                            setExchange("");
                            setComment("");
                            setShowAddReviewModal(true);
                        }} title='Add Review' size='medium' leftIcon={<Add />} />
                    </div>
                    <div className='h-[1px] bg-gray-200/20 w-full my-[10px]' />

                    <div className='w-full'>
                        <DataTable
                            columns={columns}
                            data={reviewList}
                            customStyles={customStyles}
                            persistTableHead
                            responsive
                        />
                    </div>
                    {reviewList?.length === 0 &&
                        <div className='w-full flex items-center justify-center'>
                            <div className='border-[0.5px] border-indigo-300 bg-indigo-200 p-[10px] text-secondary'> Still no have testimonials. <span className='text-blue-600 underline'>Click here</span> to submit testimonial.</div>
                        </div>
                    }
                </div>
            </ParentDiv>
            <ParentModal
                showModal={showAddReviewModal}
                setShowModal={setShowAddReviewModal}
                title={row ? "Edit Review" : "Add Review"}
                submitButton={true}
                className='max-w-[300px] !min-w-[77%] sm:!min-w-[75%] md:!min-w-[45%] lg:!min-w-[35vw] xl:!min-w-[25vw]'
            >
                <div className='w-full flex flex-col gap-[20px]'>
                    <div className='w-full flex flex-col gap-[10px]'>
                        <div className='text-small text-gray-300 font-[700]'>Exchange Items</div>
                        <CustomDropdown
                            data={[]}
                            onChange={setExchange}
                            value={exchange}
                            initialLabel='-- Select an Exchange --'
                        />
                    </div>
                    <div className='w-full flex flex-col gap-[10px]'>
                        <div className='text-small text-gray-300 font-[700]'>Select Reviews</div>
                        <CustomDropdown
                            data={STAR}
                            onChange={setStar}
                            value={star}
                        />
                    </div>
                    <div className='w-full flex flex-col gap-[10px]'>
                        <div className='text-small text-gray-300 font-[700]'>Your Comment</div>
                        <textarea
                            className={`flex-grow text-primary border-[1px] border-primary/20 placeholder:text-gray-400 p-[12px] rounded-[6px] w-full focus:border-primary focus:outline text-medium resize-none`}
                            placeholder='Type here your comment'
                            onChange={e => setComment(e.target.value)}
                            value={comment}
                            rows={4}
                        />
                    </div>
                </div>
            </ParentModal>
            <DeleteModal handleDelete={async () => {

            }} title='Do you want delete this review?' setShowDeleteModal={setShowDeleteModal} showDeleteModal={showDeleteModal} />
        </div>
    )
}

export default MyReviews