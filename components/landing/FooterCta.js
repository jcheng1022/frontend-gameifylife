'use client';

import React from 'react';
import {useCurrentUser} from "@/hooks/user.hooks";
import {useRouter} from "next/navigation";
import {useAuthContext} from "@/context/AuthContext";

const FooterCta = () => {
    const {data: user} = useCurrentUser()
    const router = useRouter()
    const { handleSignIn } = useAuthContext()


    const handleUserCta = () => {
        if (!!user) {
            router.push(`/user/${user?.firebaseUuid}`)
        } else {
            handleSignIn()
        }
    }

    return (
        <div className={'pt-24 bg-purple-400 md:p-24 pb-24 flex flex-col items-center justify-around'}>
            <div className={'text-3xl mb-2 lg:text-5xl text-white font-extrabold'}> Start gaining XP today</div>
            <div className={'text-xl mb-8 lg:text-3xl text-slate-200 font-bold'}> Seen enough? Dive in now</div>
            <button onClick={handleUserCta} className={' hover:text-white border-2 border-white bg-gradient-to-r from-purple-200 to-purple-400 font-medium my-2 lg:my-18 bg-slate-100 text-2xl px-8 py-4 rounded-2xl '}>
                Get Started
            </button>
        </div>
    );
};

export default FooterCta;
