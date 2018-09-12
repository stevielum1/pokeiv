import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
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