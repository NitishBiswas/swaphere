import CursorMovingText from "@/components/CursorMovingText";
import ParentDiv from "@/components/ParentDiv";
import { ArrowDown2, ArrowSwapHorizontal, ArrowUp2, HambergerMenu, ProfileCircle, Whatsapp } from "iconsax-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode, useRef, useState } from "react";
import ParentSideBar from "@/components/ParentSideBar";
import { useRouter } from "next/router";
import Image from "next/image";
import LOGO from '@/assets/images/logo.svg';
import Marquee from "@/components/Marquee";
import { useSelector } from "react-redux";
import { selectAuthToken } from "@/redux/features/authSlice";
import GradientText from "@/components/GradientText";
import ProfileSideBar from "@/components/ProfileSideBar";
import CustomButton from "@/components/CustomButton";
import { useOnClickOutside } from "usehooks-ts";

export interface INavItem {
    id: number;
    title: string;
    path: string;
    isDropdown: boolean;
    dropdownItems?: {
        id: number;
        title: string;
        path: string;
    }[];
    dropdownIcons?: {
        up: ReactNode;
        down: ReactNode;
    },
}

const notice = "$wapHere.com এ আপনাকে স্বাগতম। আমাদের ওয়েবসাইট শুধুমাত্র দেশীও ফ্রীলেন্সারদের জন্য তৈরী করা হয়েছে। আমরা রাষ্ট্রীয় মানিলন্ডারিং প্রতিরোধ আইন ২০১২ এর প্রতি শ্রদ্ধাশীল। আমরা কোনো প্রকার অবৈধ লেনদেন সমর্থন করিনা। সর্বনিম্ন একচেঞ্জে ১ ডলার বা ১০০ টাকা। আপনি আমাদের ওয়েবসাইটে নতুন হলে লেনদেন করার পূর্বে নিচ থেকে আমাদের Terms of Services দেখুন। যে কোনো এক্সচেঞ্জ রিকোয়েস্ট দিয়ে ৫ থেকে ১০ মিনিট অপেক্ষা করুন। ডলারের আপডেট দাম এবং রিজার্ভের আপডেট নোটিফিকেশন পাওয়ার জন্য প্লে স্টোর থেকে আমাদের মোবাইল অ্যাপটি ইনস্টল করে রাখুন। যে কোনো সমস্যা সমাধানে আমাদের লাইভ চ্যাটে যোগাযোগ করুন। ধন্যবাদ"

export const navItems: INavItem[] = [
    { id: 1, title: "EXCHANGE", path: "/", isDropdown: false },
    { id: 2, title: "TESTIMONIALS", path: "/testimonials", isDropdown: false },
    { id: 3, title: "AFFILIATE", path: "/affiliate", isDropdown: false },
    { id: 3, title: "CONTACT", path: "/terms-and-support/contact", isDropdown: false },
];

