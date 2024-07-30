'use client';
import React, {useState} from 'react';
import dynamic from 'next/dynamic';
import {Button, DatePicker, Input, InputNumber, notification, Radio, Switch} from "antd";
import APIClient from '@/services/api'
import {useQueryClient} from "@tanstack/react-query";
import {useCurrentUser} from "@/hooks/user.hooks";

const Modal = dynamic(() => import('antd/lib/modal'), { ssr: false });

const {TextArea} = Input
const CreateTaskModal = ({ open, onCancel }) => {
    const [api, contextHolder] = notification.useNotification();
    const client = useQueryClient();
    const {data: user} = useCurrentUser()
    const [form, setForm] = useState({
        isToday: true,
        priority: 'MEDIUM',
        hasReward: true
    });

    const openNotificationWithIcon = (error) => {
        api['error']({
            message: 'Could not create task',
            description: error.message
        });
    };

    const handleChange = (name) => (e) => {

        const val = typeof e === 'object' ? e.target.value : e

        setForm((prev) => {
            return {
                ...prev,
                [name]: val
            }
        })
    }

    const handleSubmit = async () => {
        console.log(form)

        const body = {...form}

        if (body?.isToday) {
            delete body.date
        }
        delete body.isToday

        await APIClient.api.post('/task', body).then(() => {
            client.refetchQueries({
                queryKey: [user?.id, 'tasks', {}]
            })
            onCancel()
        }).catch((error) => {
            openNotificationWithIcon(error)
        })
        console.log(body, 22)
    }
    return (
        <Modal width={'100%'} footer={[
            <Button key={'cancel-create-task-btn'}  className={'h-12 text-xl font-semibold'} onClick={onCancel}> Cancel </Button>,
            <Button key={`create-task-btn`}  className={'bg-sky-300 text-white font-bold text-xl w-28 h-12'} onClick={handleSubmit}> Create </Button>]}
               closeIcon={null} open={open} onCancel={onCancel}>
            {contextHolder}


            <div className={'border rounded-2xl p-8 my-2'}>
                <div className={'text-xl font-bold'}> Basic Information </div>
                <div className={'text-slate-400'}> Get started by explaining the task</div>

                <div className={'flex gap-4 py-2'}>
                    <span> Is this for today?</span>

                    <span>
                    <Switch
                        checked={form?.isToday}
                        onChange={handleChange('isToday')}
                    />
                        {/*<span> {!!form?.isToday ? 'Yes' : 'No'}</span>*/}
                </span>
                </div>

                {!form?.isToday && (
                    <div className={'flex gap-4 py-2'}>
                        <span> Date</span>
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
                    <Input placeholder={'Go to the gym'} onChange={handleChange('name')} />
                </div>

                <div className={'py-2'}>
                    <span className={' font-semibold'}> Description of Task</span>
                    <div className={'text-sm text-slate-400'}> Provide any additional details about the task, optional of course. </div>
                    <TextArea onChange={handleChange('description')} placeholder={'Spend 60 minutes at the gym and do cardio at the end of the workout'} />
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
                    <Radio.Group className={'my-2'} onChange={handleChange('priority')} defaultValue={3} value={form?.priority}>
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
                    <InputNumber className={'my-2'} onChange={handleChange('timeNeeded')} placeholder={'10'} />
                </div>


                <div className={'flex justify-center my-4 text-slate-600'}> By default, every task completion will grant 5 points. You can gain bonus points based on the priority and time complexity of the task completed.</div>

            </div>


        </Modal>
    );
};

export default CreateTaskModal;
