import React, { useState, useEffect } from 'react';

// Implement the Context API
export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  // all values that we give to our children
  const [displayItems, setDisplayItems] = useState(3);
  const [hideCompleted, setHideCompleted] = useState(false);
  const [sort, setSort] = useState('difficulty');

  // changes hideComplete value
  const toggleComplete = () => setHideCompleted(!hideCompleted);
  const changeDisplayItems = (num) => {
    if (typeof(parseInt(num)) === 'number') {
      setDisplayItems(num);
    } else {
      console.log('Please give me a number!');
    }
  }

  useEffect(() => {
    let settingsValuesFromLocalStorage = JSON.parse(localStorage.getItem('settings'));
    if (settingsValuesFromLocalStorage) {
      setDisplayItems(settingsValuesFromLocalStorage.displayItems);
      setHideCompleted(settingsValuesFromLocalStorage.hideCompleted);
    }
  }, []); // runs once! When the component "mounts"

  useEffect(() => {
    // saving values to localstorage
    localStorage.setItem('settings', JSON.stringify({ displayItems, hideCompleted }));
    // console.log(localStorage);
  }, [hideCompleted, displayItems]);

  return (
    <SettingsContext.Provider value={{ displayItems, hideCompleted, sort, toggleComplete, changeDisplayItems }}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
