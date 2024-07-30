import React from 'react';
import {GiTwoCoins} from "react-icons/gi";


const Task = ({task}) => {
    return (
        <div className={'flex flex-col justify-between h-36 border rounded-2xl  p-4 w-64 hover:cursor-pointer'}>
           <div>
               <div className={'mb-2 font-medium'}> {task.name}</div>
               <div className={'text-xs wrap'}> {task.description}</div>

           </div>
            <div className={'flex gap-1 items-center'}>

                {task?.pointsReward && (
                   <>
                       <span className={'text-md font-semibold text-yellow-800'}> + {task?.pointsReward}</span>
                       <GiTwoCoins color={'gold'}/>

                   </>
                )}
            </div>

        </div>
    );
};

export default Task;
