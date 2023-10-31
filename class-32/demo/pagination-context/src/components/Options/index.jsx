import { useContext } from 'react';
import { ThemeContext } from '../../context/Theme/ThemeProvider';

function Options () {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2>Current Mode: {theme.mode}</h2>
      <h2>Primary Color: {theme.primaryColor}</h2>
      <h2>Secondary Color: {theme.secondaryColor}</h2>
      <button onClick={theme.toggleMode}>Toggle Theme Mode!</button>
    </div>
  )
}

export default Options;