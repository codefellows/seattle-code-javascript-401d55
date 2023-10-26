import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import Results from './components/Results';
import './App.css'

function App() {
  const [request, setRequest] = useState({
    method: 'get'
  });
  const [response, setResponse] = useState({});

  useEffect(() => {
    if (request.method && request.url) {
      handleRequest();
    }
  }, [request]);

  async function handleRequest() {
    try {
      let response = await axios(request);
      setResponse(response);
    } catch (e) {
      console.log(e);
    }
  }

  console.log("HERE IS MY REQUST OBJECT AND RESPONSE OBJECT", request, response);
  return (
    <>
      <header>
        <h1>Resty Phase 3!</h1>
      </header>
      <Form updateReqParams={setRequest} />
      {response.data ? <Results response={response} /> : null}
    </>
  )
}

export default App;
