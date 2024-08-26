'use client';

import React, {useState} from 'react';
import {useCurrentUserData} from "@/hooks/user.hooks";
import RankingLogo from "@/components/RankingLogo";
import XPBar from "@/components/profile/XPBar";
import RankInfoModal from "@/components/modals/RankInfoModal";

const UserRanking = () => {

    // const {data: user} = useCurrentUser()
    const {data: userData, isFetching, isLoading, isRefetching} = useCurrentUserData()
    const [openInfo, setOpenInfo] = useState(false)

    if (!isRefetching && (isFetching || isLoading)) {
        return <div> ...Loading</div>
    }

    const closeModal = () => {
        setOpenInfo(false)
    }

    return (
        <div className={'border rounded-2xl w-96 max-h-96 flex flex-col items-center justify-center p-12'}>

            <RankingLogo level={userData?.level} />
            <div className={'font-extrabold text-4xl py-4'}>  {userData?.user?.name}</div>
            <XPBar  level={userData?.level} points={userData?.points} />
            <div onClick={() => setOpenInfo(true)} className={'pt-4 text-purple-300 text-sm cursor-pointer font-semibold hover:underline'}> Learn more about leveling system</div>
            {!!openInfo && (
                <RankInfoModal open={openInfo} onCancel={closeModal}/>

            )}
        </div>
    );
};

export default UserRanking;
