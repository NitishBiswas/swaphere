import ParentDiv from '@/components/ParentDiv'
import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div className='w-full py-[60px] bg-[#f7f7f7] min-h-[50vh]'>
            <ParentDiv>
                <div className='w-full p-[10px] lg:p-[20px] bg-white shadow flex flex-col gap-[10px]'>
                    <div className='text-h6 md:text-h5 font-[500] text-gray-200'>Privacy Policy</div>
                    <div className='h-[1px] bg-gray-200/20 w-full my-[10px]' />

                    <div className='text-small text-gray-300'>আপনি একাউন্ট করার পর আপনার ইমেইল আইডি, মোবাইল নাম্বার, এবং ডকুমেন্ট আমাদের ডাটাবেসে থেকে নেওয়া হবে.</div>
                    <div className='text-small text-gray-300'>আপনার ডাটা (ইমেইল আইডি, ডকুমেন্ট, মোবাইল নাম্বার) $wapHere কর্তৃপক্ষের নিকট সংরক্ষিত এবং গোপন থাকবে।</div>
                    <div className='text-small text-gray-300'>ভবিষতের যে কোনো ত্রুটি / আইনি জটিলতার জন্য আপনার ডাটা গুলো ব্যবহার করা হতে পারে।</div>
                    <div className='text-small text-gray-300'>$wapHere কোনো পূর্ব নোটিশ ছাড়াই আপনার একাউন্ট রিমুভ করার ক্ষমতা রাখে।</div>
                    <div className='text-small text-gray-300'>$wapHere-এর যে কোনো শর্ত ভঙ্গ করার জন্য আপনার বিরুদ্ধে আইনি পদক্ষেপ নিতে ক্ষমতা রাখে।</div>
                    <div className='text-small text-gray-300'>যেকোনো প্রতারণা মূলক এক্সচেঞ্জের জন্য বাংলাদেশ আইনি বিধি মোতাবেক $wapHere আপনার বিরুদ্ধে আইনি পদক্ষেপ নিতে পারবে।</div>
                    <div className='text-small text-gray-300'>উপরিউক্ত যেকোনো প্রাইভেসি সংযোজন এবং পরিবর্তনে $wapHere সম্পুর্ন্ন রূপে ক্ষমতা রাখে।</div>
                    <div className='text-small text-gray-300'>ধন্যবাদ</div>
                    <div className='text-small text-gray-300'>$wapHere</div>
                </div>
            </ParentDiv>
        </div>
    )
}

export default PrivacyPolicy