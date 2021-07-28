
import React, { useState } from 'react'
import { navigate } from '@reach/router'

const Search = () => {
    const [choice, setChoice] = useState("people");
    const [id, setId] = useState(1);
    const clickSearch = (e) => {
        e.preventDefault();
        // navigate(`/:choice/:id`);
        navigate(`/${choice}/${id}`);
    }
    return (
        <div >
            <h1>search for person or planet</h1>
            <form onSubmit={clickSearch} style={{ marginTop :"50px"}}>
               <h3>Search for :</h3>
                <select onChange={(e) => setChoice(e.target.value)} style={{background :"lightblue" , marginLeft :"3px"}}>
                <option value=" ">  </option>
                <option value="starships">Star Ship</option>
                    <option value="people">People</option>
                    <option value="planets">Planet</option>
                </select>
                <h3>ID :</h3> <input type="number" onChange={(e) => setId(e.target.value)} style={{ marginLeft :"3px"}} />
                <button type="submit" style={{background :"lightgray" , marginLeft :"10px"}}  >Search</button>
            </form>
        </div>
    )
}

export default Search