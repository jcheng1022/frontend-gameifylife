'use client'

import React from 'react';
import dynamic from "next/dynamic";
import {useCurrentUser} from "@/hooks/user.hooks";

const PlanningTimer = dynamic(() => import('./PlanningTimer'), {
    ssr: false
})

const UserPlanningCountdown = () => {
    const {data: user} = useCurrentUser()
    return (
        <div className={'bg-purple-100 flex justify-center min-w-64 py-2 px-4 rounded-xl'}>
            <PlanningTimer endTime={user?.endPlanningTime} />
        </div>
    );
};

export default UserPlanningCountdown;
