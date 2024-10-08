import React from 'react';

const Purpose = () => {

    const itemClassName = ' bg-violet-100 border-2 border-white rounded-3xl p-8 text-center w-full font-semibold text-black'
    return (
        <div className={'px-12 flex flex-col items-center'}>

            <div className={'text-2xl text-black font-extrabold'}> How we help </div>

            <div className={'h-8 sm:h-18'}/>

            <div className={' mx-12 flex flex-col md:flex-row gap-8 lg:gap-24'}>
                <div className={itemClassName}>
                    {/*<div>*/}
                    {/*    img*/}
                    {/*</div>*/}
                    <div className={'underline text-xl mb-4'}> Rewards </div>
                    <div className={'w-full text-sm text-slate-600'}> {`You tell us the task, we'll assign a reward value based on complexity and your account history, making sure you're rewarded generously`}</div>
                </div>
                <div className={itemClassName}>
                    {/*<div>*/}
                    {/*    img*/}
                    {/*</div>*/}
                    <div className={'underline text-xl mb-4'}> Earn Achievements </div>
                    <div className={'w-full text-sm text-slate-600'}> {`Consistency matters! There are platform wide achievements that players can earn simply by being active on the site.`}</div>
                </div>
                <div className={itemClassName}>
                    {/*<div>*/}
                    {/*    img*/}
                    {/*</div>*/}
                    <div className={'underline text-xl mb-4'}> Daily Setups </div>
                    <div className={'w-full text-sm text-slate-600'}> {`Everyday before noon (the time is customizable of course!), players set up tasks for the day.`}</div>
                </div>
            </div>
        </div>
    );
};

export default Purpose;
