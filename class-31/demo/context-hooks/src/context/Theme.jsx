import React, { useState } from 'react';

// This is the object that will track values
export const ThemeContext = React.createContext();

// this is the Provider that must be present at the root of our app.
function ThemeProvider(props) {
  const [mode, setMode] = useState('light');
  // more things, more state values
  const [primaryColor, setPrimaryColor] = useState('baby-blue');

  return (
    // the value prop must be called value
    <ThemeContext.Provider value={{ mode, primaryColor }}>
      {/* this is not banana */}
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
