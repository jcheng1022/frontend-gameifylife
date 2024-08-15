import React from 'react';
import Image from "next/image";
import MasterLogo from '/public/master.svg'

const Hero = () => {
    return (
        <div className={'bg-sky-100 p-4 flex items-center justify-around'}>
            <div>
<div className={'text-5xl font-bold text-slate-900'}>Turn your day into a game</div>
                <p className={'text-lg text-blue-700'}>Manage your tasks and earn rewards</p>
            </div>
            <div className={'bg-gradient-to-r from-cyan-200 to-blue-600 p-4 rounded-2xl'} style={{width:200, height:200}}>
                <Image src={MasterLogo} alt={'Ranking Icon'} width={200} height={200} />

            </div>
        </div>
    );
};

export default Hero;
