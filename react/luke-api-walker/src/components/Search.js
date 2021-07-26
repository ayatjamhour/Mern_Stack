
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
            <form onSubmit={clickSearch} style={{ marginTop :"100px"}}>
                <select onChange={(e) => setChoice(e.target.value)} style={{background :"lightblue" , marginLeft :"10px"}}>
                <option value=" ">  </option>
                    <option value="people">People</option>
                    <option value="planets">Planet</option>
                </select>
                <input type="number" onChange={(e) => setId(e.target.value)} style={{ marginLeft :"10px"}} />
                <button type="submit" style={{background :"lightgray" , marginLeft :"10px"}}  >Search</button>
            </form>
        </div>
    )
}

export default Search