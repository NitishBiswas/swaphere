import React from 'react';
import * as LOADING from '@/assets/data/loading.json';
import dynamic from 'next/dynamic';

// Dynamically import Lottie with no SSR
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const Loading = () => {
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 h-[100vh] w-[100vw] flex justify-center items-center z-[10000000000]'>
            <div className='h-[100vh] w-[100vw] fixed top-0 bottom-0 left-0 right-0 z-[10000] flex justify-center items-center bg-black-100/50 backdrop-blur-sm'>
                <div className='h-[250px] w-[250px]'>
                    <Lottie animationData={LOADING} loop={true} />
                </div>
            </div>
        </div>
    )
}

export default Loading