const Header = () => {
    const pathName = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isHovered, setIsHovered] = useState("");
    const route = useRouter();
    const authToken: string | null = useSelector(selectAuthToken);
    const [profileSidebarOpen, setProfileSidebarOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(sidebarRef, () => setProfileSidebarOpen(false));

    return (
        <div className="fixed top-0 left-0 right-0 z-[99999] bg-white h-[72px] w-full items-center justify-center border-b-[1px] border-gray-500">
            <ParentDiv>
                <div className="h-full w-full flex items-center justify-between">
                    <div className="flex items-center">
                        <div
                            onClick={() => setSidebarOpen(true)}
                            className="flex lg:hidden mr-[14px] h-[32px] w-[32px] rounded-[6px] cursor-pointer hover:bg-primary text-primary hover:text-white border-[1px] border-primary justify-center items-center"
                        >
                            <HambergerMenu size="20" />
                        </div>
                        <Link href={"/"} className="flex items-center gap-[5px]">
                            <Image src={LOGO} alt="logo" className="h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] hidden sm:flex" />
                            <div className="text-[20px] sm:text-[30px] font-bold flex items-center gap-[2px]">
                                <CursorMovingText text="$WAP" />
                                <div className="text-secondary">
                                    HERE<span className="text-primary">.</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <div className={`hidden lg:flex gap-[20px] items-center relative`}>
                            {navItems?.map((item, index) => {
                                return (
                                    <div
                                        onMouseEnter={() => {
                                            if (item?.isDropdown) {
                                                setIsHovered(item?.title);
                                            }
                                        }}
                                        onMouseLeave={() => {
                                            if (item?.isDropdown) {
                                                setIsHovered("");
                                            }
                                        }}
                                        className="relative flex items-center gap-[5px]"
                                        key={index}
                                    >
                                        <Link
                                            href={item?.path}
                                            className={`flex items-center gap-[8px] text-small font-[400] nav-item uppercase tracking-[3px] ${((pathName === "/" && item?.title === "EXCHANGE") || pathName?.includes(item?.title?.toLowerCase()?.split(" ")?.join("-")))
                                                ? "text-primary active"
                                                : "text-gray-300 hover:text-primary"
                                                } cursor-pointer select-none`}
                                        >
                                            {item?.title}
                                        </Link>
                                        {item?.isDropdown && (isHovered === item?.title ? item?.dropdownIcons?.up : item?.dropdownIcons?.down)}

                                        {item?.isDropdown && (
                                            <div
                                                className={`absolute bg-white w-[240px] right-0 top-0 z-[999999] flex flex-col gap-[12px] py-[20px] px-[10px] rounded-b-[6px] cursor-default transition-all duration-500 ease-in-out transform ${isHovered === item?.title
                                                    ? "translate-y-0 opacity-100 top-[30px] h-auto"
                                                    : "-translate-y-full opacity-0 !h-0"
                                                    } overflow-hidden`}
                                                style={{
                                                    boxShadow: "0px 10px 20px 10px rgba(242, 69, 53, 0.2)",
                                                }}
                                            >
                                                {item?.dropdownItems?.map((subItem, subIndex) => {
                                                    return (
                                                        <Link
                                                            href={subItem?.path}
                                                            key={subIndex}
                                                            className={`cursor-pointer flex items-center gap-[4px] px-[10px] border-l-[3px] border-white ${pathName === subItem?.path
                                                                ? "text-primary !border-primary"
                                                                : "text-gray-300 hover:text-primary hover:border-primary"
                                                                }`}
                                                        >
                                                            {subItem?.title}
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>

                                );
                            })}
                        </div>
                        {!authToken ? <div className='relative' ref={sidebarRef}>
                            <div onClick={() => setProfileSidebarOpen(!profileSidebarOpen)} className='flex items-center gap-[5px] cursor-pointer text-small text-primary font-[600]'>
                                <ProfileCircle size="18" />
                                <GradientText text={"Nitish Biswas"} className='text-medium' />
                                {profileSidebarOpen ? <ArrowUp2 size="12" /> : <ArrowDown2 size="12" />}
                            </div>
                            {profileSidebarOpen && <div className='absolute right-0 top-[87px]'>
                                <ProfileSideBar onClose={() => setProfileSidebarOpen(false)} />
                            </div>}
                        </div> : <Link href={"/authentication/login"}>
                            <CustomButton
                                title='Sign In'
                                size='medium'
                            />
                        </Link>}
                    </div>
                </div>
            </ParentDiv>
            <div className="w-full h-[40px] flex bg-secondary text-white shadow-lg overflow-hidden">
                <div className="w-[120px] h-full bg-primary px-[20px] flex items-center justify-center gap-[10px]">
                    <ArrowSwapHorizontal />
                    24/7
                </div>
                <div className="w-[calc(100%-120px)] h-full overflow-hidden flex items-center">
                    <Marquee text={notice} />
                </div>
            </div>
            <ParentSideBar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}>
                <div className={`flex flex-col gap-[10px]`}>
                    {navItems?.map((item, index) => {
                        return (
                            <div
                                onMouseEnter={() => {
                                    if (item?.isDropdown) {
                                        setIsHovered(item?.title);
                                    }
                                }}
                                onMouseLeave={() => {
                                    if (item?.isDropdown) {
                                        setIsHovered("");
                                    }
                                }}
                                className={`w-fit relative ${item?.isDropdown ? "items-start" : "nav-item items-center"} flex flex-col gap-[8px] text-medium font-[400] my-[10px] uppercase tracking-[3px] ${((pathName === "/" && item?.title === "EXCHANGE") || pathName?.includes(item?.title?.toLowerCase()?.split(" ")?.join("-"))) ? "text-primary active" : "text-gray-300 hover:text-primary"
                                    } cursor-pointer select-none`}
                                key={index}
                            >
                                <div className="flex items-center gap-[5px]">
                                    <Link href={item?.path} className="flex items-center">
                                        {item?.title}
                                    </Link>
                                    {item?.isDropdown && (isHovered === item?.title ? item?.dropdownIcons?.up : item?.dropdownIcons?.down)}
                                </div>

                                {isHovered === item?.title && item?.isDropdown && (
                                    <div
                                        className="bg-white w-full z-[999999] grid grid-cols-1 gap-[12px] rounded-b-[6px] cursor-default mt-[10px] mb-[40px] p-[20px] text-medium"
                                        style={{
                                            boxShadow: "0px 10px 20px 10px rgba(242, 69, 53, 0.2)",
                                        }}
                                    >
                                        {item?.dropdownItems?.map((subItem, subIndex) => (
                                            <Link
                                                onClick={() => setSidebarOpen(false)}
                                                href={subItem?.path}
                                                key={subIndex}
                                                className={`cursor-pointer text-sm flex items-center gap-[4px] px-[10px] border-l-[3px] border-white ${pathName === subItem?.path
                                                    ? "text-primary !border-primary"
                                                    : "text-gray-300 hover:text-primary hover:border-primary"
                                                    }`}
                                            >
                                                {subItem?.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </ParentSideBar>
        </div>
    );
};

export default Header;
