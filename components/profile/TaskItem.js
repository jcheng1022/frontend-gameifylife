import React, {useState} from 'react';
import {GiTwoCoins} from "react-icons/gi";
import {FaFlagCheckered} from "react-icons/fa";
import {LuSwords} from "react-icons/lu";
import {FaRegCircleCheck} from "react-icons/fa6";
import APIClient from "@/services/api"
import {TASK_STATUS} from "@/constants";
import {notification} from "antd";
import {useQueryClient} from "@tanstack/react-query";
import {useCurrentUser} from "@/hooks/user.hooks";
import {RiProgress5Line} from "react-icons/ri";

const TaskItem = ({task}) => {
    const [api, contextHolder] = notification.useNotification();
    const client = useQueryClient();
    const {data: user } = useCurrentUser();
    const [isLoading, setIsLoading] = useState(false)

    const handleCtaBtn = () => {

        setIsLoading(true)
        return APIClient.api.patch(`/task/${task.id}/status/`, {

        }).then(async (data) => {
            await client.refetchQueries({
                queryKey: [user?.id, 'tasks', 'today', {}]
            })




            if (data.status === TASK_STATUS.IN_PROGRESS) {
                api.info({
                    message: 'Started!',
                    description: `You've started the task, get going!`
                });
            }
            setIsLoading(false)

        })
    }
    return (
        <div key={`task-${task.id}`} className={' grow bg-slate-50 flex flex-col border-2 p-4 rounded-2xl w-72 h-40'}>

            <div> {task.name}</div>



            <div className={'mt-auto'}>


                <div>
                    <div className={'flex gap-2 my-4'}>
                        <GiTwoCoins color={'gold'} size={20}/>

                        <span className={'text-md font-semibold '}> {task?.pointsReward}</span>

                    </div>
                </div>



                {isLoading ? (
                    <div className={'cursor-not-allowed flex justify-center gap-4 h-10  w-full bg-slate-200 p-2 rounded-lg text-slate-500 text-center font-extrabold mt-auto'}>
                        Loading ...
                    </div>
                ) : task?.log?.status === TASK_STATUS.COMPLETED ?
                    <div className={'cursor-not-allowed flex justify-center gap-4 h-10  w-full bg-slate-200 p-2 rounded-lg text-slate-500 text-center font-extrabold mt-auto'}>
                        <FaFlagCheckered size={20} />COMPLETED

                    </div>

                    : task?.log?.status === TASK_STATUS.IN_PROGRESS ? (
                        <div onClick={handleCtaBtn} className={'cursor-pointer flex justify-center gap-4 h-10  w-full bg-cyan-100 p-2 rounded-lg text-cyan-500 text-center font-extrabold mt-auto'}>
                            <RiProgress5Line size={20} /> In Progress

                        </div>
                    ) :(
                        <div
                            onClick={handleCtaBtn}
                            className={`cursor-pointer flex items-center justify-center gap-4 h-10 w-full ${!!task?.isProgress ? 'bg-yellow-500' : 'bg-green-400'} p-2 rounded-lg text-center text-white font-extrabold mt-auto`}>
                            {!!task?.isProgress ? (
                                <>
                                    <LuSwords size={20}/>
                                    Challenge
                                </>
                            ) : (
                                <>
                                    <FaRegCircleCheck size={20}/>
                                    Complete
                                </>
                            )}
                        </div>
                    )}

            </div>


            {contextHolder}

        </div>
    );
};

export default TaskItem;