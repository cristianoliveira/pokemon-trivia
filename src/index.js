import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import response from './data/pokemons.json';

const getRandFromList = myArray =>
  myArray[Math.floor(Math.random() * myArray.length)];

const successSound = new Audio('http://localhost:3000/aplause.wav');
const correctAnswerSound = () => {
  successSound.loop = false;
  successSound.play();
};

const errorSound = new Audio('http://localhost:3000/error2.mp3');
const errorAnswerSound = () => {
  errorSound.loop = false;
  errorSound.play();
};

const onCorrectAnswer = () => {
  correctAnswerSound();
  alert('You are right!!!');
};

const onErrorAnswer = () => {
  errorAnswerSound();
  alert('You are wrong!!!');
};

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
