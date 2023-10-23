import { useState } from 'react'; // hook! -> functions from the React library, all hooks are functions
import Pokemon from '../Pokemon/Pokemon';

// most hooks when invoked, return a getter and a setter.


// why do need, this holds our pokemon,  when a button is clicked, a pokemon should appear.
function Pokedex(props) {
  // console.log(props);
  const [list, setList] = useState([]); // => [setter, getter]
  console.log(list);

  // getter -> a way to read a value from state
  // setter -> a function that updates the value read by the getter.
  // setList(['pikachu']); // dont' do this (right here)!!!

  function handleClick() {
    setList([...list, { name: 'pikachu', type: 'electric' }]);
  }

  return (
    <div>
      <h2>Here is the Pokedex</h2>
      <button onClick={handleClick}>Add Pikachu</button>
      {list.map((listItem, idx) => <Pokemon name={listItem.name} type={listItem.type} key={idx} />)}
    </div>
  );
}

export default Pokedex;