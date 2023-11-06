'use strict';

const initialState = {
  totalVotes: 0,
  candidates: [
    {name: 'Jacob', votes: 0},
    {name: 'JB', votes: 0},
    {name: 'John', votes: 0}
  ],
}

function reducer(state = initialState, action) {
  const { type, payload } =  action;
  // console.log('HERE IS THE STATE', state);
  // console.log('HERE IS THE ACTION', action);
  switch(type) {
    case 'INCREMENT_VOTES':
      return {
        candidates: state.candidates.map(candidate => {
          if (candidate.name === payload) {
            return {
              ...candidate,
              votes: candidate.votes + 1 // the one change we want to make to a 'candidate' object
            }
          } else {
            return candidate; // keep the candidate
          }
        }),
        totalVotes: state.totalVotes + 1
      }
    default:
      return state;
  }
}

// actions / action creator => a function that returns an action object
export const increment = (name) => {
  return {
    type: 'INCREMENT_VOTES',
    payload: name
  }
}

export default reducer;