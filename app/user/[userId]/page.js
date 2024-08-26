import React from 'react';
import UserRanking from "@/components/profile/UserRanking";
import CreateTaskModal from "@/components/modals/CreateTaskModal";
import Achievements from "@/components/profile/Achievements";
import {ProfileContextProvider} from "@/context/ProfileContext";
import ProfileTabNav from "@/components/profile/ProfileTabNav";
import ProfileContent from "@/components/profile/ProfileContent";

const UserPage = () => {

    return (
       <div>
           <div className={' flex flex-col items-center gap-4 sm:flex-row sm:items-start p-4'}>
               <div className={'flex flex-col gap-2'}>
                   <UserRanking />
                   <Achievements />
               </div>
                <ProfileContextProvider>
                    <div className={'w-full'}>
                        <ProfileTabNav/>
                        <ProfileContent/>
                    </div>

                </ProfileContextProvider>
           </div>
           <CreateTaskModal open={false} />
       </div>
    );
};

export default UserPage;
