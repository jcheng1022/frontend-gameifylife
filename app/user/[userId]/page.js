import React from 'react';
import UserRanking from "@/components/profile/UserRanking";
import TaskList from "@/components/profile/TaskList";
import CreateTaskModal from "@/components/modals/CreateTaskModal";
import Achievements from "@/components/profile/Achievements";

const UserPage = () => {

    return (
       <div>
           <div className={' flex flex-col gap-4 sm:flex-row p-4'}>
               <div className={'flex flex-col gap-2'}>
                   <UserRanking />
                   <Achievements />
               </div>

               <TaskList/>
           </div>
           <CreateTaskModal open={false} />
       </div>
    );
};

export default UserPage;
