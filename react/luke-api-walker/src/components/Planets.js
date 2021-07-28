import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Planets = (props) => {
    const [planet, setPlanet] = useState("")
    const [err, setError] = useState('')

    // const [name,setName]=useState("")

    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/" + props.id)
            .then((res) => setPlanet(res.data))
            .catch((err) => setError(err + " "))
    }, [props.id])
    return (
        <div>
            <div style={{ color: "red" }}>
                <h1>{err}</h1>
            </div>
            <h1>{planet.name}</h1>
            <ul style={{ listStyleType: "none" }}>
                <li>Climate:<span style={{ color: "red" }}>{planet.climate}</span> </li>
                <li>Terrain: <span style={{ color: "red" }}>{planet.terrain}</span></li>
                <li>Surface Water:<span >{(planet.surface_water == 1) ? <span style={{ color: "green" }}>True</span> : <span style={{ color: "red" }}>False</span>}</span> </li>
                <li>Population: <span style={{ color: "red" }}>{planet.population}</span></li>
            </ul>

        </div>
    )
}

export default Planets