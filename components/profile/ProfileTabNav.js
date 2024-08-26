'use client'


import {useProfileContext} from "@/context/ProfileContext";

const tabOptions = [
    {
        label: 'Tasks',
        value: 'tasks',
        // bg: 'sky-100',
        subtabs: [
            {
                label: 'All'
            },
            {
                label: 'Today'
            },
            {
                label: 'Past Week'
            },
            {
                label: 'Past Month'
            },
        ]

    },
    {
        label: 'Analytics',
        value: 'analytics'
    }
]
const ProfileTabNav = () => {
    const  {selectedTab, setSelectedTab} = useProfileContext()


    const selectTab = (val) => {
        setSelectedTab(val)
    }

    return (
        <div className={'flex mb-2'}>
            {tabOptions.map((tab) => {
                const isSelected = selectedTab === tab.value

                return (
                    <div onClick={() => selectTab(tab.value)}
                         key={`profile-tab-$${tab.value}`}
                         className={` text-lg ${isSelected ? 'font-bold' : 'font-medium'} ${!isSelected ? 'hover:bg-slate-100' : ''} cursor-pointer text-center py-2 grow ${isSelected ? 'bg-sky-100' : ''}`}>
                        <span> {tab.label}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default ProfileTabNav
