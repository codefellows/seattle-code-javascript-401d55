import { useReducer, useState } from 'react'
import './App.css'

function App() {
  const initialState = {
    pokedex: [],
    pokemon: {},
  }

  // const [state, setState] = useState({
  //   pokedex: [],
  //   pokemon: {},
  // });

  // setState({
  //   pokedex: [{name: 'Jacob', type: 'Javascript'}];
  // }); // this will mutate state in an in-inteded way, useReducer will help.

  /**
   * @param {pokedex [], pokemon {}} state 
   * @param {type STRING, payload ANY} action 
   * The types are the things that will happen in the future.
   */
  const reducer = (state, action) => {
    console.log(state, action);
    switch(action.type) {
      case 'ADD_POKEMON':
        state.pokedex = [...state.pokedex, action.payload];
        return state;
      case 'ADD_NAME':
        state.pokemon.name = action.payload;
        return state;
      case 'ADD_TYPE':
        state.pokemon.type = action.payload;
        return state;
      default:
        return state;
    }
  }

  // const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState); // what do (most) hooks return???

  const handleSubmit = (e) => {
    e.preventDefault();
    let nameValue = e.target.name.value;
    let typeValue = e.target.type.value;
    // action is happening now when we dispatch!
    dispatch({
      type: 'ADD_NAME',
      payload: nameValue
    }); // event Publishing a payload to the reducer
    dispatch({
      type: 'ADD_TYPE',
      payload: typeValue
    });
    dispatch({
      type: 'ADD_POKEMON',
      payload: {
        name: nameValue,
        type: typeValue
      }
    });
  }

  console.log(state);
  return (
    <>
      <header>
        <h1>My Pokemon Reducer</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <p>Add Name or type</p>
        <input name="name"/>
        <input name="type" />
        <button type="submit">Update Pokemon</button>
      </form>
      {/* <PokemonList pokedex={state.pokedex} /> */}
      {state.pokemon.name ? <p>{state.pokemon.name}</p> : null}
      {state.pokemon.type ? <p>{state.pokemon.type}</p> : null}
    </>
  )
}

export default App
