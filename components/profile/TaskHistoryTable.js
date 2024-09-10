import React from 'react';
import {Table} from "antd";
import dayjs from "dayjs";

const TaskHistoryTable = ({data, isLoading = false}) => {

    if (isLoading) {
        return <div>Loading...</div>
    }

    const columns = [
        {
            title: 'Name',
            render: (text, record) => <span>{record.task.name}</span>,
            key: 'name',
        },
        {
            title: 'Point Reward',
            render: (text, record) => <span>{record.task.pointsReward}</span>,
            key: 'age',
        },

        {
            title: 'Status',
            render: (text, record) => {
                const {bglColor, statusText} = record.status === 'COMPLETED' ? {bglColor: 'bg-green-500', statusText: 'Completed'} : {bglColor: 'bg-slate-500', statusText: 'In Progress'}
                return (
                    <span className={`text-white px-4 py-2 p-1 rounded ${bglColor}`}>{statusText}</span>
                )
            },
            key: 'completedDate',
        },
        {
            title: 'Completed On',
            render: (text, record) => <span>{!!record.completedDate ? dayjs(record.completedDate).format('MM/DD/YY h:ss a') : 'N/A'}</span>,
            key: 'completedDate',
        },
    ]

    return (
        <>
            {data?.length === 0 && <div className={'text-center text-slate-400 py-12 mb-4 bg-slate-100'}>{`There's no task history yet! Once you start or complete tasks, they'll be updated here!`}</div>}
            <Table dataSource={data} columns={columns}/>
        </>
    );
};

export default TaskHistoryTable;
