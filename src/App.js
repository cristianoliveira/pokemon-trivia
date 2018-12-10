import React, { Component } from 'react';
import logo from './logo.svg';
import data from './data/pokemons.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const pokemon = props.nextPokemon(props.pokemons);
    this.state = {
      pokemon,
      wrong: false,
      reveal: false,
    };
  }

  onInputChange(e) {
    this.setState({ guessedName: e.target.value });
  }

  onSubmitForm(e) {
    e.preventDefault();
    const { onCorrectAnswer, onErrorAnswer } = this.props;
    const { pokemon, guessedName } = this.state;

    if (guessedName === pokemon.name) {
      onCorrectAnswer();
      this.setState({ wrong: false, reveal: true });
    } else {
      onErrorAnswer();
      this.setState({ wrong: true, reveal: true });
    }
  }

  render() {
    const { pokemon, wrong, reveal } = this.state;
    if (!pokemon) {
      return null;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img
            src={pokemon.image}
            className={`App-logo ${!reveal && 'blury'}`}
            alt="logo"
          />
        </header>
        <form
          data-selector="pokemon-form"
          action=""
          method="post"
          onSubmit={this.onSubmitForm.bind(this)}
        >
          {wrong && <h1 className="App-title">{pokemon.name}</h1>}
          <input
            className={`pokemon-name ${wrong && 'pokeman-name-wrong'}`}
            type="text"
            onChange={this.onInputChange.bind(this)}
          />
        </form>
      </div>
    );
  }
}

export default App;
