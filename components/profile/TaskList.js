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

            <div className={'font-bold text-lg text-slate-400'}> Todays Tasks</div>
           <div className={'flex flex-wrap gap-2'}>
               {tasks?.map((task, index) => {
                   return (
                       <TaskItem key={`task-item-${index}`} task={task}/>
                   )
               })}

           </div>

            <CreateTaskModal onCancel={() => setOpenCreateTasks(false)} open={openCreateTasks}/>
        </div>
    );
};

export default TaskList;
