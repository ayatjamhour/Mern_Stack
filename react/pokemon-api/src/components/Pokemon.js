import React,{useState} from 'react'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
 
    const Fetch =() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
            .catch(err => console.log("error"+err));
    };
 
    return (
        <>
        <button onClick={Fetch}>Fetch Pokemon</button>
        <div>
            { pokemon.map((p, index)=>{ //pokemon.length > 0 &&
                return (<div key={index}>{p.name}</div>)
            })}
        </div>
        </>
    );
}
export default Pokemon
///////////////

  
