import Pokemon from "./components/Pokemon.js"
// import Display from "./components/Display.js"
// import PokemonLift from "./components/PokemonLift.js"
// import React, { useState } from 'react';
import './App.css';

function App() {
  // const [pokemon, setPokemon] = useState([])
  return (
    <div className="App">
      {/* <PokemonLift pokemon={pokemon} setPokemon={setPokemon} />
      <Display pokemon={pokemon} /> */}
      <Pokemon />
      {/* <Display  /> */}
    </div>
  );
}

export default App;
