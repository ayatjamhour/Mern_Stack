import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Planets from './Planets'

const People = (props) => {
    const [people,setPeople]=useState('')
    const [planets,setPlanet]=useState('')
    const [err,setError]=useState('')
    useEffect(()=>{
        axios.get("https://swapi.dev/api/people/"+props.id)
        .then((res)=>setPeople(res.data))
        .catch((err)=>setError (err + " " ))
    },[props.id])
    useEffect(()=>{
        axios.get("https://swapi.dev/api/planets/"+props.id)
        .then((res)=>setPlanet(res.data))
        .catch((err)=>console.log("error"))
    })
    return (
        <div>
            <div style={{color :"red"}}>
                <h1>{err}</h1>
            </div>
            <h1>{people.name}</h1>
            <ul style={{listStyleType :"none"}}>
            <li>Height: <span style ={{color :"red"}}>{people.height}</span></li>
            <li>planet : <span style ={{color :"red"}}>{planets.name}</span></li>
            <li>Mass: <span style ={{color :"red"}}>{people.mass}</span></li>
            <li>Hair Color: <span style ={{color :"red"}}> {people.hair_color}</span></li>
            <li>Skin Color: <span style ={{color :"red"}}>{people.skin_color}</span></li>
            </ul>
            
        </div>
    )
}

export default People;