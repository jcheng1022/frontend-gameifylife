import React from 'react';
import Image from "next/image";
import BronzeLogo from '../public/bronze.svg'
import SilverLogo from '../public/silver.svg'
import GoldLogo from '../public/gold.svg'
import PlatniumLogo from '../public/platinum.svg'
import DiamondLogo from '../public/diamond.svg'
import MasterLogo from '../public/master.svg'
import {RANKING} from "@/constants";
import styles from './RankingLogo.module.css'; // Import the CSS module


const RankingLogo = ({level}) => {


    let svgPath;

    switch(level){
        case RANKING.BRONZE:
            svgPath = BronzeLogo
            break;
        case RANKING.SILVER:
            svgPath = SilverLogo
            break;
        case RANKING.GOLD:
            svgPath = GoldLogo
            break;
        case RANKING.PLATINUM:
            svgPath = PlatniumLogo
            break;
        case RANKING.DIAMOND:
            svgPath = DiamondLogo
            break;
        case RANKING.MASTER:
            svgPath = MasterLogo
            break;

    }

    return (
        <div className={styles.imageContainer}>
            <Image src={svgPath} alt={'Ranking Icon'} width={200} height={200} />
            <div className={styles.hexagonContainer}>
                <div className={styles.hexagon}>
                    {level}
                </div>
            </div>
        </div>
    );
};

export default RankingLogo;
