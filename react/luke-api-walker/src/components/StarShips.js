import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Planets = (props) => {
    const [starships,setStar]=useState("")
    // const [name,setName]=useState("")

    useEffect(()=>{
        axios.get("https://swapi.dev/api/starships/" +props.id)
        .then((res)=>setStar(res.data))
        .catch((err)=>console.log(err))
    },[props.id])
    return (
        <div>
            <h1>{starships.name}</h1>
            <ul style={{listStyleType :"none"}}>
           <li>manufacturer:<span style ={{color :"red"}}>{starships.manufacturer}</span> </li>
            <li>capacity: <span style ={{color :"red"}}>{starships.cargo_capacity}</span></li>  
            <li>Edit : <span style ={{color :"red"}}>{starships.edited}</span></li>
            </ul>

        </div>
    )
}

export default Planets