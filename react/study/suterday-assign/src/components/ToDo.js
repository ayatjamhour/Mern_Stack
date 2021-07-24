// import React from 'react'

// const ToDo = (props) => {
//     return (
//         <div>
//             <p> {props.task} </p>
//         </div>
//     )
// }

// export default ToDo;
  
import React from "react";
import "./AddItem.css";

export default class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.props.clickHandler;
    }

    render() {
        return (
            <p className="addItem" onClick={this.clickHandler}>Add a Task</p>
        );
    }
}