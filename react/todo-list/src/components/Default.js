//##################################################################################
//without lifting
//##################################################################################
// import React, { useState } from 'react'
// import './list.css';

// const List = () => {

//     // const list = [{ name: name , checked: false }] ;
//     // const [todo, setTodo] = useState(list); // [{ name: "first", checked: false }]

//     /////////////////////////////////////////////////////////////////////////////////////////////////////

//     //init. value

//     const [todo, setTodo] = useState([]);
//     const [name, setName] = useState("")

//     /////////////////////////////////////////////////////////////////////////////////////////////////////

//     // add new

//     const newList = (e) => {
//         e.preventDefault();
//         setTodo(todo.concat({ name: name }));
//         setName("");
//     }

//     /////////////////////////////////////////////////////////////////////////////////////////////////////

//     // after click , if it checked line-through

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
//     /////////////////////////////////////////////////////////////////////////////////////////////////////
//     return (
//         <div style={{ margin: 90 }}>
//             <form onSubmit={newList}>
//                 <label  >add new</label>
//                 <input type="text" onChange={e => setName(e.target.value)} value={name} />
//                 {/* <textarea onChange={e => setName(e.target.value)} value={name} /> */}
//                 <button >Add !</button>
//             </form>

//             <div>{todo.map((item, index) => {
//                 return <div key={index}>
//                     {/* <p id="checked" style={{ textDecoration: item.yes ? "line-through" : "none" }}> {item.name}</p>
//                                 <input type="radio" name="my-input" id="no"></input>
//                                 <label for={item.checked} onClick={() => clickList(i)}>Yes</label>
//                                 <input type="radio" name="my-input" id="no"></input>
//                                 <label for={item.checked} onClick={() => clickList(i)}>No</label> */}
//                     <p style={{ textDecoration: item.checked ? "line-through" : "none" }}> {item.name}</p>
//                     <input type="checkbox" checked={item.checked} onClick={() => clickList(index)} />
//                     <button onClick={() => deleteList(index)} >Delete !</button>
//                 </div>
//             })
//             }
//             </div>

//         </div>
//     )
// }
// export default List;