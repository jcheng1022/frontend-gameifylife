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
        <div className={' bg-purple-100 p-8 md:p-24 mb-24 md:mb-4 flex flex-col lg:flex-row items-center justify-around'}>
            <div className={'flex-col items-center lg:text-left py-2 lg:py-24'}>
                {/*<Image src={MasterLogo} alt={'Ranking Icon'} className={'lg:block w-40 h-40'}/>*/}

                <div className={'text-3xl sm:text-5xl mb-2 lg:mb-6 font-bold text-black '}>Turn your day into a game</div>
                <p className={'w-full lg:w-3/4 text-lg font-semibold text-slate-400'}> {`It's easier to get things done when you reward yourself after completing it! Hop into the game that is your life, and you're in control.`}</p>

            </div>
            <div className={'hidden lg:block w-96 h-50 bg-gradient-to-r from-purple-300 to-purple-400 p-4 rounded-2xl'} >
                <Image src={MasterLogo} alt={'Ranking Icon'} className={'w-96 h-50'}/>
                <div
                    onClick={handleUserCta}

                    className={'w-full bg-gradient-to-br border-2 mt-8 from-purple-300 to-purple-400 hover:bg-gradient-to-tr border-2 cursor-pointer mt-8 rounded-2xl font-bold  h-16 flex items-center justify-center'}>
                    Start Game
                </div>

            </div>
            <div
                onClick={handleUserCta}

                className={'lg:hidden w-full bg-gradient-to-br border-2 from-purple-300 to-purple-400 hover:bg-gradient-to-tr border-2 cursor-pointer mt-8 w-64 rounded-2xl font-bold  h-16 flex items-center justify-center'}>
                Start Game
            </div>



        </div>
    );
};

export default Hero;
