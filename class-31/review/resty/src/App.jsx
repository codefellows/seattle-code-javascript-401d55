import { useEffect, useReducer } from 'react';
import axios from 'axios';

import './App.scss';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History';

function App() {

  let initialState = {
    url: '',
    method: '',
    data: null,
    history: []
  }

  const reqReducer = (state, action) => {
    switch(action.type) {
      case 'ADD_URL':
        state.url = action.payload;
      case 'ADD_METHOD':
        state.method = action.payload;
      case 'ADD_DATA':
        return { ...state, data: action.payload }
      case 'ADD_HISTORY':
        const newResult = { ...action.payload, method: state.method, url: state.url }
        const updatedHistory = [ ...state.history, newResult ]

        return { ...state, history: updatedHistory }
      default:
        return state
    }
  }

  const [ state, dispatch ] = useReducer(reqReducer, initialState);

  useEffect(() => {
    const { url, method } = state;

    if ( method && url ) {
      axios[method](url).then((results) => {
        dispatch({
          type: 'ADD_DATA',
          payload: results.data
        })
        dispatch({
          type: 'ADD_HISTORY',
          payload: results.data
        })        
      })
    }
  }, [state.url, state.method]); // these are the values that React is "monitoring", any changes in these values will trigger the useEffect function.


  return (
    <>
      <Header />
      <div>Request Method: { state.method }</div>
      <div>URL: { state.url }</div>
      <Form dispatchReqParams={ dispatch } />
      <History history={ state.history } dispatchHistoryChange={ dispatch } />
      <Results data={ state.data } />
      <Footer />
    </>
  );
}

export default App;
