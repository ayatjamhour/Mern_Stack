
// import React, { useState } from 'react'
// // import List from './List.js';
// import './list.css';


// const Display = (props) => {
//     const [todo, setTodo] = useState([]); //we can put it as asomething old in todolist const [todo, setTodo] = useState(list); // [{ name: "first", checked: false }]
//     const [name, setName] = useState("")
//     const clickList = (e) => {
//         const newLists = [...todo];
//         newLists[e].checked = !newLists[e].checked;
//         // newLists[e].yes = !newLists[e].yes;
//         // alert("good job");
//         setTodo(newLists);
//     }
//     /////////////////////////////////////////////////////////////////////////////////////////////////////

//     // after click "delete ", alert and delete

//     const deleteList = (e) => {
//         const newLists = [...todo];
//         // newLists.delete(e);
//         newLists.splice(e, 1);
//         alert("delete it !");
//         setTodo(newLists);

//     }
//     return (
//         <div >
//             <pre>{props.todo}</pre>
//         </div>
//     )
// }



// export default Display;
