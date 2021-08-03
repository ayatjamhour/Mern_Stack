import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from './Button';
import '../styles/PlayerTable.module.css'
import HeadGame from './Viwes/HeadGame';

const Status = (props) => {
    const { player, setPlayer, gameId } = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/player`)
            .then(res => setPlayer(res.data));
    }, [])
    return (
        <div>
            <h1>Player Status - Game {gameId}</h1>
            <HeadGame />
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td><h2>Players</h2></td>
                            <td><h2>Actions</h2></td>
                        </tr>
                        {player.map((play, index) =>
                            <tr key={index}>
                                <td>{play.name}</td>
                                <td>
                                    <Button playerId={play._id} gameId={gameId} />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Status