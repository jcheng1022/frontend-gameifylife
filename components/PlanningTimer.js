'use client'

import React from 'react';
import {Statistic} from 'antd';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration'

dayjs.extend(utc);
dayjs.extend(duration);

const { Countdown } = Statistic;

// Function to get noon of the current day in UTC
const getDefaultNoonUTC = () => {
    return dayjs.utc().startOf('day').add(12, 'hour');
};

const NOON_UTC = "16:00:00+00"
const PlanningTimer = ({ endTime }) => {
    // If endTime is provided, use it; otherwise, use noon of the current day
    const timeRemaining = dayjs(`${dayjs().format('YYYY-MM-DD')} ${endTime ? endTime : NOON_UTC}`)
    const finalEndTime = endTime ? dayjs.utc(endTime) : getDefaultNoonUTC();

    const time = dayjs(`${dayjs().format('YYYY-MM-DD')} 18:00:00+00`)
    // console.log(dayjs(`${dayjs().format('YYYY-MM-DD')} 16:00:00+00`).format(), 222)
    const hours = dayjs(timeRemaining).diff(dayjs(), 'hours');

    const formatString = hours > 0 ? 'H [hours] mm [minutes] ss [seconds]' : 'mm [minutes] ss [seconds]';

    return (
        <Countdown valueStyle={{fontSize: 14, fontWeight: 500}} value={timeRemaining.valueOf()} format={formatString} />
    );
};

export default PlanningTimer;
