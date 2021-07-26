import React,{useState,useEffect} from 'react'
import axios from 'axios'

const People = (props) => {
    const [people,setPeople]=useState('')
    useEffect(()=>{
        axios.get("https://swapi.dev/api/people/"+props.id)
        .then((res)=>setPeople(res.data))
        .catch((err)=>console.log(err))
    },[props.id])
    return (
        <div>
            <h1>{people.name}</h1>
            <ul style={{listStyleType :"none"}}>
            <li>Height: <span style ={{color :"red"}}>{people.height}</span></li>
            <li>Mass: <span style ={{color :"red"}}>{people.mass}</span></li>
            <li>Hair Color: <span style ={{color :"red"}}> {people.hair_color}</span></li>
            <li>Skin Color: <span style ={{color :"red"}}>{people.skin_color}</span></li>
            </ul>
        </div>
    )
}

export default People;