
const themedChallenges = {
    Luffy: [
        { id: 1, activity: 'Climb 100 steps', type: 'Endurance' },
        { id: 2, activity: '100 Push-ups', type: 'Strength' },
        { id: 3, activity: '100 Sit-ups', type: 'Strength' },
        { id: 4, activity: '100 Squats', type: 'Strength' },
        { id: 5, activity: 'Run 5 miles', type: 'Endurance' },
        { id: 6, activity: '100 Burpees', type: 'Strength' },
        { id: 7, activity: '100 Pull-ups', type: 'Strength' },
        { id: 8, activity: '100 Dips', type: 'Strength' },
        { id: 9, activity: '100 Crunches', type: 'Strength' },
        { id: 10, activity: '100 Jumping Jacks', type: 'Endurance'}
      ],
      Saitama: [
        { id: 1, activity: '100 Push-ups', type: 'Strength' },
        { id: 2, activity: '100 Sit-ups', type: 'Strength' },
        { id: 3, activity: '100 Squats', type: 'Strength' },
        { id: 4, activity: 'Run 5 miles', type: 'Endurance' },
        { id: 5, activity: '100 Burpees', type: 'Strength' },
        { id: 6, activity: '100 Pull-ups', type: 'Strength' },
        { id: 7, activity: '100 Dips', type: 'Strength' },
        { id: 8, activity: '100 Crunches', type: 'Strength' },
        { id: 9, activity: '100 Jumping Jacks', type: 'Endurance' },
        { id: 10, activity: '1000 meter Row', type: 'Endurance'}
      ],
}

export const getAllChallenges = (theme) => {
    return themedChallenges[theme] || [];
};

export const extractTotalFromChallenge = (challengeActivity) => {
    const numberPattern = /\d+/g;
    const wordPattern = /[a-zA-Z]+/g;

    const numbers = challengeActivity.match(numberPattern);
    const words = challengeActivity.match(wordPattern) || [];

    if (numbers && numbers.length > 0) {
        if (words.includes('miles')) {
            const mileIndex = words.indexOf('miles');
            if (mileIndex > 0 && numbers[mileIndex - 1]) {
                return parseInt(numbers[mileIndex - 1], 10);
            }
        } else if (words.includes('m') || words.includes('meter') || words.includes('meters')) {
            return parseInt(numbers[0], 10);
        } else {
            return parseInt(numbers[0], 10);
        }
    }

    return 100;
};


export const trackChallengeProgress = (challengeId, completed) => {
    console.log(`Challenge ${challengeId} completed: ${completed}`);
};
