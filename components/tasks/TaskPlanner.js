'use client';

import React from 'react';
import {Collapse, Input} from "antd";
import {generateTaskId} from "@/utils";
import CreateTaskItem from "@/components/CreateTaskItem";

const {TextArea} = Input
const TaskPlanner = ({selected, setSelected, form, handleChange}) => {
    // const [form, setForm] = useState([
    //     {
    //         index: generateTaskId(0),
    //         name: '',
    //         isToday: true,
    //         priority: 'MEDIUM',
    //         hasReward: true
    //     }
    // ]);
    //
    // const handleChange = (name, index) => (e) => {
    //     const val = typeof e === 'object' ? e.target.value : e;
    //
    //     setForm((prev) => {
    //         // Copy the previous state array to avoid mutating it directly
    //         const newState = [...prev];
    //
    //         // Ensure that the array contains an object at the specified index
    //         if (!newState[index]) {
    //             newState[index] = {};
    //         }
    //
    //         // Update the specified field in the object at the specified index
    //         newState[index] = {
    //             ...newState[index],
    //             [name]: val
    //         };
    //
    //         return newState;
    //     });
    // };
    //
    //

    const handleTaskClick = (e) => {
        console.log(e?.currentTarget?.id)
        setSelected((prev) =>  e.currentTarget.id === prev ? null : e.currentTarget.id)
        console.log(e.currentTarget.id, selected, 23232)
    }
    return (
        <div className={'min-w-full'}>
            {form?.map((task, index) => {
                const taskId = generateTaskId(index)

                const isSelected = taskId === selected
                return (

                    <Collapse
                        key={`task-planner-item-${index}`}
                        accordion
                        activeKey={selected}
                        collapsible="header"
                        ghost
                        expandIcon={null}
                        // expandIconPosition={'start'}
                        className={'min-w-full w-full  border text-sm rounded-2xl my-2'}                        defaultActiveKey={['1']}
                        items={[
                            {
                                key: taskId,
                                label: <div className={`px-4 rounded-2xl py-4 ${isSelected ? 'bg-sky-200 font-bold' : 'bg-slate-100'}  `} onClick={() => {
                                    taskId === selected ? setSelected(null) : !!selected ? setSelected(taskId) : setSelected(taskId)}
                                }> {task.name ? task.name : 'Untitled'} </div>,
                                // onClick: () => !!selected ? setSelected(null) : setSelected(taskId),
                                children: <div key={generateTaskId(index)}  id={generateTaskId(index)} >
                                   <CreateTaskItem index={index} handleChange={handleChange} />


                                </div>,
                            },
                        ]}
                    />
                    // <div key={generateTaskId(index)}  id={generateTaskId(index)} onClick={handleTaskClick} className={'grow max-w-120'}>


                )
            })}
        </div>
    );
};

export default TaskPlanner;
