import React from 'react';
import PlanningPhase from "@/components/scenes/PlanningPhase";

const Page = ({params, searchParams}) => {

    console.log(params, searchParams,2)
    if (searchParams?.phase === 'planning') {
        return <PlanningPhase/>
    }
    return (
        <div>
            <div> sd</div>
        </div>
    );
};

export default Page;
