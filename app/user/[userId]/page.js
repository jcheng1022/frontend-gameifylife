'use client';
import React from 'react';
import {useCurrentUser} from "@/hooks/user.hooks";

const UserPage = () => {
    const {data: user} = useCurrentUser()
    return (
        <div>
            {user?.name}
        </div>
    );
};

export default UserPage;
