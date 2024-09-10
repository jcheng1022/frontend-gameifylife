import React from 'react';
import {Tooltip} from "antd";

const example = [
    // {
    //     name: 'Daily Log In',
    //     img: '/streak.svg',
    //     description: 'Receive an award once a day for logging in!',
    //     hasCompleted: true
    // },
    // {
    //     name: 'Week streak',
    //     img: '/streak.svg',
    //     description: 'Completed all planned tasks this week',
    //     hasCompleted: true
    // },
    // {
    //     name: 'Daily Log In',
    //     img: '/streak.svg',
    //     description: 'Receive an award once a day for logging in!',
    //     hasCompleted: true
    // },
    // {
    //     name: 'Daily Log In',
    //     img: '/streak.svg',
    //     description: 'Receive an award once a day for logging in!',
    //     hasCompleted: true
    // }
]
const Achievements = () => {
    return (
        <div className={'border  w-96 p-4  bg-slate-100 rounded-2xl'}>
            <div className={'text-lg font-bold text-slate-400'}> Achievements</div>


            <div className={'flex mt-4 gap-2'}>
                {example?.length > 0 ? example?.map((achievement, index) => {
                    return (
                        <div key={`achievement-${index}`} className={' bg-slate-50 flex flex-col items-center border-2 p-2 rounded-xl '}>

                            <Tooltip title={achievement.name}>
                                <div className={'w-8 h-8'}>
                                    <img src={achievement.img}/>
                                </div>
                            </Tooltip>
                        </div>
                    )
                }) : <div className={'text-slate-400'}> No achievements yet! Once there are achievements to be earned, they will be shown here </div>}
            </div>

        </div>
    );
};

export default Achievements;
