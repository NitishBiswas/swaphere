import ParentDiv from '@/components/ParentDiv'
import moment from 'moment'
import React from 'react'

const ProfileInfo = () => {
    return (
        <div className='w-full py-[60px] bg-[#f7f7f7]'>
            <ParentDiv>
                <div className='w-full p-[10px] lg:p-[20px] bg-white shadow flex flex-col gap-[10px]'>
                    <div className='text-h6 md:text-h5 text-gray-200'>Hi, <span className='font-[900] text-primary'>Nitish Biswas</span></div>
                    <div className='text-small text-gray-300'>You last logged {moment(new Date()).format('LLL')}</div>
                    <div className='h-[1px] bg-gray-200/20 w-full my-[10px]' />

                    <div className='w-full flex flex-col md:flex-row gap-[20px] my-[20px] md:items-center'>
                        <div className='w-full md:w-[70%] md:border-r-[2px] md:border-r-primary'>
                            <div className='text-h6 md:text-h5 font-[700] text-gray-200 mb-[10px]'>Notice:</div>
                            <div className='text-small text-fuchsia-700'>যদি কেউ ৫ ডলারের নিচে ডলার সেল করেন তাহলে বিকাশ বা নগদ চার্জ ৫ টাকা প্রযোজ্য হবে ধন্যবাদ।</div>
                        </div>
                        <div className='w-full md:w-[30%] flex flex-col items-center justify-center'>
                            <div className='text-h3 lg:text-h2 font-[900] text-primary'>0</div>
                            <div className='text-small font-[700]'>Exchanges</div>
                        </div>
                    </div>

                    <div className='text-h6 md:text-h5 font-[700] text-gray-200'>Your Payment Methods:</div>
                    <div className='text-small text-primary'>অনুগ্রহ করে আপনার নিজস্ব পেমেন্ট একাউন্ট গুলো ব্যবহার করে লেনদেন করুন। যেকোনো একাউন্ট পরিবর্তন কিংবা আপডেট করার জন্য আমাদের সাপোর্টে যোগাযোগ করুন।</div>


                    <div className='text-medium text-gray-300 flex flex-col sm:flex-row gap-[10px] sm:gap-[20px] md:gap-[40px] mt-[40px]'>
                        <div className='font-[700]'>B-পার্সোনাল নাম্বার: <span className='font-normal'>01956732580</span></div>
                        <div className='font-[700]'>N-পার্সোনাল নাম্বার: <span className='font-normal'>01956732580</span></div>
                    </div>
                </div>
            </ParentDiv>
        </div>
    )
}

export default ProfileInfo