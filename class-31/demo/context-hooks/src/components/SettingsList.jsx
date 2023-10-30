import React from 'react';
import { SettingsContext } from '../context/Settings';

class SettingsList extends React.Component {
  constructor(props) {
    super(props);
  }

  // magic words, they are not banana;
  static contextType = SettingsContext;

  render() {

    console.log(this.context); // not banana, this was added when we set our context type above.

    return (
      <div>
        <h2>Settings List!</h2>
      </div>
    )
  }
}

export default SettingsList;
