import React from 'react';
import dayjs from "dayjs";
import {generateTaskId} from "@/utils";
import {Button} from "antd";


const test = [
    {
        name: "Do HW",
        description: 'test22',
        date: dayjs().format(),
        priority: 'MEDIUM'
    },
    {
        name: "Do HW2",
        description: 'test22',
        date: dayjs().format(),
        priority: 'MEDIUM'
    },
    {
        name: "Do HW2",
        description: 'test22',
        date: dayjs().format(),
        priority: 'MEDIUM'
    },
    {
        name: "Do HW3",
        description: 'test22',
        date: dayjs().format(),
        priority: 'MEDIUM'
    },

]
const Schedule = ({schedule, selected, setSelected, addNew}) => {
    return (
        <div className={'grow p-2 h-64 max-w-96 min-w-96 '}>
            <div className={'flex justify-between'}>
            <span className={'font-semibold text-purple-400'}>
                Schedule Preview
            </span>

                <Button onClick={addNew} className={'bg-purple-300 px-12 text-md font-bold text-white'}>
                    New
                </Button>

            </div>

            {schedule?.map((task, index) => {
                const taskId = generateTaskId(index)
                return (
                    <div id={taskId} className={`my-2 ${selected === taskId ? 'bg-blue-500' : 'bg-slate-100'} p-2 rounded`}>
                        <div className={'flex gap-4 items-center'}>
                            <span className={' flex justify-center items-center bg-slate-100 text-purple-500 w-8 h-8 p-2 rounded-full'}> {index + 1} </span>
                            <div>
                                <span suppressHydrationWarning> {dayjs(task.date).format('h:ss a')}</span>
                                <span> {task.name}</span>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    );
};

export default Schedule;
