'use client';

import React from 'react';
import {useCurrentUserData} from "@/hooks/user.hooks";
import UserProfileRanking from "@/components/profile/userRanking/UserProfileRanking";

const UserRanking = () => {
    const {data: userData, isFetching, isLoading, isRefetching} = useCurrentUserData()

    const isInitializing = !isRefetching && (isFetching || isLoading)



    return (
        <UserProfileRanking isLoading={isInitializing} userData={userData} />
    );
};

export default UserRanking;
