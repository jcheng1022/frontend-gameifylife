'use client';
import React from 'react';
import {Button} from "antd";
import {useAuthContext} from "@/context/AuthContext";
import {useCurrentUser, useUserIsLoggedIn} from "@/hooks/user.hooks";
import {useRouter} from "next/navigation";

const NavBar = () => {
    const router = useRouter()

    const { data: user, isFetching, isLoading,  } = useCurrentUser();
    const fetchingUser = isFetching || isLoading;

    const userUid = useUserIsLoggedIn()




    const {logOut, handleSignIn } = useAuthContext()

    const endSection = () => {
        if (userUid && !user && fetchingUser) {
            return <div>Loading...</div>
        }
        if (!userUid && !user) {
            return (
                <Button className={'bg-sky-300 text-white font-bold h-10 px-4'} onClick={() => handleSignIn()}>
                    Get Started
                </Button>
            )
        }
        if (userUid && user && !fetchingUser) {

            return (
                <div className={'cursor-pointer font-bold hover:text-primaryOrange'} onClick={() => router.push(`/user/${user?.firebaseUuid}`)}  > {user?.name ? user.name : 'No name yet!'} </div>

            )
        }
    }



    return (
        <div className={'px-8 py-4 flex justify-between'}>
            <div>
                GameifyLife
            </div>
            <div>
                {endSection()}
            </div>
        </div>
    );
};

export default NavBar;
