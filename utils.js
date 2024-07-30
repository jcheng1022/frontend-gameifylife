import {RANK_DETAILS, RANKING} from "@/constants";

export const getRankingIcon = (level) => {
    let svgPath;

    const numLevel = typeof level === 'number' ? level : parseInt(level)
    console.log(numLevel, 'level')
    switch(numLevel){
        case RANKING.BRONZE:
            svgPath = 'bronze.svg'
            break;
        case RANKING.SILVER:
            svgPath = 'silver.svg'
            break;
        case RANKING.GOLD:
            svgPath = 'gold.svg'
            break;
        case RANKING.PLATINUM:
            svgPath = 'platinum.svg'
            break;
        case RANKING.DIAMOND:
            svgPath = 'diamond.svg'
            break;
        case RANKING.MASTER:
            svgPath = 'master.svg'
            break;

    }

    return svgPath
}


export const generateTaskId = (index) => {
    return `planning-task-${index}`
}

export const calculateLevelProgress = (currentLevel, currentPoints) => {
    const rankValues = Object.values(RANK_DETAILS)

    const nextTier = rankValues.find(rank => rank.level === currentLevel + 1)

    const pointsNeeded = nextTier.pointThreshold - currentPoints
    const percentageComplete = (currentPoints / nextTier.pointThreshold) * 100


    return {
        pointsNeeded,
        percentageComplete : Math.round((percentageComplete + Number.EPSILON) * 100) / 100
        ,
        nextTier
    }
}
