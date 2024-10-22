import Image from "next/image";
import React, { useEffect, useState } from "react";
import NOT_FOUND from '@/assets/images/404.svg';
import { usePathname } from "next/navigation";
import Link from "next/link";
import Head from "next/head";

export default function NotFound() {
    const [clientPathName, setClientPathName] = useState('');
    const pathName = usePathname();

    useEffect(() => {
        // Only set the pathName on the client side
        setClientPathName(pathName);
    }, [pathName]);

    return (
        <div className="h-screen w-screen flex flex-col gap-[10px] items-center px-[20px]">
            <Head>
                <title>Page Not Found | AppifyDevs</title>
            </Head>
            <Image src={NOT_FOUND} style={{ height: '60%' }} alt="not found" objectFit="contain" objectPosition="center" />
            <div>
                <div className="text-center">
                    The requested URL <span className="font-semibold">{clientPathName || ''}</span> was not found on this server.
                </div>
                <div className="text-center text-gray-300">That is all we know.</div>
            </div>
            <Link className={`bg-primary hover:bg-white border-[1px] border-primary text-white hover:text-primary rounded-[6px] py-[10px] px-[20px] mt-[28px]`} href={"/"}>Back Home</Link>
        </div>
    );
}
