import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import Form from './Form';
import FinalHead from './Views/FinalHead';

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

    const addNewPlayer = (newPlayers) => {
        axios.post(`http://localhost:8000/api/player`, newPlayers)
            .then(res => {
                setPlayer([
                    ...player,
                    res.data,
                    navigate(`/players/list`)
                ])
            })
            .catch(err => {
                const errorRes = err.response.data.errors;
                const errorArr = [];
                for (var key of Object.keys(errorRes)) {
                    errorArr.push(errorRes[key].message)
                }
                setErrors(errorArr)
            })
    }

    return (
        <div>
            <FinalHead />
            <div>
                <h3>Add Player</h3>
                <Form newPlayer={newPlayer}
                    setNewPlayer={setNewPlayer}
                    onSubmitProp={addNewPlayer} />
                {errors.map((err, index) => <p key={index}>{err}</p>)}
            </div>
        </div>
    )
}
export default AddPlayer