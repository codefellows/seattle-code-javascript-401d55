import React from 'react';
import SettingsProvider from './context/Settings/SettingsProvider';
import ThemeProvider from './context/Theme/ThemeProvider';
import Todo from './Components/Todo';
import Options from './components/Options'

export default class App extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <ThemeProvider>
          <Options />
          <Todo />
        </ThemeProvider>
      </SettingsProvider>
    );
  }
}