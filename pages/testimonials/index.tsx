import ParentDiv from '@/components/ParentDiv'
import Head from 'next/head';
import React from 'react'

const REVIEW_LIST = [
    {
        star: "⭐⭐⭐⭐⭐",
        username: "👤 johnDoe",
        exchange: "PayPal USD - N পার্সোনাল BDT",
        comment: "Fast and reliable exchange. Very satisfied with the service!"
    },
    {
        star: "⭐⭐⭐⭐",
        username: "👤 sarahSmith",
        exchange: "Perfect Money USD - B পার্সোনাল BDT",
        comment: "Great experience overall. The exchange took a bit longer than expected, but it was smooth."
    },
    {
        star: "⭐⭐⭐⭐⭐",
        username: "👤 ahmedHossain",
        exchange: "Binance USD - Payeer BDT",
        comment: "Excellent service! Fast processing and very helpful support."
    },
    {
        star: "⭐⭐⭐",
        username: "👤 emilyCarter",
        exchange: "WebMoney USD - B পার্সোনাল BDT",
        comment: "Decent service, but the rate could be a bit better. Overall good experience."
    },
    {
        star: "⭐⭐⭐⭐⭐",
        username: "👤 michaelLee",
        exchange: "Payeer USD - Perfect Money USD",
        comment: "Fantastic! Quick and efficient. Will use again for sure."
    },
    {
        star: "⭐⭐⭐⭐",
        username: "👤 tanvirHasan",
        exchange: "PayPal USD - RedotPay USDT",
        comment: "Smooth transaction, reasonable fees. Happy with the exchange."
    }
];

const Testimonials = () => {
    return (
        <div className='w-full py-[60px] bg-[#f7f7f7] min-h-[50vh]'>
            <Head>
                <title>User Testimonials | SwapHere</title>
            </Head>
            <ParentDiv>
                <div className='w-full p-[10px] lg:p-[20px] bg-white shadow flex flex-col gap-[10px]'>
                    <div className='text-h6 md:text-h5 font-[500] text-gray-200'>User Testimonials</div>
                    <div className='h-[1px] bg-gray-200/20 w-full my-[10px]' />

                    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-[20px]'>
                        {REVIEW_LIST?.map((review, index) => {
                            return (
                                <div key={index} className='w-full flex flex-col gap-[10px] my-[20px] px-[20px] border-l-[5px] border-l-primary'>
                                    <div>{review?.star}</div>
                                    <div className='text-gray-200 font-[500]'>by {review?.username}</div>
                                    <div className='text-gray-200 font-[500]'>
                                        Exchange from <span className='text-primary font-normal'>{review?.exchange?.split('-')[0]}</span> to <span className='text-green-500 font-normal'>{review?.exchange?.split('-')[1]}</span>
                                    </div>
                                    <div className='text-gray-200 text-medium'>{review?.comment}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </ParentDiv>
        </div>
    )
}

export default Testimonials