import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import response from './data/pokemons.json';

const getRandFromList = myArray =>
  myArray[Math.floor(Math.random() * myArray.length)];

const onCorrectMessage = () => alert('You are right!!!');

ReactDOM.render(
  <App
    pokemons={response['data']}
    nextPokemon={getRandFromList}
    onCorrectMessage={onCorrectMessage}
  />,
  document.getElementById('root'),
);
registerServiceWorker();
