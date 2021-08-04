import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import Form from './Form';
// import FinalHead from './Views/FinalHead';

const AddPlayer = (props) => {
    const { player, setPlayer } = props;
    const [errors, setErrors] = useState([]);

    const [newPlayer, setNewPlayer] = useState({
        name: "",
        position: "",
        status: {
            game1: 0,
            game2: 0,
            game3: 0,
        }
    });

    const addNewPlayer = (newPlayer) => {
        axios.post(`http://localhost:8000/api/player`, newPlayer)
            .then(res => {
                setPlayer([ ...player, res.data, navigate(`/players/list`)
                ])
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                // for (var key of Object.keys(errorResponse)) {
                //     errorArr.push(errorResponse[key].message) // array of an error 
                // }
                setErrors(errorArr)
            })
    }

    return (
        <div>
            {/* <FinalHead /> */}
            <div>
                <h3>Add Player</h3>
                <Form newPlayer={newPlayer}
                    setNewPlayer={setNewPlayer}
                    onSubmit={addNewPlayer} />
                {errors.map((err, index) => <p key={index}>{err}</p>)}
            </div>
        </div>
    )
}
export default AddPlayer