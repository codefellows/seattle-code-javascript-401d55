import { useContext } from 'react';
import { ThemeContext } from '../context/Theme';
// import { SettingsContext } from '../context/Settings';

function ThemeList() {
  const state = useContext(ThemeContext); // activate shelf portal!
  // const settings = useContext(SettingsContext);
  console.log('STATE FROM THEME LIST:', state);
  return (
    <ul>
      {Object.keys(state).map(key => <li>{key}: {state[key]}</li>)}
    </ul>
  )
}

export default ThemeList;
