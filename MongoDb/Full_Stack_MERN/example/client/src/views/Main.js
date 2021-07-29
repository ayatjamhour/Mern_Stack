
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// export default () => {
//     const [message, setMessage] = useState("Loading...")
//     useEffect(() => {
//         axios.get("http://localhost:8000/api")
//             .then(res => setMessage(res.data.message))
//     }, []);
//     return (
//         <div>
//             <h2>Message from the backend: {message}</h2>
//         </div>
//     )
// }
import React, { useEffect, useState } from 'react';
import PersonForm from '../components/PersonForm';
const Main = () => {
    return (
        <div>
            <PersonForm />
        </div>
    )
}
export default Main
