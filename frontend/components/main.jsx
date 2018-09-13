import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.fetchPokemon();
  }

  handleInput(e) {
    this.setState({ input: e.currentTarget.value });
  }

  render() {
    const pokemon = this.props.pokemon.filter(poke => {
      return poke.name.toLowerCase().includes(this.state.input.toLowerCase()) && this.state.input !== "";
    });

    return (
      <div>
        <label>Name:
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleInput} />
        </label>
        <ul className="poke-list">
          {pokemon.map(poke => (
            <li key={poke.id}>
              <Link to={`/${poke.id}`}>{poke.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;