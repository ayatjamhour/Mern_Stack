// import React from 'react'
// import Details from '../views/Details';
// import Product from '../components/Product';
// import axios from 'axios';
// const List = (props) => {
//     return (
//         <div>
//             {props.products.map((product, index) => {
//                 return <p key={index}>{product.title}, {product.price} , {product.description}</p>
//             })}
//         </div>
//     )
// }
// export default List
import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
const List = (props) => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
        <div>
            {props.product.map((product, idx) => {
                return <p key={idx}>
                    <Link to={"/" + product._id}>
                        {product.title}, {product.price}
                    </Link>
                    |
                    <button onClick={(e) => { deleteProduct(product._id) }}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}
export default List