import './App.css';
import React, { useState } from 'react';
import List from './components/List.js';


function App(props) {
  const [currentTodo, setCurrentTodo] = useState(" ");
  // const list = [{ name: name , checked: false }] ;
  // const [todo, setTodo] = useState(list); // [{ name: "first", checked: false }]

  /////////////////////////////////////////////////////////////////////////////////////////////////////

  //init. value

  const [todo, setTodo] = useState([{ name: "first", checked: false }]); //we can put it as asomething old in todolist const [todo, setTodo] = useState(list); // [{ name: "first", checked: false }]
  const [name, setName] = useState("")

  /////////////////////////////////////////////////////////////////////////////////////////////////////

  // add new

  const newList = (e) => {
    e.preventDefault();
    setTodo(todo.concat({ name: name }));
    setName("");
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////

  // after click , if it checked line-through

  const clickList = (e) => {
    const newLists = [...todo];
    newLists[e].checked = !newLists[e].checked;
    // newLists[e].yes = !newLists[e].yes;
    // alert("good job");
    setTodo(newLists);
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////

  // after click "delete ", alert and delete

  const deleteList = (e) => {
    const newLists = [...todo];
    // newLists.delete(e);
    newLists.splice(e, 1);
    alert("delete it !");
    setTodo(newLists);

  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  const checked = (e) => {


  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  const onSubmit = (e) => {
    setCurrentTodo(e);

  }
  return (

    <div className="App">
      <div style={{ margin: 90 }}>
        <form onSubmit={newList}>
          <label  >add new</label>
          <input type="text" onChange={e => setName(e.target.value)} value={name} />
          {/* <textarea onChange={e => setName(e.target.value)} value={name} /> */}
          <button >Add !</button>
        </form>
      </div>
      <div>{todo.map((todo, index) => {
        return (
          <List todo={currentTodo} onSubmit={onSubmit} key={index} index={index} delete={deleteList} click={clickList} chacked={checked} />
        );
      })}</div>





    </div>

  );
}

export default App;
