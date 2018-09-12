import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", e => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});