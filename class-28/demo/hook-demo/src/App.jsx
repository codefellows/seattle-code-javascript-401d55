import { useState } from 'react';
import BeyBlade from './components/BeyBlade';
import Chance from 'chance';
import './App.css'

const chance = new Chance();

function App() {
  const [names, setNames] = useState([]);

  const addName = () => {
    const randomName = chance.name();

    setNames([...names, randomName]);
  }

  const removeBlade = () => {

    // take names and remove 1
    let newNames = [];
    for (let i = 0; i < names.length - 1; i++) {
      let name = names[i];
      newNames.push(name);
    }

    setNames(newNames);
  }

  return (
    <>
      <button onClick={addName}>Create BeyBlade</button>
      <button onClick={removeBlade}>Remove Blade</button>
      {/* <BeyBladeList names={names} /> */}
      {names.map((name, idx) => <BeyBlade name={name} key={idx} />)}
    </>
  )
}

export default App
