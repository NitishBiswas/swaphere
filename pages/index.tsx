import ExchangeListTable from '@/components/ExchangeListTable'
import ParentDiv from '@/components/ParentDiv'
import Hero, { EXCHANGE_LIST } from '@/sections/Hero'
import { ArrowLeft2, ArrowRight2, Calendar, Chrome } from 'iconsax-react'
import moment from 'moment'
import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomButton from '@/components/CustomButton'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { ADV_CASH, BINANCE, FIVERR, PAYEER, PAYPAL, PERFECT_MONEY, REDOTPAY, WEB_MONEY } from '@/assets/images'
import Image from 'next/image'
import DataTable from 'react-data-table-component'
import { customStyles } from '@/assets/data/tableStyle'

const PROCESSING_EXCHANGES = [
    {
        send: "B পার্সোনাল BDT",
        received: "RedotPay USDT USD",
        amount: "100 BDT",
        username: "sudebkumar",
        time: "2024-10-03", // ISO format
        status: "Processing"
    },
    {
        send: "N পার্সোনাল BDT",
        received: "Perfect Money USD",
        amount: "150 BDT",
        username: "johnDoe",
        time: "2024-10-04",
        status: "Processing"
    }
];

const COMPLETED_EXCHANGES = [
    {
        send: "B পার্সোনাল BDT",
        received: "RedotPay USDT USD",
        amount: "128 BDT",
        username: "Miraj15",
        time: "2024-07-17",
        status: "Accepted"
    },
    {
        send: "B পার্সোনাল BDT",
        received: "RedotPay USDT USD",
        amount: "150 BDT",
        username: "tanoy",
        time: "2024-07-17",
        status: "Accepted"
    },
    {
        send: "B পার্সোনাল BDT",
        received: "RedotPay USDT USD",
        amount: "128 BDT",
        username: "tanvir431",
        time: "2024-07-16",
        status: "Accepted"
    },
    {
        send: "B পার্সোনাল BDT",
        received: "RedotPay USDT USD",
        amount: "2000 BDT",
        username: "voidsir6666",
        time: "2024-07-15",
        status: "Accepted"
    },
    {
        send: "B পার্সোনাল BDT",
        received: "Perfect Money USD",
        amount: "123 BDT",
        username: "anwarsheikh",
        time: "2024-07-14",
        status: "Accepted"
    },
    {
        send: "N পার্সোনাল BDT",
        received: "RedotPay USDT USD",
        amount: "260 BDT",
        username: "suhagbd24info",
        time: "2024-07-14",
        status: "Accepted"
    },
    {
        send: "N পার্সোনাল BDT",
        received: "RedotPay USDT USD",
        amount: "300 BDT",
        username: "suhagbd24info",
        time: "2024-07-14",
        status: "Accepted"
    },
    {
        send: "B পার্সোনাল BDT",
        received: "RedotPay USDT USD",
        amount: "128 BDT",
        username: "suhagbd24info",
        time: "2024-07-13",
        status: "Accepted"
    },
    {
        send: "B পার্সোনাল BDT",
        received: "RedotPay USDT USD",
        amount: "135 BDT",
        username: "tanoy",
        time: "2024-07-12",
        status: "Accepted"
    },
    {
        send: "B পার্সোনাল BDT",
        received: "RedotPay USDT USD",
        amount: "180 BDT",
        username: "Shoumikrahman",
        time: "2024-07-11",
        status: "Accepted"
    },
    {
        send: "B পার্সোনাল BDT",
        received: "WebMoney USD",
        amount: "618 BDT",
        username: "Deepok",
        time: "2024-07-10",
        status: "Accepted"
    },
    {
        send: "B পার্সোনাল BDT",
        received: "RedotPay USDT USD",
        amount: "150 BDT",
        username: "tanoy",
        time: "2024-07-08",
        status: "Accepted"
    },
    {
        send: "B পার্সোনাল BDT",
        received: "Payeer USD",
        amount: "123 BDT",
        username: "mourshad123",
        time: "2024-07-07",
        status: "Accepted"
    },
    {
        send: "B পার্সোনাল BDT",
        received: "WebMoney USD",
        amount: "2060 BDT",
        username: "Deepok",
        time: "2024-07-06",
        status: "Accepted"
    },
    {
        send: "B পার্সোনাল BDT",
        received: "PayPal USD",
        amount: "1404 BDT",
        username: "NazmulHaq",
        time: "2024-07-06",
        status: "Accepted"
    }
];

