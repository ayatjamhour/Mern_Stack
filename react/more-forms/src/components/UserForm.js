import React, { useState } from 'react';

const UserForm = (props) => {
    const [FirstName, setFirstname] = useState("");
    const [FirstError, setFirstError] = useState("");
    const [LastName, setLastname] = useState("");
    const [LastError, setLastError] = useState("");
    const [email, setEmail] = useState("");
    const [EmailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [ConfirmPasswordError, setConfirmPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [PasswordError, setPasswordError] = useState("");
    // const [newmessage, setMessage] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { FirstName, LastName, email, password, ConfirmPassword };
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };
    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };
    // const firstChange = (e) => {
    //     setFirstname(e.target.value);
    //     setFirstError("First name is should be more than 2 char");
    //     if (e.target.value.length > 2) {
    //         setFirstError("");
    //     }
    // };
    const firstChange = (e) => {
        if (e.target.value.length < 2 && e.target.value.length !== 0) {
            setFirstError("First name is should be more than 2 char");
        }
        else {
            setFirstError("");
        }
    };
    // const lastChange = (e) => {
    //     setLastname(e.target.value);
    //     setLastError("Last name should be more than 2 char");
    //     if (e.target.value.length > 2) {
    //         setLastError("");
    //     }
    // };
    const lastChange = (e) => {
        if (e.target.value.length < 2 && e.target.value.length !== 0) {
            setLastError("Last name should be more than 2 char");
        }
        else {
            setLastError("");
        }
    };
    // const emailChange = (e) => {
    //     setEmail(e.target.value);
    //     setEmailError("Email should be more than 5 char");
    //     if (e.target.value.length > 5) {
    //         setEmailError("");
    //     }
    // };
    const emailChange = (e) => {
        if (e.target.value.length < 5 && e.target.value.length !== 0) {
            setEmailError("Email should be more than 5 char");
        }
        else {
            setEmailError("");
        }
    };
    const passwordChange = (e) => {
        // setPassword(e.target.value);
        // setPasswordError("password must be more than 5 char");
        // if (e.target.value.length > 5) {
        //     setPasswordError("");
        //////////////////////////////////////////////////////////////////////
        if (e.target.value.length < 8 && e.target.value.length !== 0) {
            setPasswordError("password must be more than 8 char");
            // setPassword = e.target.value;
        }
        else {
            setPasswordError("");
        }
    };
    const confpasswordChange = (e) => {
        // setConfirmPassword(e.target.value);
        //  if(e.target.value.pasw !==e.target.value.pasc)
        //  if (pasc!=pasw)
        if (e.target.value !== password) {
            setConfirmPasswordError("password and Confirmation did not match");
        }
        else {
            setConfirmPasswordError("");
        }
    };
    //////////////////////////////////////////////////////////////////////////////////////////
    //     const message = () => {
    //         return isSubmited ?
    //             "Thank you for submiting" :
    //             "Please Submit the form";
    //     }
    // };


    return (
        <div>
            <form onSubmit={createUser}>
                <h3>{formMessage()}</h3>
                <div>
                    <label>First name: </label>
                    <input type="text" onChange={firstChange} /> <p>{FirstError}</p>
                    {/* <input type="text" onChange={changeInput} /> */}
                </div>
                <div>
                    <label>Last name: </label>
                    <input type="text" onChange={lastChange} /> <p>{LastError}</p>
                </div>

                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={emailChange} /> <p>{EmailError}</p>
                </div>

                <div>
                    <label>Password: </label>
                    <input type="password" onChange={passwordChange} /><p>{PasswordError}</p>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={confpasswordChange} /><p>{ConfirmPasswordError}</p>
                </div>
                <input type="submit" value="Create User" />
            </form >
        </div >
    );
}


export default UserForm;


