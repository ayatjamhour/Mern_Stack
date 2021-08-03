// import React from 'react';
import { Link, navigate } from '@reach/router';
import React, { useState } from 'react';

const Form = (props) => {
    const { author, setAuthor, errors, setError, handleSubmit } = props; //, onSubmitProp 
    const [name, setName] = useState("");
    // const [author, setAuthor] = useState("");
    // const [errors, setErrors] = useState("");


    const autherChange = (e) => {
        let newAuthor = {
            ...author,
            [e.target.name]: e.target.value
        };
        setAuthor(newAuthor);
    }
    // const onSubmitHandler = (e) => {
    //     e.preventDefault();
    //     onSubmitProp({
    //         name : "" ,

    //     })
    // }


    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)} >
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={author.name}
                        onChange={(e) => autherChange(e)}
                    />
                     <p style ={{color : "red"}}>
                    {
                        errors.name ?
                            <span className="error">{errors.name.message}</span> : null
                    }
                    </p>
                </div>

                <Link to={"/"}>
                    <button type="submit" className="btn1">Cancel</button>
                </Link>
                <button type="submit" className="btn2">Submit</button>
            </form>

        </div>
    )
}

export default Form;