import React from 'react';
import {DatePicker, Input, InputNumber, Radio, Switch} from "antd";

const {TextArea } = Input

const initTask = {
    isToday: true,
    description: '',
    priority: 'MEDIUM',
    type: 'STATIC',
}
const CreateTaskItem = ({ index, taskItem, handleChange, onSubmit }) => {
    return (
        <div>
            <div className={'border rounded-2xl p-8 my-2'}>
                <div className={'text-xl font-bold'}> Basic Information </div>
                <div className={'text-slate-400'}> Get started by explaining the task</div>

                <div className={'flex gap-4 py-2'}>
                    <span> Is this for today?</span>

                    <span>
                    <Switch
                        checked={taskItem?.isToday}
                        onChange={handleChange('isToday', index)}
                    />
                        {/*<span> {!!form?.isToday ? 'Yes' : 'No'}</span>*/}
                </span>
                </div>

                {!taskItem?.isToday?.isToday && (
                    <div className={'flex gap-4 py-2'}>
                        <span> Date</span>
                        <DatePicker onChange={(date, dateString) =>
                            handleChange('date', index)

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

                <div>
                    <span className={' font-semibold'}> Task Type</span>
                    <div className={'text-sm text-slate-400'}> Identify this task as  static (instant completion) or progression (completed over time)  </div>
                    <Radio.Group className={'my-2'} onChange={handleChange('type', index)} defaultValue={'STATIC'} value={taskItem?.type}>
                        <Radio value={'STATIC'}>Static</Radio>
                        <Radio value={'PROGRESS'}>Progression</Radio>

                    </Radio.Group>

                </div>

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
                    <Radio.Group className={'my-2'} onChange={handleChange('priority', index)} defaultValue={3} value={taskItem?.priority}>
                        <Radio value={'EXTREMELY_LOW'}>Extremely Low</Radio>
                        <Radio value={'LOW'}>Low</Radio>
                        <Radio value={'MEDIUM'}>Medium</Radio>
                        <Radio value={'HIGH'}>High</Radio>
                        <Radio value={'URGENT'}>Urgent</Radio>

                    </Radio.Group>
                </div>

                <div className={' py-2'}>
                    <span className={' font-semibold'}> Estimated Time Needed</span>
                    <div className={'text-sm text-slate-400'}> Tasks with higher estimated tasks will provide more points upon completion </div>
                    <InputNumber className={'my-2'} onChange={handleChange('timeNeeded', index)} placeholder={'10'} />
                </div>


                <div className={'flex justify-center my-4 text-slate-600'}> By default, every task completion will grant 5 points. You can gain bonus points based on the priority and time complexity of the task completed.</div>

            </div>

        </div>
    );
};

export default CreateTaskItem;