const REFUNDED_EXCHANGES = [
    {
        send: "PayPal USD",
        received: "B পার্সোনাল BDT",
        amount: "20 USD",
        username: "md_alif_hossain",
        time: "2024-07-03",
        status: "Refunded"
    },
    {
        send: "PayPal USD",
        received: "B পার্সোনাল BDT",
        amount: "1 USD",
        username: "akash_7766",
        time: "2024-07-03",
        status: "Refunded"
    },
    {
        send: "PayPal USD",
        received: "B পার্সোনাল BDT",
        amount: "6 USD",
        username: "kibria5",
        time: "2024-02-29",
        status: "Refunded"
    },
    {
        send: "PayPal USD",
        received: "N পার্সোনাল BDT",
        amount: "1.70 USD",
        username: "bappyKHAN01",
        time: "2024-02-26",
        status: "Refunded"
    },
    {
        send: "PayPal USD",
        received: "N পার্সোনাল BDT",
        amount: "1.60 USD",
        username: "bappy01",
        time: "2024-02-26",
        status: "Refunded"
    }
];

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

export const TODAY_BUY_SELL: IBuySell[] = [
    {
        name: "Adv Cash",
        weBuy: "105 BDT",
        weSell: "110 BDT",
        icon: ADV_CASH,
    },
    {
        name: "Perfect Money",
        weBuy: "119 BDT",
        weSell: "123 BDT",
        icon: PERFECT_MONEY,
    },
    {
        name: "WebMoney",
        weBuy: "97 BDT",
        weSell: "110 BDT",
        icon: WEB_MONEY,
    },
    {
        name: "Binance USDT",
        weBuy: "121 BDT",
        weSell: "125 BDT",
        icon: BINANCE,
    },
    {
        name: "Payeer",
        weBuy: "117 BDT",
        weSell: "123 BDT",
        icon: PAYEER,
    },
    {
        name: "PayPal",
        weBuy: "108 BDT",
        weSell: "117 BDT",
        icon: PAYPAL,
    },
    {
        name: "Fiverr",
        weBuy: "113 BDT",
        weSell: "NA",
        icon: FIVERR,
    },
    {
        name: "RedotPay",
        weBuy: "NA",
        weSell: "128 BDT",
        icon: REDOTPAY,
    }
];

export interface IBuySell {
    name: string;
    weBuy: string;
    weSell: string;
    icon: string;
}

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const { carouselState: { currentSlide, slidesToShow, totalItems } } = rest;

    return (
        <div className="absolute right-[10px] top-0 flex gap-[20px] mt-[10px]">
            <button disabled={currentSlide === 0} className={`p-[10px] rounded-full shadow-md ${currentSlide === 0 ? 'text-primary/20' : 'bg-white text-primary hover:scale-110 transition-all'}`} onClick={() => previous()}>
                <ArrowLeft2 size={16} />
            </button>
            <button disabled={currentSlide + slidesToShow >= totalItems} className={`p-[10px] rounded-full shadow-md ${currentSlide + slidesToShow >= totalItems ? "text-primary/20" : "bg-white text-primary hover:scale-110 transition-all"}`} onClick={() => next()}>
                <ArrowRight2 size={16} />
            </button>
        </div>
    );
};

