// here begins our redux configuration
import { createStore, combineReducers } from 'redux';

import voteReducer from './votes.js';

// we may have more than 1 reducer, combineReducers gives us a way to write simpler reducer
let reducer = combineReducers({ votes: voteReducer });

export default createStore(reducer);
