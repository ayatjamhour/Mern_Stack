import axios from 'axios';
import React from 'react';

const Card = (props) => {
    const { className, productinfo } = props;

    const deleteUser = (e) => {
        axios.delete("http://localhost:8000/api/product/delete/" + productinfo._id)
            .then(res => console.log("-I- " + res))
            .catch(err => console.log("-E- " + err))
    }

    return (
        <div className={className}>
            <p>{"Title " + productinfo.title}</p>
            <p>{"Price: " + productinfo.price}</p>
            <p>{"Description: " + productinfo.Description}</p>
            <button onClick={deleteUser}>delete</button>
        </div>
    );
};
export default Card
