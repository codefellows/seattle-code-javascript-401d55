import { useState} from 'react';
import axios from 'axios';
import './App.scss'
import Footer from './components/Footer';
import CountForm from './components/CountForm';

function App() {
  const [count, setCount] = useState(0); // sets this initial state value
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  console.log('THIS IS THE COUNTER GETTER VALUE', count);

  // setCount(1);// hooks into the React API, and react re-renders since an update has occured. WARNING DO NOT RUN HERE.

  const handleRequest = async (url, method) => {
    setLoading(true);
    let response = await axios[method](url) // cheeky 1 liner for axios requests.
    setLoading(false);
    setData(response.data); // data holds all the things we care about. use the setter to update React state.
  }

  return (
    <>
      <header>
        <h1>I am a header!!</h1>
        <p>I am not a heading element</p>
      </header>
      <main>
        <p>Current count: {count}</p>
        {/* <button onClick={() => setCount(count + 1)}>Add to Count</button> */}
        {/* Form Goes here */}
        <CountForm onSubmit={setCount} />
        {loading ? <p>loading... </p> : JSON.stringify(data)}
        <button onClick={() => {
          handleRequest('https://pokeapi.co/api/v2/pokemon/', 'get');
        }}>Submit Request!!</button>
      </main>
      <Footer />
    </>
  )
}

export default App
