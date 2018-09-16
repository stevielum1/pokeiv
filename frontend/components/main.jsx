import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchPokemon();
  }

  handleInput(e) {
    this.setState({ input: e.currentTarget.value });
  }

  handleClick(e) {
    this.setState({ input: "" });
  }

  render() {
    const pokemon = this.props.pokemon.filter(poke => {
      return poke.name.toLowerCase().includes(this.state.input.toLowerCase()) && this.state.input !== "";
    }).slice(0, 10);

    return (
      <div className="main-container">
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleInput}
          placeholder="Enter name of pokemon" />
        <ul className="poke-list">
          {pokemon.map(poke => (
            <Link
              to={`/${poke.id}`}
              key={poke.id}
              onClick={this.handleClick}>
              {poke.name}
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Main;