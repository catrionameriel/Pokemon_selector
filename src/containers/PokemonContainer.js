import React, {Component} from 'react';
import PokemonSelector from '../components/PokemonSelector';
import PokemonDeetsBruv from '../components/PokemonDeetsBruv';

class PokemonContainer extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      selectedPokemon: null
    };
    this.onPokemonSelect = this.onPokemonSelect.bind(this);
  }

  sortPokemonByName(array) {
     return array.sort((a, b) => {
      if(a.name < b.name) {
        return -1;
      }
      if(a.name > b.name) {
        return 1
      }
      return 0
    });
  }

  componentDidMount() {
    let url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', () => {
      if(xhr.status !== 200) return;
      let pokemonObjects = JSON.parse(xhr.responseText);
      let pokemon = pokemonObjects.results.map((pokemon, index) => {
        return {
          name: pokemon.name,
          index: index
        }
      });
      let sortedNames = this.sortPokemonByName(pokemon);
      this.setState({
        pokemon: sortedNames
      })
    })
    xhr.send();
  }

  onPokemonSelect(index) {
    index++
    let url = 'https://pokeapi.co/api/v2/pokemon/' + index;
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {
      if(request.status !==200) return;
      let pokemonDeets = JSON.parse(request.responseText);
      this.setState({
        selectedPokemon: pokemonDeets
      })
    })
    request.send();
  }

  render() {
    return (
      <div>
        <PokemonSelector pokemon={this.state.pokemon} onPokemonSelect={this.onPokemonSelect} />
        <PokemonDeetsBruv pokemonDeets={this.state.selectedPokemon} />
      </div>
    )
  }
}

export default PokemonContainer;
