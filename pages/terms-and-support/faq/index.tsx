import ParentDiv from '@/components/ParentDiv';
import { ArrowUp2 } from 'iconsax-react';
import Head from 'next/head';
import React, { useState } from 'react';

const FREQUENTLY_ASKED_QUESTIONS = [
    {
        id: "1",
        question: "আপনাদের ওয়েব সাইটে কয়টা থেকে কয়টা পর্যন্ত লেনদেন করা যায়?",
        answer: "সকাল ৮:০০ টা থেকে রাত ১২:০০টা"
    },
    {
        id: "2",
        question: "একটি অর্ডার কমপ্লিট করতে কত মিনিট লাগে?",
        answer: "সাধারণত ৫ মিনিট তবে সর্বোচ্চ ১৫ মিনিট।"
    },
    {
        id: "3",
        question: "মিনিমাম কত ডলার লেনদেন করতে পারবো?",
        answer: "১ ডলার"
    },
    {
        id: "4",
        question: "লেনদেন করার জন্য আমাকে কি কি করতে হবে?",
        answer: "আপনাকে আমাদের ওয়েবসাইটে একটি একাউন্ট করতে হবে. যদি আপনি পেপাল ডলার সেল করতে চান তবে আপনাকে আমাদের সাপোর্ট টিমের সাথে কথা বলে আপনার আইডি ভেরিফাই করে নিতে হবে. কিন্তু অন্য কোনো ডলার ক্রয় বিক্রয় করতে আইডি ভেরিফাই করতে হবে না."
    },
    {
        id: "5",
        question: "আমি ডলার লেনদেন করতে পারতেছিনা কি করতে পারি?",
        answer: "প্লিজ আমাদের লাইভ সাপোর্টে যোগযোগ করুন"
    },
    {
        id: "6",
        question: "আপনাদের সাথে কিভাবে যোগাযোগ করতে পারি?",
        answer: "আমাদের ওয়েবসাইটে ডান পাশে নিচের দিকে লাইভ সাপোর্ট অপশন রয়েছে। এখান থেকে আপনি আমাদের সাথে যোগাযোগ করতে পারবেন।"
    },
    {
        id: "7",
        question: "যদি আমি ভুল একাউন্ট নম্বর দিই তাহলে ??",
        answer: "প্লিজ যত দ্রুত সম্ভব আমাদের সাথে যোগাযোগ করুন। যদি পেমেন্ট সম্পুন্ন হওয়ার আগে যোগাযোগ করতে পারেন তা হলে আমরা আপনাকে সাহায্য করতে পারবো। অন্যথায় এটির জন্য আপনি দায়ী থাকবেন।"
    },
    {
        id: "8",
        question: "অমুক ডলার, তমুক ডলার আছে নাকি?",
        answer: "প্লিজ দয়া করে আমাদের রিজার্ভ চেক করুন। রিজার্ভে থাকলে আছে আর না থাকলে নেই."
    },
    {
        id: "9",
        question: "এইটা কি বিশস্ত সাইট?",
        answer: "হ্যাঁ। সে জন্য আমরা মিনিমাম লেনদেন ১ ডলার রেখেছি।"
    }
]

const FAQ = () => {
    const [openQuestions, setOpenQuestions] = useState(["1"]);

    const handleToggleQuestion = (id: string) => {
        const newOpenQuestions = openQuestions.includes(id)
            ? openQuestions.filter(questionId => questionId !== id)
            : [...openQuestions, id];

        setOpenQuestions(newOpenQuestions);
    }

    return (
        <div className='w-full py-[60px] bg-[#f7f7f7] min-h-[50vh]'>
            <Head>
                <title>Frequently Asked Questions | SwapHere</title>
            </Head>
            <ParentDiv>
                <div className='w-full text-h5 lg:text-h4 font-[900] text-primary mb-[20px]'>Frequently Asked Questions</div>
                <div className='w-full flex flex-col gap-[20px]'>
                    {FREQUENTLY_ASKED_QUESTIONS?.map((item, index) => {
                        return (
                            <div key={index} className='w-full p-[10px] lg:p-[20px] bg-white shadow'>
                                <div className='w-full flex items-center justify-between gap-[20px] text-secondary hover:text-primary '>
                                    <div onClick={() => handleToggleQuestion(item?.id)} className='w-[calc(100%-40px)] cursor-pointer font-[700] text-[16px'>{item?.question}</div>
                                    <div className={`${openQuestions?.includes(item?.id) ? "rotate-0" : "rotate-180"} transition-all duration-500`} >
                                        <ArrowUp2 />
                                    </div>
                                </div>
                                {openQuestions?.includes(item?.id) && <div className='h-[1px] bg-gray-200/20 w-full my-[10px]' />}
                                {openQuestions?.includes(item?.id) && <div className='text-small'>
                                    {item?.answer}
                                </div>}
                            </div>
                        )
                    })}
                </div>
            </ParentDiv>
        </div>
    )
}

export default FAQ