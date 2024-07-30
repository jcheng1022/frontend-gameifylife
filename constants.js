export const TASK_STATUS = {
    IN_PROGRESS: 'IN_PROGRESS',
    COMPLETED: "COMPLETED",
}


export const RANKING = {
    BRONZE: 1,
    SILVER: 2,
    GOLD: 3,
    PLATINUM: 4,
    DIAMOND: 5,
    MASTER: 6
}

export const RANK_DETAILS = {
    BRONZE: {
        name: "Bronze",
        level: 1,
        pointThreshold: 0
    },
    SILVER: {
        name: "Silver",
        level: 2,
        pointThreshold: 500
    },
    GOLD: {
        name: "Gold",
        level: 3,
        pointThreshold: 1000
    },
    PLATINUM: {
        name: "Platinum",
        level: 4,
        pointThreshold: 2000
    },
    DIAMOND: {
        name: "Diamond",
        level: 5,
        pointThreshold: 3500
    },
    MASTER: {
        name: "Master",
        level: 6,
        pointThreshold: 5000
    }
}


// export const RANKING_ORDER = [RANKING.BRONZE, RANKING.SILVER, RANKING.GOLD, RANKING.PLATINUM, RANKING.DIAMOND, RANKING.MASTER]
