import reducer, { increment } from './votes.js';

describe('Testing the reducer function', () => {
  test('State can increment votes', () => {

    let initialState = reducer(undefined, {type: null});
    expect(initialState.totalVotes).toEqual(0);

    let state = reducer(initialState, increment('Jacob'));
    state = reducer(state, increment('John'));
    expect(state.totalVotes).toEqual(2);
    expect(state.candidates[0].votes).toEqual(1);
    expect(state.candidates[2].votes).toEqual(1);
    console.log(state);
  });
});