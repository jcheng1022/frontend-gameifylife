import React from 'react';
import {useCurrentUser, useUserTaskHistory} from "@/hooks/user.hooks";
import TaskHistoryTable from "@/components/profile/TaskHistoryTable";

const ProfileAnalytics = () => {
    const {data: user} = useCurrentUser()
    console.log(user?.id, 'user')
    const {data: history, isFetching, isLoading, isRefetching } = useUserTaskHistory(user?.id)


    console.log(history, 22)
    return (
        <div>


            {(!isRefetching && (isFetching || isLoading)) ? <div>Loading...</div> : <TaskHistoryTable data={history}/>}




        </div>
    );
};

export default ProfileAnalytics;
