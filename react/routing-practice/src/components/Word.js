import React from 'react'
import { Link } from '@reach/router';


const Word = (props) => {
    return (
        <>
            <h2 style={{ display: "flex", width: "650px", paddingLeft: " 580px" }} >{props.word}</h2>
            <Link to="/" >EMPTY</Link>
        </>

    )
}

export default Word