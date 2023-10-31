import React, { useState, useEffect } from 'react';

// Implement the Context API
export const ThemeContext = React.createContext();

function ThemeProvider(props) {
  // all values that we give to our children
  const [mode, setMode] = useState('light');
  const [primaryColor, setPrimaryColor] = useState('#89CFF0');
  const [secondaryColor, setSecondaryColor] = useState('#ffffff');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
    // save to localstorage
  }

  useEffect(() => {
    // Load from localStorage!!
  }, []); // deliberatly blank so the effect only runs on "mount"

  useEffect(() => {
    if (mode === 'light') {
      setPrimaryColor('#89CFF0');
      setSecondaryColor('#ffffff');
    } else {
      setPrimaryColor('#ffffff');
      setSecondaryColor('#89CFF0');
    }
  }, [mode])

  return (
    // You can export functions the same way you would pass them as props, just be careful
    // Place anything on your shelf (value) that you want your children to have
    <ThemeContext.Provider value={{ mode, secondaryColor, primaryColor, toggleMode }}> 
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;