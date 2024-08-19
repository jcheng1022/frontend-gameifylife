'use client'

import {useProfileContext} from "@/context/ProfileContext";
import TaskList from "@/components/profile/TaskList";
import ProfileAnalytics from "@/components/profile/ProfileAnalytics";

const ProfileContent = () => {

    const  {selectedTab} = useProfileContext()

    let body;

    if (selectedTab === 'tasks') {
        body = <TaskList/>
    }
        else if (selectedTab === 'analytics') {
            body = <ProfileAnalytics />
    }
    return body
}


export default ProfileContent
