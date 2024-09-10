'use client';

import React, {useState} from 'react';
import {useCurrentUser, useUserTodayTasks} from "@/hooks/user.hooks";
import CreateTaskModal from "@/components/modals/CreateTaskModal";
import TaskItem from "@/components/profile/TaskItem";

const TaskList = () => {
    const {data: user} = useCurrentUser();
    const {data: tasks} = useUserTodayTasks(user?.id)
    const [openCreateTasks, setOpenCreateTasks] = useState(false)



    return (
        <div className={'bg-slate-100 w-full p-4 flex flex-col gap-4 rounded-2xl'}>

           <div className={'flex justify-between'}>
               <div className={'font-bold text-lg text-slate-400'}> Todays Tasks</div>
               <div className={'cursor-pointer rounded-lg bg-sky-200 border-0 text-md text-slate-500 font-bold py-2 px-8 hover:text-white'}
                    onClick={() => setOpenCreateTasks(true)}
               >
                   New
               </div>
           </div>
           <div className={'flex flex-wrap gap-2'}>
               {tasks?.length > 0 ? tasks?.map((task, index) => {
                   return (
                       <TaskItem key={`task-item-${index}`} task={task}/>
                   )
               }): <div className={'text-slate-400'}> No tasks for today yet! Create a new task to get started </div>}

           </div>

            <CreateTaskModal onCancel={() => setOpenCreateTasks(false)} open={openCreateTasks}/>
        </div>
    );
};

export default TaskList;
