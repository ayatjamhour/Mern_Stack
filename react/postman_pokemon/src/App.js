import Pokemon from './components/Pokemon';
// import React, { useState } from 'react';
import './App.css';
// import PokemonFetch from "./components/PokemonFetch.js"
// import Display from "./components/Display.js"


function App() {
  // const [pokemon, setPokemon] = useState([])

  return (
    <div className="App container">
      <Pokemon />
      {/* <PokemonFetch pokemon={pokemon} setPokemon={setPokemon} />
      <Display pokemon={pokemon} /> */}
    </div>
  );
}

export default App;
