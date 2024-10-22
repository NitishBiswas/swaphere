import React, { useState, useEffect } from "react";
import BG from "@/assets/images/bg.jpg";
import ParentDiv from "@/components/ParentDiv";
import CustomButton from "@/components/CustomButton";
import { ArrowDown, ArrowSwapHorizontal, ArrowUp } from "iconsax-react";
import { StaticImageData } from "next/image";
import ExchangeDropdown from "@/components/ExchangeDropdown";
import { ADV_CASH, B_PERSONAL, BINANCE, FIVERR, N_PERDONAL, PAYEER, PAYPAL, PERFECT_MONEY, PM_MANUAL, REDOTPAY, WEB_MONEY } from "@/assets/images";

export interface IExchange {
    id: string;
    name: string;
    icon: StaticImageData;
    reserved: string;
    isSend: boolean;
    isReceive: boolean;
    rates: {
        [key: string]: number;
    };
}

export const EXCHANGE_LIST: IExchange[] = [
    {
        id: "1",
        name: "Adv Cash USD",
        icon: ADV_CASH,
        reserved: "0.40 USD",
        isSend: true,
        isReceive: true,
        rates: {
            "Adv Cash USD": 0.97,
            "Perfect Money USD": 0.5,
            "Binance USDT USD": 0.84,
            "Payeer USD": 0.84,
            "PayPal USD": 0.97,
            "B পার্সোনাল BDT": 105,
            "N পার্সোনাল BDT": 105,
            "WebMoney USD": 0.97,
            "ReDotPay USDT USD": 0.84,
        },
    },
    {
        id: "2",
        name: "Perfect Money USD",
        icon: PERFECT_MONEY,
        reserved: "0.5 USD",
        isSend: true,
        isReceive: true,
        rates: {
            "Adv Cash USD": 0.95,
            "Perfect Money USD": 0.95,
            "Binance USDT USD": 0.90,
            "Payeer USD": 0.90,
            "PayPal USD": 0.95,
            "B পার্সোনাল BDT": 119,
            "N পার্সোনাল BDT": 119,
            "WebMoney USD": 0.95,
            "ReDotPay USDT USD": 0.90,
        },
    },
    {
        id: "3",
        name: "Binance USDT USD",
        icon: BINANCE,
        reserved: "0.3 USD",
        isSend: true,
        isReceive: true,
        rates: {
            "Adv Cash USD": 0.95,
            "Perfect Money USD": 0.90,
            "Binance USDT USD": 0.95,
            "Payeer USD": 0.90,
            "PayPal USD": 0.95,
            "B পার্সোনাল BDT": 121,
            "N পার্সোনাল BDT": 121,
            "WebMoney USD": 0.95,
            "ReDotPay USDT USD": 0.95,
        },
    },
    {
        id: "4",
        name: "Payeer USD",
        icon: PAYEER,
        reserved: "0.5 USD",
        isSend: true,
        isReceive: true,
        rates: {
            "Adv Cash USD": 0.95,
            "Perfect Money USD": 0.90,
            "Binance USDT USD": 0.90,
            "Payeer USD": 0.95,
            "PayPal USD": 0.95,
            "B পার্সোনাল BDT": 117,
            "N পার্সোনাল BDT": 117,
            "WebMoney USD": 0.95,
            "ReDotPay USDT USD": 0.90,
        },
    },
    {
        id: "5",
        name: "PayPal USD",
        icon: PAYPAL,
        reserved: "0 USD",
        isSend: true,
        isReceive: true,
        rates: {
            "Adv Cash USD": 0.82,
            "Perfect Money USD": 0.73,
            "Binance USDT USD": 0.73,
            "Payeer USD": 0.73,
            "PayPal USD": 0.95,
            "B পার্সোনাল BDT": 108,
            "N পার্সোনাল BDT": 108,
            "WebMoney USD": 0.95,
            "ReDotPay USDT USD": 0.73,
        },
    },
    {
        id: "6",
        name: "B পার্সোনাল BDT",
        icon: B_PERSONAL,
        reserved: "50 BDT",
        isSend: true,
        isReceive: true,
        rates: {
            "Adv Cash USD": 1 / 110,
            "Perfect Money USD": 1 / 123,
            "Binance USDT USD": 1 / 125,
            "Payeer USD": 1 / 123,
            "PayPal USD": 1 / 117,
            "B পার্সোনাল BDT": 0.90,
            "N পার্সোনাল BDT": 0.90,
            "WebMoney USD": 1 / 103,
            "ReDotPay USDT USD": 1 / 128,
        },
    },
    {
        id: "7",
        name: "N পার্সোনাল BDT",
        icon: N_PERDONAL,
        reserved: "10 BDT",
        isSend: true,
        isReceive: true,
        rates: {
            "Adv Cash USD": 1 / 110,
            "Perfect Money USD": 1 / 123,
            "Binance USDT USD": 1 / 128,
            "Payeer USD": 1 / 123,
            "PayPal USD": 1 / 115,
            "B পার্সোনাল BDT": 0.90,
            "N পার্সোনাল BDT": 0.90,
            "WebMoney USD": 1 / 109,
            "ReDotPay USDT USD": 1 / 128,
        },
    },
    {
        id: "8",
        name: "WebMoney USD",
        icon: WEB_MONEY,
        reserved: "0 USD",
        isSend: false,
        isReceive: true,
        rates: {
            "Adv Cash USD": 0.97,
            "Perfect Money USD": 0.95,
            "Binance USDT USD": 0.95,
            "Payeer USD": 0.95,
            "PayPal USD": 0.95,
            "B পার্সোনাল BDT": 103,
            "N পার্সোনাল BDT": 109,
            "ReDotPay USDT USD": 0.95,
        },
    },
    {
        id: "9",
        name: "ReDotPay USDT USD",
        icon: REDOTPAY,
        reserved: "0.83 USD",
        isSend: false,
        isReceive: true,
        rates: {
            "Adv Cash USD": 0.84,
            "Perfect Money USD": 0.90,
            "Binance USDT USD": 0.95,
            "Payeer USD": 0.90,
            "PayPal USD": 0.73,
            "B পার্সোনাল BDT": 128,
            "N পার্সোনাল BDT": 128,
            "WebMoney USD": 0.95,
        },
    },
    {
        id: "10",
        name: "PM Manual USD",
        icon: PM_MANUAL,
        reserved: "",
        isSend: true,
        isReceive: false,
        rates: {
            "Adv Cash USD": 0.95,
            "Perfect Money USD": 0.95,
            "Binance USDT USD": 0.95,
            "Payeer USD": 0.95,
            "PayPal USD": 0.95,
            "B পার্সোনাল BDT": 117,
            "N পার্সোনাল BDT": 117,
            "WebMoney USD": 0.95,
            "ReDotPay USDT USD": 0.90,
        },
    },
    {
        id: "11",
        name: "Fiverr Paypal USD",
        icon: FIVERR,
        reserved: "",
        isSend: true,
        isReceive: false,
        rates: {
            "Adv Cash USD": 0.82,
            "Perfect Money USD": 0.75,
            "Binance USDT USD": 0.73,
            "Payeer USD": 0.73,
            "PayPal USD": 0.90,
            "B পার্সোনাল BDT": 113,
            "N পার্সোনাল BDT": 113,
            "WebMoney USD": 0.95,
            "ReDotPay USDT USD": 0.73,
        },
    },
];



