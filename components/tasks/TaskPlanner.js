'use client';

import React from 'react';
import {Collapse, DatePicker, Input, InputNumber, Radio, Switch} from "antd";
import {generateTaskId} from "@/utils";

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
        setSelected(e.currentTarget.id)
    }
    return (
        <div>
            {form?.map((task, index) => {
                const taskId = generateTaskId(index)
                return (

                    <Collapse
                        key={`task-planner-item-${index}`}
                        accordion
                        activeKey={selected}
                        collapsible="header"
                        ghost
                        expandIconPosition={'end'}
                        className={'grow max-w-120 border text-sm rounded-2xl p-8 my-2'}                        defaultActiveKey={['1']}
                        items={[
                            {
                                key: taskId,
                                label: task.name || 'Untitled',
                                children: <div key={generateTaskId(index)}  id={generateTaskId(index)} onClick={handleTaskClick} >
                                    <div className={'text-md font-bold'}> Basic Information </div>
                                    <div className={'text-xs text-slate-400'}> Get started by explaining the task</div>

                                    <div className={'flex gap-4 py-2'}>
                                        <span> Is this for today?</span>

                                        <span>
                    <Switch
                        checked={form?.isToday}
                        onChange={handleChange('isToday', index)}
                    />
                                            {/*<span> {!!form?.isToday ? 'Yes' : 'No'}</span>*/}
                </span>
                                    </div>

                                    {!form?.isToday && (
                                        <div className={'flex flex-col justify-center gap-1 py-2'}>
                                            <span className={'font-bold'}> Date</span>
                                            <DatePicker onChange={(date, dateString) =>
                                                setForm(prev => {
                                                    return {
                                                        ...form,
                                                        date: dateString
                                                    }
                                                })
                                            }/>
                                        </div>
                                    )}

                                    <div className={' py-2'}>
                                        <span className={' font-semibold'}> Name</span>
                                        <div className={'text-sm text-slate-400'}> The name of task should be short but descriptive enough to identify at first glance</div>
                                        <Input placeholder={'Go to the gym'} onChange={handleChange('name', index)} />
                                    </div>

                                    <div className={'py-2'}>
                                        <span className={' font-semibold'}> Description of Task</span>
                                        <div className={'text-sm text-slate-400'}> Provide any additional details about the task, optional of course. </div>
                                        <TextArea onChange={handleChange('description', index)} placeholder={'Spend 60 minutes at the gym and do cardio at the end of the workout'} />
                                    </div>


                                    <div className={'border rounded-2xl p-8 my-2'}>

                                        <div className={'text-xl font-bold'}> Rewards </div>
                                        <div className={'text-slate-400'}> You should be proud of yourself when you complete a task, and you deserve a reward! </div>


                                        {/* NOTE: TEMPORARILY COMMENTED OUT*/}
                                        {/*<div className={' py-2'}>*/}
                                        {/*    <span className={' font-semibold'}> Points Award</span>*/}
                                        {/*    <div className={'text-sm text-slate-400'}> How many points should be awarded? You choose the amount, but we may adjust the points given the task!</div>*/}
                                        {/*    <InputNumber placeholder={'10'} />*/}
                                        {/*</div>*/}

                                        <div className={' py-2'}>
                                            <span className={' font-semibold'}> Priority</span>
                                            <div className={'text-sm text-slate-400'}> The priority of the task will help determine the points awarded upon completion </div>
                                            <Radio.Group className={'my-2'} onChange={handleChange('priority', index)} defaultValue={3} value={form?.priority}>
                                                <Radio value={'EXTREMELY_LOW'}>Extremely Low</Radio>
                                                <Radio value={'LOW'}>Low</Radio>
                                                <Radio value={'MEDIUM'}>Medium</Radio>
                                                <Radio value={'HIGH'}>High</Radio>
                                                <Radio value={'URGENT'}>Urgent</Radio>

                                            </Radio.Group>
                                        </div>

                                        <div className={' py-2'}>
                                            <span className={' font-semibold'}> Estimated Time Needed ( in minutes )</span>
                                            <div className={'text-sm text-slate-400'}> Tasks with higher estimated tasks will provide more points upon completion </div>
                                            <InputNumber className={'my-2'} onChange={handleChange('timeNeeded', index)} placeholder={'10'} />
                                        </div>


                                        <div className={'flex justify-center my-4 text-slate-600'}> By default, every task completion will grant 5 points. You can gain bonus points based on the priority and time complexity of the task completed.</div>

                                    </div>


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
