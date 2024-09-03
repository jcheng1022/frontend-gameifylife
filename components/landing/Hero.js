'use client'

import React from 'react';
import Image from "next/image";
import MasterLogo from '/public/master.svg'
import {useRouter} from "next/navigation";
import {useCurrentUser} from "@/hooks/user.hooks";
import {useAuthContext} from "@/context/AuthContext";

const Hero = () => {
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
        <div className={' p-4 flex items-center justify-around'}>
            <div className={'py-24'}>
<div className={'text-5xl font-bold text-slate-900'}>Turn your day into a game</div>
                <p className={'text-lg text-blue-700'}>Manage your tasks and earn rewards</p>
                <div
                    onClick={handleUserCta}
                    className={'bg-gradient-to-bl border-4 mt-8 from-sky-200 to-sky-300 hover:bg-gradient-to-tr border-2 cursor-pointer mt-8 from-sky-200 to-sky-300 w-64 rounded-2xl font-bold  h-16 flex items-center justify-center'}> Start Game</div>
            </div>
            <div className={'bg-gradient-to-r from-cyan-200 to-blue-600 p-4 rounded-2xl'} style={{width:200, height:200}}>
                <Image src={MasterLogo} alt={'Ranking Icon'} width={200} height={200} />

            </div>


        </div>
    );
};

export default Hero;
