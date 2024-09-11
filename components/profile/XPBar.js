import React from 'react';
import {Progress, Tooltip} from "antd";
import {calculateLevelProgress} from "@/utils";

const XpBar = ({level, points}) => {

    if (!level || !points) {
        return    <Progress format={() => `...` } percent={0} size={[300, 20]}  />

    }

    const { nextTier, percentageComplete, pointsNeeded} = calculateLevelProgress(level, points)
    return (
        <Tooltip title={`Only ${pointsNeeded} points until promotion to ${nextTier.name}!`} trigger={'hover'}>
            <Progress format={() => `${points} / ${nextTier.pointThreshold}` } percent={percentageComplete} size={[300, 20]}  />
        </Tooltip>
    );
};

export default XpBar;
