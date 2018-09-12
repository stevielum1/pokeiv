import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPokemon();
  }

  render() {
    return (
      <div>
        <label>Name:
          <input type="text"/>
        </label>
      </div>
    );
  }
}

export default Main;