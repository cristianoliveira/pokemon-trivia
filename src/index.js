import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import response from './data/pokemons.json';
import 'confetti-js';

const getRandFromList = myArray =>
  myArray[Math.floor(Math.random() * myArray.length)];

var confettiSettings = { target: 'my-canvas' };
var confetti = new window.ConfettiGenerator(confettiSettings);
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
  confetti.render();
};

const onErrorAnswer = () => {
  errorAnswerSound();
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
