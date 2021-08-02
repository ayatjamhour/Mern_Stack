// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import Product from '../components/Product';
// import { Link, navigate } from '@reach/router'
// import List from '../components/List';
// import Delete from './Delete';
// const Details = (props) => {
//     const [product, setProduct] = useState({})
//     useEffect(() => {
//         axios.get("http://localhost:8000/api/product/" + props.id)
//             .then(res => setProduct(res.data))
//     }, [props.id])
//     const afterDelete = () => {
//         navigate("/");
//     }

//     return (
//         <div>
//             <h1>{product.title}</h1>
//             <h3>Price: {product.price} $</h3>
//             <h3>Description: {product.description}</h3>
//             <div>
//                 <Link to="/product">
//                     <button type="submit">All Product</button>
//                 </Link>
//                 <Link to={"/product/edit/" + product._id}>
//                     <button type="submit">Edit</button>
//                 </Link>
//                 <Delete
//                     id={product._id}
//                     afterDeleteHandler={afterDelete}
//                 />
//             </div>
//         </div>
//     )
// }
// export default Details
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Delete from './Delete';

const Details = (props) => {
    const [product, setProduct] = useState([]);

    // use effect to get the data as soon as the component is rendered
    useEffect(() => {
        // use axios to get all movies from the backend server / API
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then((res) => {
                console.log(res.data);
                // set the new data in our state from the API - set State
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.id])

    const afterDelete = () => {
        navigate("/");
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <h3>Price: ${product.price}</h3>
            <h3>Description: {product.description}</h3>
            <div>
                <Link to="/product">
                    <button type="submit">All Products</button>
                </Link>
                <Link to={"/product/edit/" + product._id}>
                    <button type="submit">Edit</button>
                </Link>
                <Delete
                    id={product._id}
                    afterDeleteHandler={afterDelete}
                />
            </div>
        </div>
    )
}

export default Details;