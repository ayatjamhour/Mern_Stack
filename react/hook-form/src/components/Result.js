import React from 'react';
export const Result = (props) => {

    return (
        <div> <h1>your form data </h1>
            <h2>First Name : {props.firstname} </h2>
            <h2>Last Name :  {props.lastname}</h2>
            <h2>Email : {props.email}</h2>
            <h2>Password : {props.password}</h2>
            <h2>Confirm Password : {props.ConfirmPassword}</h2>
        </div>
    );
};
export default Result;