import ParentDiv from '@/components/ParentDiv'
import React from 'react'

const Affiliate = () => {
    return (
        <div className='w-full py-[60px] bg-[#f7f7f7]'>
            <ParentDiv>
                <div className='w-full p-[10px] lg:p-[20px] bg-white shadow flex flex-col gap-[10px]'>
                    <div className='text-h6 md:text-h5 font-[500] text-gray-200'>Affiliate Program</div>
                    <div className='h-[1px] bg-gray-200/20 w-full my-[10px]' />

                    <div className='text-small text-gray-300'>Any registered user of Your Trusted Dollar Exchange Partner - $wapHere can use our Affiliate Program. Through you can earn up to 2% of all exchanges made through your link. All your winnings can be withdrawal at any time you wish. Term of payment of profits from 1 to 5 working days.</div>
                    <div className='text-medium text-gray-200 font-[500]'>How it works?</div>
                    <div className='text-small text-gray-300'>When a user enters through your link we automatically remember your id number in our system. If the user has requested to exchange pay its part and we successfully complete the exchange you get your profit by 2% of the difference between the two amounts. Example: If the user decides to exchange 100 dollars and our exchange rate is 1 = 0.95, users receive 95 dollars and you take 2% of 5</div>
                    <div className='text-medium text-gray-200 font-[500]'>How to use Affiliate Program:</div>
                    <div className='text-small text-gray-300 ml-[20px]'>1. Login with your account</div>
                    <div className='text-small text-gray-300 ml-[20px]'>2. Go to tab "Referrals"</div>
                    <div className='text-small text-gray-300 ml-[20px]'>3. Copy link and share it to your friends, social network or other place and wait to get your profits</div>
                </div>
            </ParentDiv>
        </div>
    )
}

export default Affiliate