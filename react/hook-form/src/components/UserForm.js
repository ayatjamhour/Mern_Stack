import React, { useState } from "react";
import { Result } from "./Result"


const UserForm = (props) => {
    const [firstname, setFirstnamme] = useState("");
    const [lastname, setLastnamme] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    // const changeInput = (e) => {
    //     setFirstnamme(e.target.value)
    //     console.log(e);
    // }
    return (
        <div>
            <form >
                <div>
                    <label>First name: </label>
                    <input type="text" onChange={(e) => setFirstnamme(e.target.value)} />
                    {/* <input type="text" onChange={changeInput} /> */}
                </div>
                <div>
                    <label>Last name: </label>
                    <input type="text" onChange={(e) => setLastnamme(e.target.value)} />
                </div>

                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

            </form>
            <Result firstname={firstname} lastname={lastname} email={email} password={password} ConfirmPassword={ConfirmPassword} />


        </div >
    );
};

export default UserForm;