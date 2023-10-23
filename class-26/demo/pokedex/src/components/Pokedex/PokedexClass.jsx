import React from 'react';
import Pokemon from '../Pokemon/Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
    }
  }

  handleClick = () => {
    this.setState({ list: [...this.state.list, { name: 'pikachu', type: 'electric' }]});
  }

  render() {
    // this.setState({ list: ['pikachu']}); // don't do this here!!
    // console.log('PROPS IN RENDER', this.props);
    console.log(this.state.list);
    return (
      <div>
        <h2>Here is the Pokedex</h2>
        <button onClick={this.handleClick}>Add Pikachu</button>
        {this.state.list.map((listItem, idx) => <Pokemon key={idx} name={listItem.name} type={listItem.type}/>)}
      </div>
    )
  }
}

export default Pokedex;