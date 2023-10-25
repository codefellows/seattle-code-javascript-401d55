import React, { useState } from 'react';
import axios from 'axios';
import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention. 
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';

const App = () => {
  const [data, setData] = useState();
  const [requestParams, setRequestParams] = useState({});


  const callApi = async ({ method, url }) => {
    // mock output
    // const data = {
    //   count: 2,
    //   results: [
    //     {name: 'fake thing 1', url: 'http://fakethings.com/1'},
    //     {name: 'fake thing 2', url: 'http://fakethings.com/2'},
    //   ],
    // };
    // this.setState({data, requestParams});

    let myUrl = 'https://pokeapi.co/api/v2/pokemon/'; // this will just be URL when we hook it up to a custom API

    let response = await axios.get(myUrl);
    let data = response.data.results;
    setData(data);
    setRequestParams({ method, url });
  }

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      {data && <Results data={data} />}
      <Footer />
    </React.Fragment>
  );
}

export default App;
