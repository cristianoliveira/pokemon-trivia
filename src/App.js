import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

class App extends Component {
  constructor(props) {
    super(props);

    const pokemon = props.nextPokemon(props.pokemons);
    const wrongPokemons = props.pokemons
      .filter(p => p.name !== pokemon.name)
      .slice(0, 3);

    const options = shuffle([...wrongPokemons, pokemon]);

    this.state = {
      pokemon,
      options,
      wrong: false,
      reveal: false,
    };
  }

  onInputChange(e) {
    this.setState({ guessedName: e.target.value });
  }

  onSubmitForm(e) { e.preventDefault();
    const { onCorrectAnswer, onErrorAnswer } = this.props;
    const { pokemon, guessedName } = this.state;

    if (guessedName === pokemon.name) {
      onCorrectAnswer();
      this.setState({ wrong: false, reveal: true });
    } else {
      onErrorAnswer();
      this.setState({ wrong: true, reveal: true });
    }
  }blabla

  render() {
    const { pokemon, options, wrong, reveal } = this.state;
    if (!pokemon) {
      return null;
    }

    return (
      <div className="App">
        <header
          data-selector="pokemon-header"
          className="App-header">
          <div data-selector="pokemon-image">
            <img
              src={pokemon.image}
              className={`App-logo ${!reveal && 'blury'}`}
              alt="logo"
            />
          </div>
          <div className="pokemon-options" data-selector="pokemon-options">
            {wrong && <h1 className="App-title">{pokemon.name}</h1>}
            { options.map(p => <li>{ p.name }</li>) }
          </div>
        </header>
        <form
          data-selector="pokemon-form"
          action=""
          method="post"
          onSubmit={this.onSubmitForm.bind(this)}
        >
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
