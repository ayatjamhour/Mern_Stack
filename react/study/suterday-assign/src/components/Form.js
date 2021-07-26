
// // import React, { useState } from 'react';

// // const Form = (props) => {
// //     const [todo, setTodo] = useState([]);
// //     const [doing, setDoing] = useState();
// //     const [done, setDone] = useState({});
// //     const [name, setName] = useState("");
// //     const [like, setLike] = useState({});
// //     const [tips, setTips] = useState({});


// //     const onSubmit = (e, value) => {
// //         e.preventDefault();
    // addNew , inside app we should addNew inside it put [... ] , doing and finish 
   //app // doing بحط جواها فيلتر setDoing.status = "doing"
    //setDoing([...doingTasks , doingTasks])
    //toDo.filter ((eachTask)=>{return eachTask.taskName !== doingTask.taskNmae})
    //setToDoTasks(newTaskArr)}
    //done بنعمل نيو ارر
// //         setTodo(todo.concat({ name: name }));
// //         setName("");
// //         props.tasks(value);
// //     }
// //     const doingList = (e) => {
// //         const newLists = [...todo];
// //         setDoing(newLists);
// //     }
// //     return (
// //         <>

// //             <div style={{ margin: 90 }}>
// //                 <form onSubmit={onSubmit}>
// //                     <label  >add new</label>
// //                     <input type="text" onChange={e => setName(e.target.value)} value={name} />
// //                     <button >Add !</button>
// //                 </form>

// //                 <div>{todo.map((item, index) => {
// //                     return <div key={index}>
// //                         {/* <p > {item.name}</p> */}
// //                         <form onSubmit={doingList}>
// //                             <p > {item.name}</p> header={value.taskName}
// //                             <button onClick={() => doingList(index)} >Start Doing</button>

// //                         </form>
// //                     </div>
// //                 })
// //                 }
// //                 </div>
// //             </div>
// //         </>
// //     )
// // }

// // export default Form
// import React from "react";
// import ListItem from '../shared-components/ListItem/ListItem';
// import ToDo from "./ToDo.js";





// const Form = (props) => {
//     constructor(props) {
//         super(props);
//         this.task_list = this.props.task_list;
//         this.createListItem = this.createListItem.bind(this);
//     }

//     createListItem() {
//         this.props.newTaskHandler("Add description");
//     }

//     render() {
//         console.log(this.task_list);
//         return (
//             <div className='toDo'>
//                 <div className="toDo-header">
//                     <h3>Tasks</h3>
//                 </div>
//                 <ul className="toDo-list">
//                     {this.props.task_list.map((item) => {
//                         return <ListItem description={item.description} key={"todo_"+ item.id}  id={item.id} onDescpChange={this.props.onDescpChange} clickHandler={null}/>
//                     })}

//                     <AddItem clickHandler={this.createListItem}/>
//                 </ul>

//             </div>
//         );
//     }
// }

// export default ToDo;
