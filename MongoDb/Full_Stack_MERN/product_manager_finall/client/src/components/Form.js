
import React, { useState } from 'react';
import axios from 'axios';
// import { navigate } from '@reach/router';

const Form = (props) => {
    const { product, setProduct , products , setProducts ,  submitButton, handleSubmit } = props; // errors,setErrors
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const productChange = (e) => {
        let newProduct = { ...product, [e.target.name]: e.target.value }; //[e.target.title]
        setProduct(newProduct);

    }
    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you !";
        } else {
            return "Welcome, please add product";
        }
    };
    return (
        <div>
            <h1>{formMessage()}</h1>
            <form onSubmit={(e) => handleSubmit(e)} >
                <div>
                    <label>Title  :</label>
                        <input type="text" name="title" value={product.title} onChange={(e) => productChange(e)} />
                        <p></p>
                </div>
                <div>
                    <label>Price  :</label>
                        <input type="number"  name="price"  value={product.price} onChange={(e) => productChange(e)} />
                </div>
                <div>
                    <label>Description:</label>
                        <input type="text" name="description" value={product.description} onChange={(e) => productChange(e)} />
                </div>
                <button type="submit" className="submit" style ={{ marginBottom  :"100px"}}>{submitButton}</button>
            </form>
            
        </div>
    //     const [title, setTitle] = useState("");
    // const [error, setError] = useState("");
    // const [titleError, setTitleError] = useState("");
    // const [price, setPrice] = useState();
    // const [priceError, setPriceError] = useState("");
    // const [description, setDescription] = useState("");
    // const [descriptionError, setDescriptionError] = useState("");

    // const priceErrMesgs = {
    //     empty: "price cannot be empty",
    //     minPrice: "price cannot be less than 5"
    // };

    // const titleErrMesgs = {
    //     empty: "title cannot be empty",
    //     minLength: "cannot be less than 3 char"
    // };
    // const descErrMesgs = {
    //     empty: "desc cannot be empty",
    //     mindesc: "cannot be less than 3 char"
    // };

    // const submitErrMesgs = {
    //     noSubmit: "Please fix the errors above before submitting the form"
    // };
    // //handler when the form is submitted
    // const CreateProduct = e => {
    //     //prevent default behavior of the submit
    //     e.preventDefault();
    //     if (titleChange(title) && priceChange(price) && descChange(description)) {
    //         const newProduct = { title: title, price: price, description: description };
    //         //make a post request to create a new product
    //         axios.post('http://localhost:8000/api/product', {
    //             title,
    //             price,
    //             description
    //         })
    //             .then(res => console.log(res))
    //             .catch(err => {

    //                 const errormsg = err.response.data.error.errors.title.message + ", "
    //                     + err.response.data.error.errors.price.message + ","
    //                     + err.response.data.error.errors.description.message;
    //                 setError(errormsg);
    //             })
    //     } else {
    //         setError(submitErrMesgs.noSubmit);
    //     }
    //     // const newUser = { title, price, description };
    //     // setTitle("");
    //     // setPrice("");
    //     // setDescription("");
    //     // console.log("Welcome", newUser);
    //     // setHasBeenSubmitted(true);

    // };


    // const titleChange = (value) => {
    //     setError(value);
    //     if (value.length < 0) {
    //         // setTitleError(titleErrMesgs.empty);
    //         return false;
    //     } else if (value.length < 3) {
    //         // setTitleError(titleErrMesgs.minLength);
    //         return false;
    //     } else {
    //         setTitleError("");
    //         return true;
    //     }
    // };
    // const priceChange = (value) => {
    //     setPriceError(value);
    //     if (value.length < 1) {
    //         setPriceError(priceErrMesgs.empty);
    //         return false;
    //     } else if (!isNaN(value) && parseInt(value) < 5) {
    //         setPriceError(priceErrMesgs.minPrice);
    //         return false;
    //     } else {
    //         setPriceError("");
    //         return true;
    //     }
    // };
    // const descChange = (value) => {

    // };
    // const titleChange = (e) => {
    //     if (e.target.value.length < 5 && e.target.value.length !== 0) {
    //         setTitleError("Title should be more than 3 char");
    //     }
    //     else {
    //         setTitleError("");
    //     }
    // }



   
        //         <div style={{ marginLeft: "666px" }}>
        //             <h3>{formMessage()}</h3>
        //             <h1>Product Manager</h1>
        //             <form onSubmit={CreateProduct}>
        //                 <div>
        //                     <label>Title  : </label>
        //                     <input type="text" onChange={(e) => titleChange(e.target.value)} />
        //                     <p style={{ color: 'red' }}>{titleError}</p>
        //                 </div> <br />
        //                 <div>
        //                     <label>Price  : </label>
        //                     <input type="number" onChange={(e) => priceChange(e.target.value)} /> <p style={{ color: 'red' }}>{priceError}</p>
        //                 </div><br />
        //                 <div>
        //                     <label>description :</label>
        //                     <input type="textArea" onChange={(e) => descChange(e.target.value)} /><p style={{ color: 'red' }}>{descriptionError}</p>
        //                 </div><br />

        //                 <input type="submit" value="create" />
        //             </form>
        //         </div>
    )
}

export default Form;