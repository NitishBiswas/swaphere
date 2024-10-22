import CustomButton from '@/components/CustomButton'
import ParentDiv from '@/components/ParentDiv'
import Head from 'next/head'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const TrackResult = () => {
    const params = useParams();
    const id: string = params?.id ? Array.isArray(params?.id) ? params?.id[0] : params?.id : "";
    const [exchangeId, setExchangeId] = useState(id);

    return (
        <div className='w-full py-[60px] bg-[#f7f7f7] min-h-[50vh]'>
            <Head>
                <title>Track Exchange | SwapHere</title>
            </Head>
            <ParentDiv>
                <div className='w-full p-[10px] lg:p-[20px] bg-white shadow flex flex-col gap-[10px]'>
                    <div className='text-h6 md:text-h5 font-[500] text-gray-200'>Track Exchange</div>
                    <div className='h-[1px] bg-gray-200/20 w-full my-[10px]' />

                    <div className='w-full flex items-center justify-center my-[20px]'>
                        <div className='border-[0.5px] border-red-300 bg-red-200 p-[10px] text-red-500'>No found results for exchange {id}.</div>
                    </div>
                    <input
                        type="text"
                        className={`flex-grow text-primary border-[1px] border-primary/20 placeholder:text-gray-400 p-[12px] rounded-[6px] w-full focus:border-primary focus:outline text-medium`}
                        placeholder={"Type here exchange id"}
                        onChange={e => setExchangeId(e.target.value)}
                        value={exchangeId}
                    />
                    <CustomButton title='Track' size='large' className='w-fit mt-[10px]' />
                </div>
            </ParentDiv>
        </div>
    )
}

export default TrackResult