const Home = () => {
    const [exchangeId, setExchangeId] = useState("");
    const route = useRouter();

    const columns = [
        {
            name: "Accept",
            cell: (row: IBuySell) => (
                <div className='flex items-center gap-[10px] flex-nowrap text-nowrap'>
                    <Image src={row?.icon} alt={row?.name} height={20} width={20} />
                    <div className='truncate'>{row?.name}</div>
                </div>
            ),
            sortable: true,
        },
        {
            name: "We Buy",
            selector: (row: IBuySell) => row?.weBuy,
            sortable: true,
        },
        {
            name: "We Sell",
            selector: (row: IBuySell) => row?.weSell,
            sortable: true,
        }
    ];

    return (
        <div className='-mt-[1px] bg-[#f7f7f7] pb-[40px]'>
            <Hero />
            <ParentDiv>
                <div className='w-full mt-[60px] mb-[20px] p-[20px] md:p-[30px] border-[2px] border-primary'>
                    <div className='text-h4 font-[900] text-gray-200 flex gap-[20px] items-center'>
                        <div className='animate-spin'>
                            <Chrome size={32} variant='Bold' className='text-primary' />
                        </div>
                        Latest Update
                    </div>
                    <div className='text-large font-[700] flex items-center gap-[10px] mt-[10px]'>
                        <Calendar className='text-primary' /> Date: <span className='font-normal'>{moment(new Date()).format("LLL")}</span>
                    </div>
                    <div className='animate-bounce text-primary font-[900] text-large my-[10px]'>Regarding Site Re-Start</div>
                    <div className='text-large'>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                strings: [
                                    'Royal এবং Elite ইউজার ২৪ ঘন্টা এক্সচেঞ্জ করতে পারবেন',
                                    'Elite ইউজার প্রতি ট্রানজেকশনে ০.৫% বোনাস পাবেন',
                                    'আইডি ভেরিফিকেশনের প্রয়োজন নেই',
                                    'আমাদের সার্ভিস ভালো লাগলে একটি রিভিউ দিবেন 🙂',
                                ],
                            }}
                        />
                    </div>
                </div>
                <div className='w-full flex flex-col xl:flex-row gap-[30px] my-[20px]'>
                    <div className='w-full xl:w-[70%] flex flex-col gap-[20px]'>
                        <div className='w-full p-[10px] bg-white shadow'>
                            <div className='text-large font-[500] my-[10px]'>We Processing Exchanges</div>
                            <ExchangeListTable data={PROCESSING_EXCHANGES} />
                        </div>
                        <div className='w-full p-[10px] bg-white shadow'>
                            <div className='text-large font-[500] my-[10px]'>Completed Exchanges</div>
                            <ExchangeListTable data={COMPLETED_EXCHANGES} />
                        </div>
                        <div className='w-full p-[10px] bg-white shadow'>
                            <div className='text-large font-[500] my-[10px]'>Refunded Exchanges</div>
                            <ExchangeListTable data={REFUNDED_EXCHANGES} />
                        </div>
                        <div className='w-full relative p-[10px] bg-white shadow'>
                            <div className='text-large font-[500] my-[10px]'>Recent Users Review</div>
                            <div className='w-full h-[1px] bg-gray-500/50' />
                            <Carousel
                                swipeable={true}
                                draggable={true}
                                showDots={false}
                                responsive={responsive}
                                ssr={true}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={3500}
                                keyBoardControl={true}
                                customTransition="all .5s ease"
                                transitionDuration={500}
                                arrows={false}
                                renderButtonGroupOutside={true}
                                customButtonGroup={<ButtonGroup />}
                            >
                                {REVIEW_LIST?.map((review, index) => {
                                    return (
                                        <div key={index} className='w-full flex flex-col gap-[10px] my-[20px] px-[20px]'>
                                            <div>{review?.star}</div>
                                            <div className='text-gray-200 font-[500]'>by {review?.username}</div>
                                            <div className='text-gray-200 font-[500]'>
                                                Exchange from <span className='text-primary font-normal'>{review?.exchange?.split('-')[0]}</span> to <span className='text-green-500 font-normal'>{review?.exchange?.split('-')[1]}</span>
                                            </div>
                                            <div className='text-gray-200 text-medium'>{review?.comment}</div>
                                        </div>
                                    );
                                })}
                            </Carousel>
                        </div>
                    </div>
                    <div className='w-full xl:w-[30%] flex flex-col gap-[20px]'>
                        <div className='w-full p-[10px] bg-white shadow flex flex-col gap-[10px]'>
                            <div className='text-large font-[500] my-[10px]'>Track exchange</div>
                            <input
                                type="text"
                                className={`flex-grow text-primary border-[1px] border-stroke placeholder:text-gray-400 p-[12px] rounded-[6px] w-full focus:border-primary focus:outline-none text-medium`}
                                placeholder={"Type here exchange id"}
                                onChange={e => setExchangeId(e.target.value)}
                                value={exchangeId}
                            />
                            <CustomButton onClick={() => {
                                if (exchangeId) {
                                    route.push(`/track/${exchangeId}`);
                                } else {
                                    toast.info("Please enter exchange id");
                                }
                            }} title='Track' className='w-full' size='large' />
                        </div>
                        <div className='w-full p-[10px] bg-white shadow flex flex-col gap-[10px]'>
                            <div className='text-large font-[500] my-[10px]'>Today Buy Sell Rate</div>
                            <div className='w-full'>
                                <DataTable
                                    columns={columns}
                                    data={TODAY_BUY_SELL}
                                    customStyles={customStyles}
                                    persistTableHead
                                    responsive
                                />
                            </div>
                        </div>
                        <div className='w-full p-[10px] bg-white shadow flex flex-col gap-[10px]'>
                            <div className='text-large font-[500] mt-[10px]'>Our Reserve</div>
                            <div className='w-full h-[1px] bg-gray-500/50' />
                            <div className='w-full flex flex-col gap-[10px] mt-[10px]'>
                                {EXCHANGE_LIST?.map((item, index) => {
                                    return (
                                        <div key={index} className='w-full flex items-center gap-[10px]'>
                                            <div className='h-[30px] w-[30px] rounded-full border-[2px] border-gray-400 p-[2px] bg-white'>
                                                <Image src={item?.icon} alt={item?.name} height={30} width={30} className='rounded-full' />
                                            </div>
                                            <div>
                                                <div className='text-gray-200 font-[500]'>{item?.name}</div>
                                                <div className='text-gray-300'>{item?.reserved}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </ParentDiv>
        </div>
    )
}

export default Home