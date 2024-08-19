'use client'

import {createContext, useContext, useState} from "react";
// import {auth} from "@/lib/firebase/firebase";
// import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
// import {useQueryClient} from "@tanstack/react-query";

export const ProfileContext = createContext({});

export const useProfileContext = () => useContext(ProfileContext);


export const ProfileContextProvider = ({
                                        children,
                                    }) => {


const [selectedTab, setSelectedTab] = useState('tasks')


    const settings = {
        setSelectedTab,
        selectedTab
    }




    return (
        <ProfileContext.Provider value={settings}>

            {children}

        </ProfileContext.Provider>
    );
};
