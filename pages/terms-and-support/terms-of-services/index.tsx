import ParentDiv from '@/components/ParentDiv'
import React from 'react'

const TermsOfServices = () => {
    return (
        <div className='w-full py-[60px] bg-[#f7f7f7] min-h-[50vh]'>
            <ParentDiv>
                <div className='w-full p-[10px] lg:p-[20px] bg-white shadow flex flex-col gap-[10px]'>
                    <div className='text-h6 md:text-h5 font-[500] text-gray-200'>Terms of Services</div>
                    <div className='h-[1px] bg-gray-200/20 w-full my-[10px]' />
                    <div className='text-[16px] md:text-medium font-[500] text-gray-200'>$wapHere - এ আপনাকে স্বাগতম। ডলার ক্রয় বিক্রয়ের জন্য অনুগ্রহ করে আমাদের Terms of service জেনে নিন।</div>
                    <div className='h-[1px] bg-gray-200/20 w-full my-[10px]' />
                    <div className='text-[16px] md:text-medium text-primary'>যেকোনো ফেইক লেনদেন রিকোয়েস্ট করলে অথবা প্রতারণা করার চেষ্টা করলে আপনার একাউন্ট সাথে সাথেই ব্লক হয়ে যাবে।</div>
                    <div className='text-h6 md:text-h5 font-[500] text-green-600'>Working Time</div>
                    <div className='text-small text-gray-300'>অর্ডার সম্পন্ন করার জন্য আমরা সর্বনিম্ন 5-10 মিনিট এবং সর্বোচ্চ ৩০ মিনিটের মধ্যে অর্থ প্রদান করি । সর্বোচ্চ ৩০ মিনিটের মধ্যে আপনার ডলার কিংবা টাকা না পেলে আমাদের লাইভ সাপোর্টে যোগাযোগ করবেন।

                        আমাদের সাইটে সকাল ৮টা থেকে রাত ১২টা পর্যন্ত ডলার ক্রয়-বিক্রয় করতে পারবেন। রাত ১২ টার পর যদি আপনি ডলার বা টাকা পাঠান তাহলে আপনার একচেঞ্জ টি সকাল ৮ টার পর কমপ্লিট করা হবে। যদি আপনি মানি লন্ডারিং অথবা অসৎ উপায়ে আমাদের ওয়েবসাইটের মাধ্যমে দেশের টাকা বিদেশে প্রচার করতে চান তাহলে বাংলাদেশে সরকার আইন অনুযায়ী আপনার বিরুদ্ধে যেকোনো পদেক্ষেপ নিতে পারবে।</div>
                    <div className='h-[1px] bg-gray-200/20 w-full my-[10px]' />
                    <div className='text-h6 md:text-h5 font-[500] text-gray-200 bg-yellow-300 w-fit px-[10px]'>Exchange Rules</div>
                    <div className='text-small text-gray-300'>আমাদের ওয়েবসাইটে সর্বনিম্ন একচেঞ্জে ২ ডলার এবং ১০০ টাকা। সকল চার্জ ফ্রি
                        এক্সচেঞ্জ করার সময় আপনার ইমেইল বা নাম্বার ভালো করে চেক করে তারপর অর্ডার Confirm করুন। ভুল ইমেইল, একাউন্ট নাম্বার বা মোবাইল  নাম্বার দিলে অনাকাঙ্খিত এক্সচেঞ্জের জন্য আমরা দায়ী থাকবো না।</div>
                </div>
            </ParentDiv>
        </div>
    )
}

export default TermsOfServices