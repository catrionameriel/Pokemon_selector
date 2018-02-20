import React from 'react';

const PokemonSelector = (props) => {

  const options = props.pokemon.map((pokemon, index) => {
    return <option value={index} key={index}>{capitalizeFirstLetter(pokemon.name)}</option>
  })

  function handleChange(event) {
    let index = event.target.value;
    let indexOfPokemon = props.pokemon[index].index;
    props.onPokemonSelect(indexOfPokemon);
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1, string.length);
  }

  return (
    <select id="pokemon-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Select Pokemon...</option>
      {options}
    </select>
  )
}

export default PokemonSelector;