const Hero = () => {
    const [sendSelectedItem, setSendSelectedItem] = useState("6");
    const [receiveSelectedItem, setReceiveSelectedItem] = useState("7");
    const [sendValue, setSendValue] = useState("1");
    const [receiveValue, setReceiveValue] = useState("0.00");

    const sendCurrency = EXCHANGE_LIST.filter(item => item.id === sendSelectedItem)[0];
    const receiveCurrency = EXCHANGE_LIST.filter(item => item.id === receiveSelectedItem)[0];

    useEffect(() => {
        if (sendCurrency && receiveCurrency && sendValue) {
            const sendRate = sendCurrency.rates[receiveCurrency.name] || 0;
            const calculatedReceiveValue = (parseFloat(sendValue) * sendRate).toFixed(2);
            setReceiveValue(calculatedReceiveValue);
        } else {
            setReceiveValue("0.00");
        }
    }, [sendSelectedItem, receiveSelectedItem, sendValue]);

    return (
        <div
            className="h-auto w-full"
            style={{
                backgroundImage: `url(${BG.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <ParentDiv parentClassName="backdrop-blur-sm bg-primary/20 py-[60px] md:py-[80px]">
                <div className="w-full h-full flex flex-col items-center justify-center gap-[40px]">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-[100px] lg:gap-x-[150px] gap-y-[40px]">
                        <div className="w-full flex flex-col gap-[20px]">
                            <div className="flex items-center gap-[10px] text-[32px] font-[700] text-white">
                                <ArrowDown /> You Send
                            </div>
                            <ExchangeDropdown
                                data={EXCHANGE_LIST}
                                value={sendSelectedItem}
                                onChange={setSendSelectedItem}
                                type="send"
                            />
                            <input
                                type="text"
                                className={`flex-grow text-primary border-[1px] border-stroke placeholder:text-gray-400 p-[15px] rounded-[6px] w-full focus:border-primary focus:outline-none text-medium`}
                                placeholder={"Enter amount..."}
                                onChange={e => setSendValue(e.target.value)}
                                value={sendValue}
                            />
                            <div className="bg-primary/60 rounded-tl-[40px] rounded-br-[40px] h-[48px] w-full flex items-center px-[20px] font-[600] text-white">
                                Exchange Rate: 1 {sendCurrency?.name?.split(" ")[sendCurrency?.name?.split(" ")?.length - 1]} = {(sendCurrency.rates[receiveCurrency.name] || 0).toFixed(2)} {receiveCurrency?.name?.split(" ")[receiveCurrency?.name?.split(" ")?.length - 1]}
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-[20px]">
                            <div className="flex items-center gap-[10px] text-[32px] font-[700] text-white">
                                <ArrowUp /> You Receive
                            </div>
                            <ExchangeDropdown
                                data={EXCHANGE_LIST}
                                value={receiveSelectedItem}
                                onChange={setReceiveSelectedItem}
                                type="receive"
                            />
                            <input
                                type="text"
                                className={`flex-grow cursor-not-allowed text-primary border-[1px] border-stroke placeholder:text-gray-400 p-[15px] rounded-[6px] w-full focus:border-primary focus:outline-none text-medium disabled:bg-white`}
                                value={receiveValue}
                                disabled
                            />
                            <div className="bg-primary/60 rounded-tl-[40px] rounded-br-[40px] h-[48px] w-full flex items-center px-[20px] font-[600] text-white">
                                Reserve: {EXCHANGE_LIST.find(item => item.id === receiveSelectedItem)?.reserved || "0 USD"}
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <CustomButton
                            title="Exchange"
                            leftIcon={<ArrowSwapHorizontal />}
                            size="large"
                            className="w-full sm:w-fit"
                        />
                    </div>
                </div>
            </ParentDiv>
        </div>
    );
};

export default Hero;
