import React from 'react';

const Purpose = () => {

    const itemClassName = 'p-2 text-center w-full lg:w-36 text-lg font-semibold text-slate-100'
    return (
        <div className={'flex flex-col items-center'}>

            <div className={'text-2xl text-slate-600 font-extrabold'}> How we help </div>

            <div className={'h-8 sm:h-18'}/>

            <div className={' mx-12 flex flex-col md:flex-row gap-4 lg:gap-24'}>
                <div className={itemClassName}>
                    <div>
                        img
                    </div>
                    <div> Rewards </div>
                    <div className={'w-full text-sm'}> {`You tell us the task, we'll assign a reward value based on complexity and your account history, making sure you're rewarded generously`}</div>
                </div>
                <div className={itemClassName}>
                    <div>
                        img
                    </div>
                    <div> Rewards </div>
                    <div className={'w-full text-sm'}> {`You tell us the task, we'll assign a reward value based on complexity and your account history, making sure you're rewarded generously`}</div>
                </div>
                <div className={itemClassName}>
                    <div>
                        img
                    </div>
                    <div> Rewards </div>
                    <div className={'w-full text-sm'}> {`You tell us the task, we'll assign a reward value based on complexity and your account history, making sure you're rewarded generously`}</div>
                </div>
            </div>
        </div>
    );
};

export default Purpose;
