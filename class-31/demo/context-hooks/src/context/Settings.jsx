import React from 'react';

// don't forget to export your Context
export const SettingsContext = React.createContext();

class SettingsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      website: 'https://codefellows.org'
    }
  }

  render() {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    )
  }
}

export default SettingsProvider;
