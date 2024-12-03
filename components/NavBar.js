'use client';
import React from 'react';
import {Dropdown} from "antd";
import {useAuthContext} from "@/context/AuthContext";
import {useCurrentUser, useUserIsLoggedIn} from "@/hooks/user.hooks";
import {useRouter} from "next/navigation";


const NavBar = () => {
    const router = useRouter()

    const { data: user, isFetching, isLoading,  } = useCurrentUser();
    const fetchingUser = isFetching || isLoading;

    const userUid = useUserIsLoggedIn()

    // const dropdownMenuClassName = "bg-purple-500 text-white font-bold"
    const items = [
        {
            key: '1',
            // className:dropdownMenuClassName,
            // style: {
            //     color: "bg-red-200",
            //     margin: 0,
            //     backgroundColor: "red"
            // },
            label: (
               <div onClick={() => router.push(`/user/${user?.firebaseUuid}`)}>
                   My Profile
               </div>
            ),
        },

        {
            key: '4',

            danger: true,
            label: 'Log Out',
            onClick: () => logOut()
        },
    ];



    const {logOut, handleSignIn } = useAuthContext()

    const endSection = () => {
        if (userUid && !user && fetchingUser) {
            return <div>Loading...</div>
        }
        if (!userUid && !user) {
            return (
                <button className={'text-white hover:text-purple-400 font-bold h-10 px-4'} onClick={() => handleSignIn()}>
                    Get Started
                </button>
            )
        }
        if (userUid && user && !fetchingUser) {

            return (
                <Dropdown
                    menu={{
                        items,
                    }}



                    trigger={["click"]}
                >
                <div
                    className={' text-2xl cursor-pointer font-bold hover:text-purple-500'}>
                    {user?.name ? user.name : 'No name yet!'}
                </div>
                </Dropdown>

            )
        }
    }



    return (
        <div className={'px-8 h-24 py-4 flex  items-center justify-between bg-purple-300 text-white'}>
            <div className={'font-bold text-3xl cursor-pointer hover:text-purple-500'} onClick={() => router.push('/')}>
                Gameify Life
            </div>
            <div>
                {endSection()}
            </div>
        </div>
    );
};

export default NavBar;
