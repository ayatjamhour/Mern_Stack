
// import React, { useState, useEffect, useRef } from "react"
// import axios from "axios"

// const PokemonLift = (props) => {
//     // const [pokemon, setPokemon ] = useState ("");
//     const { pokemon, setPokemon } = props
//     const [clicked, setClicked] = useState(false)

//     const onSubmit = e => {
//         if (clicked) {
//             setClicked(false)
//             setClicked(true)
//         }
//     }
//     // THIS BLOCK PREVENTS useEffect from running on initial page load
//     const useDidMount = (e, []) => {
//         const didMount = useRef(false); //useRef a hook that allows to directly create a reference to the DOM element in the functional component.
//         useEffect(() => {
//             if (didMount.current) e();
//             else didMount.current = true;
//         }, []);
//     }
//     useDidMount(() => {
//         axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807").then(response => {
//             let results = response.data.results.map(p => p.name)
//             setPokemon(results)
//         }).catch(err => { console.log(err) })
//     }, [clicked])



//     return (
//         <div style={{ marginTop: "80px" }}>
//             <div >
//                 <button onClick={onSubmit} >Fetch Pokemon</button>
//             </div>
//         </div>
//     )
// }

// export default PokemonLift
