import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import response from './data/pokemons.json';

const getRandFromList = myArray =>
  myArray[Math.floor(Math.random() * myArray.length)];

const onCorrectAnswer = () => alert('You are right!!!');
const onErrorAnswer = () => alert('You are wrong!!!');

ReactDOM.render(
  <App
    pokemons={response['data']}
    nextPokemon={getRandFromList}
    onCorrectAnswer={onCorrectAnswer}
    onErrorAnswer={onErrorAnswer}
  />,
  document.getElementById('root'),
);
registerServiceWorker();
