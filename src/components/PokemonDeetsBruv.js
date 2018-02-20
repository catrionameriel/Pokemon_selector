import React from 'react'

const PokemonDeetsBruv = (props) => {

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1, string.length);
  }

  if(!props.pokemonDeets) return null;
  console.log(props);
  return (
    <div className="pokemon">
      <img src={props.pokemonDeets.sprites.front_shiny} alt={props.pokemonDeets.name}/>
      <p>Name: {capitalizeFirstLetter(props.pokemonDeets.name)}</p>
      <p>Weight: {props.pokemonDeets.weight}kg</p>
      <p>Height: {props.pokemonDeets.height}m</p>
    </div>
  )
}

export default PokemonDeetsBruv;
