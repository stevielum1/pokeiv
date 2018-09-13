import React from 'react';
import { Route } from 'react-router-dom';
import MainContainer from './main_container';
import PokeContainer from './poke_container';

const App = () => {
  return (
    <div>
      <Route path="/" component={MainContainer} />
      <Route path="/:id" component={PokeContainer} />
    </div>
  );
};

export default App;