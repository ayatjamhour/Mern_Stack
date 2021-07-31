import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from '../components/Product';
import List from '../components/List';
import { Link } from '@reach/router';
const Details = (props) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct(res.data))
    }, [])
    return (
        <>
            <Link to={"/product/" + product._id + "/edit"}>
                Edit
            </Link>
            <div>
                <p>Title: {product.title}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
            </div>
        </>
    )
}
export default Details