import ParentDiv from '@/components/ParentDiv'
import React from 'react'

const About = () => {
    return (
        <div className='w-full py-[60px] bg-[#f7f7f7]'>
            <ParentDiv>
                <div className='w-full p-[10px] lg:p-[20px] bg-white shadow flex flex-col gap-[10px]'>
                    <div className='text-h6 md:text-h5 font-[500] text-gray-200'>About Us</div>
                    <div className='h-[1px] bg-gray-200/20 w-full my-[10px]' />

                    <div className='text-small text-gray-300'>$wapHere একটি বিশ্বস্ত ডলার এক্সচেঞ্জ অনলাইন প্লাটফর্ম। এইখানে আপনি দেশের বাহির থেকে আপনার ডলার টাকাতে পরিবর্তন করতে পারবেন। আপনার টাকা আপনি মোবাইল ব্যাংকিংয়ের মাধ্যমে খুব দ্রুত হাতে পেয়ে যাবেন। এছাড়াও আপনি মোবাইল ব্যাংকিংয়ের মাধ্যমে আপনার টাকা ডলারে পরিবর্তন করতে পারবেন।</div>
                    <div className='text-small text-gray-300'>এটি বিশ্বস্ত ডলার এক্সচেঞ্জের ওয়েবসাইট গুলোর মধ্যে অন্যতম একটি।ওয়েবসাইটটি গ্রহকদের সুবিধা অনুযায়ী ডিজাইন করা হয়েছে। এই ওয়েবসাইটের মাধ্যমে আপনি খুব সহজেই যেকোনো কারেন্সি এক্সচেঞ্জ করতে পারবেন। এটি ফ্রীলান্সারদের জন্য একটি জনপ্রিয় ওয়েবসাইট। </div>
                    <div className='text-small text-gray-300'>আমাদের কাছে আপনি যেকোনো ডলার সর্বোচ্চ দামে বিক্রি করতে পারবেন এবং সর্বনিম্ন দামে আপনি ডলার কিনতে পারবেন। ১০০% নিশ্চয়তার সাথে আমরা ডলার এক্সচেঞ্জ করি. সততাই আমাদের সর্ব উত্তম পন্থা।</div>
                    <div className='text-small text-gray-300'>১০০% গ্রাহক সন্তুষ্টতার সাথে এখন পর্যন্ত আমরা সেবা প্রদান করে আসছি।</div>
                    <div className='text-small text-gray-300'>ধন্যবাদ</div>
                    <div className='text-small text-gray-300'>$wapHere</div>
                </div>
            </ParentDiv>
        </div>
    )
}

export default About