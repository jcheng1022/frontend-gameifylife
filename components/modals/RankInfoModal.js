'use client'
import React from 'react';
import {Button, Modal} from "antd";
import Image from "next/image";
import BronzeLogo from '../../public/bronze.svg'
import SilverLogo from '../../public/silver.svg'
import GoldLogo from '../../public/gold.svg'
import PlatinumLogo from '../../public/platinum.svg'
import DiamondLogo from '../../public/diamond.svg'
import MasterLogo from '../../public/master.svg'
import {RANK_DETAILS} from "@/constants";

export const rankLogos = {
    BRONZE: BronzeLogo,
    SILVER: SilverLogo,
    GOLD: GoldLogo,
    PLATINUM: PlatinumLogo,
    DIAMOND: DiamondLogo,
    MASTER: MasterLogo,
};

const RankInfoModal = ({ open, onCancel }) => {
    return (
        <Modal width={850} open={open} onCancel={onCancel} footer={[<Button onClick={onCancel} className={'w-full h-12 bg-sky-300 text-white font-bold'} key="got-it">Got it!</Button>]}>
            <div className={'text-2xl pb-4 font-semibold'}>Ranking System</div>
            <div className={'text-xs'}>Gameify Life uses a ranking system which correlates with your level. Completing tasks will grant points, which will bring you closer to promotion towards the next rank.</div>

            <div className={'text-center text-xl font-semibold mt-4'}> Tiers</div>

            <div className={'flex   pt-4 gap-2'}>
                {Object.keys(RANK_DETAILS).map((key) => (
                    <div key={key} className={'flex flex-col w-64 items-center'}>
                        <div><span className={'font-bold'}>{RANK_DETAILS[key].name}</span> Tier</div>

                        <Image src={rankLogos[key]} alt={`${RANK_DETAILS[key].name} Icon`} width={100} height={100} />

                        <div>
                            <div>Level <span className={'font-bold'}>{RANK_DETAILS[key].level}</span></div>
                            <div><span className={'font-bold'}>{RANK_DETAILS[key].pointThreshold}</span> points</div>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <div className={'my-8 text-center'}>
                    The key to ranking up is to be consistent in planning your tasks and completing them!
                </div>
            </div>



        </Modal>
    );
};

export default RankInfoModal;
