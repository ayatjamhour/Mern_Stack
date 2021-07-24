import React,{useState} from 'react'
import axios from 'axios';

const Pokemon = () => {
    const [people, setPeople] = useState([]);
 
    const Fetch =() => {
        // fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        //     .then(response => response.json())
        //     .then(response => setPeople(response.results))
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            //"https://pokeapi.co/api/v2/pokemon
            .then(response=>{setPeople(response.data.results)})
    };
 
    return (
        <>
        <button onClick={Fetch}>press to fetch</button>
        <div>
            {people.length > 0 && people.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })}
        </div>
        </>
    );
}
export default Pokemon
///////////////
  
