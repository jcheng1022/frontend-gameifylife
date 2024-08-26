import React from 'react';
import PlanningPhase from "@/components/scenes/PlanningPhase";

const Page = ({params, searchParams}) => {

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
