import moment from 'moment';
import React from 'react'
import DataTable from 'react-data-table-component';
import { customStyles } from '@/assets/data/tableStyle';

export interface IExchangeTable {
    send: string;
    received: string;
    amount: string;
    username: string;
    time: string;
    status: string;
}

const ExchangeListTable = ({ data }: { data: IExchangeTable[] }) => {

    const columns = [
        {
            name: "🔄 Send",
            selector: (row: IExchangeTable) => row?.send,
            sortable: true,
        },
        {
            name: "📥 Received",
            selector: (row: IExchangeTable) => row?.received,
            sortable: true,
        },
        {
            name: "💵 Amount",
            selector: (row: IExchangeTable) => row?.amount,
            sortable: true,
        },
        {
            name: "👤 Username",
            selector: (row: IExchangeTable) => row?.username,
            sortable: true,
        },
        {
            name: "⏰ Time",
            selector: (row: IExchangeTable) => moment(row?.time).utc().format('ll'),
            sortable: true,
        },
        {
            name: "🚧 Status",
            cell: (row: IExchangeTable) => (
                <div className={`${row?.status === "Processing" ? "bg-yellow-500" : row?.status === "Accepted" ? "bg-green-500" : "bg-red-500"} text-white text-nowrap font-[500] py-[3px] px-[5px] rounded-[2px]`}>
                    {row?.status === "Processing" ? "🕒 Processing" : row?.status === "Accepted" ? "🎉 Accepted" : "💸 Refunded"}
                </div>
            ),
            sortable: true,
        },
    ];

    return (
        <div className='w-full'>
            <DataTable
                columns={columns}
                data={data}
                customStyles={customStyles}
                persistTableHead
                responsive
            />
        </div>
    )
}

export default ExchangeListTable