'use client';

import React, {useState} from 'react';
import UserPlanningCountdown from "@/components/UserPlanningCountdown";
import TaskPlanner from "@/components/tasks/TaskPlanner";
import Schedule from "@/components/modals/Schedule";
import {generateTaskId} from "@/utils";

const PlanningPhase = () => {
    const [selectedTask, setSelectedTask] = useState(generateTaskId(0))
    const [form, setForm] = useState([
        {
            index: generateTaskId(0),
            name: '',
            isToday: true,
            priority: 'MEDIUM',
            hasReward: true
        }
    ]);

    const handleChange = (name, index) => (e, dateString) => {
        const val = typeof e === 'object' ? e.target.value : e;

        if (name === 'date') {
            setForm(prev => {
                return {
                    ...form,
                    date: dateString
                }
            })
        } else {
            setForm((prev) => {
                // Copy the previous state array to avoid mutating it directly
                const newState = [...prev];

                // Ensure that the array contains an object at the specified index
                console.log(newState[index], index, 'index here', newState)
                if (!newState[index]) {

                    newState[index] = {};
                }

                // Update the specified field in the object at the specified index
                newState[index] = {
                    ...newState[index],
                    [name]: val
                };
                console.log(newState, 'new')

                return newState;
            });
        }

    };

    const addNewTask = () => {
        setForm((prev) => {
            const newState = [...prev,  {
                index: generateTaskId(form.length - 1),
                name: '',
                isToday: true,
                priority: 'MEDIUM',
                hasReward: true
            }]

            return newState
        })

        setSelectedTask(generateTaskId(form.length ))
    }



    return (
        <div>
            <div className={'flex flex-col items-center'}>
                <img src={'/planningLogo.png'} width={200}/>
                <div className={'text-2xl font-extrabold'}> {`Planning Phase`}</div>
                <div className={'text-xs text-slate-400'}> This is where you will create your task list for the day, setting yourself up for success </div>
                <div className={'my-4 gap-1 flex items-center flex-col '}>
                    <div> Time Remaining left</div>
                    <UserPlanningCountdown/>
                </div>
            </div>


            <hr className={'my-8 mx-12'}/>
            <div className={'p-4 flex flex-col sm:flex-row gap-4 sm:gap-2'}>

                <Schedule addNew={addNewTask} schedule={form} selected={selectedTask} setSelected={setSelectedTask}/>
                <TaskPlanner form={form} handleChange={handleChange} selected={selectedTask} setSelected={setSelectedTask}/>

            </div>

            <div className={'cursor-pointer font-bold flex justify-center bg-sky-300 hover:bg-sky-200 hover:text-white  mx-24 my-12 py-8 rounded-2xl text-2xl'}>
                {`I'm done, submit`}
            </div>
        </div>
    );
};

export default PlanningPhase;
