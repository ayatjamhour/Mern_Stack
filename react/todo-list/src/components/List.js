import React, { useState } from 'react'
import './list.css';


const List = (props) => {

    // // const list = [{ name: name , checked: false }] ;
    // // const [todo, setTodo] = useState(list); // [{ name: "first", checked: false }]

    // /////////////////////////////////////////////////////////////////////////////////////////////////////

    // //init. value

    // const [todo, setTodo] = useState([]); //we can put it as asomething old in todolist const [todo, setTodo] = useState(list); // [{ name: "first", checked: false }]
    // const [name, setName] = useState("")

    // /////////////////////////////////////////////////////////////////////////////////////////////////////

    // // add new

    // const newList = (e) => {
    //     e.preventDefault();
    //     setTodo(todo.concat({ name: name }));
    //     setName("");
    // }

    // /////////////////////////////////////////////////////////////////////////////////////////////////////

    // // after click , if it checked line-through

    // const clickList = (e) => {
    //     const newLists = [...todo];
    //     newLists[e].checked = !newLists[e].checked;
    //     // newLists[e].yes = !newLists[e].yes;
    //     // alert("good job");
    //     setTodo(newLists);
    // }
    // /////////////////////////////////////////////////////////////////////////////////////////////////////

    // // after click "delete ", alert and delete

    // const deleteList = (e) => {
    //     const newLists = [...todo];
    //     // newLists.delete(e);
    //     newLists.splice(e, 1);
    //     alert("delete it !");
    //     setTodo(newLists);

    // }
    // /////////////////////////////////////////////////////////////////////////////////////////////////////
    // return (
    // <div style={{ margin: 90 }}>
    //     <form onSubmit={newList}>
    //         <label  >add new</label>
    //         <input type="text" onChange={e => setName(e.target.value)} value={name} />
    //         {/* <textarea onChange={e => setName(e.target.value)} value={name} /> */}
    //         <button >Add !</button>
    //     </form>

    // <div>{todo.map((item, index) => {
    return (
        <div key={props.index}>

            <p style={{ textDecoration: props.todo.checked ? "line-through" : "none" }}> {props.todo}</p>
            <input type="checkbox" checked={props.todo.checked} onClick={() => props.clickList(props.index)} />
            <button onClick={() => props.deleteList(props.index)} >Delete !</button>
        </div>
    )
}
// </div>

// </div>


export default List;