'use client'

import React from 'react';
import {RANK_DETAILS} from "@/constants";
import Image from "next/image";
import {rankLogos} from "@/components/modals/RankInfoModal";

const RankingSystem = () => {
    return (
        <div className={'flex flex-col items-center '}>
            <div className={'font-bold text-2xl text-slate-600 mb-2 sm:mb-8'}> Climb the ranks</div>

            <div className={'flex flex-col md:flex-row gap-2 border-4 mb-2 py-2 px-4 border-purple-400 rounded-xl bg-purple-200 '}>
                {Object.keys(RANK_DETAILS).map((key) => (
                    <div key={key} className={'flex flex-col  items-center'}>
                        <div><span className={'font-bold'}>{RANK_DETAILS[key].name}</span></div>

                        <Image src={rankLogos[key]} alt={`${RANK_DETAILS[key].name} Icon`} width={100} height={100} />

                    </div>
                ))}
            </div>

            <div className={' w-full md:w-80 mx-4 mt-4 lg:mx-12 max-w-full text-black text-center '}> Everybody starts at bronze rank and players rank up by completing tasks. The more active you are, the more points or XP you gain towards ranking up! </div>


        </div>
    );
};

export default RankingSystem;
