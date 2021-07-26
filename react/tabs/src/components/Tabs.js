import React, { useState } from 'react'
import './Style.css';
import "./Style.js";
import "./Content.js";
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';


const Tabs = (props) => {
    // const tabs =["tab1" , "tab2","tab3"] ;
    // const [msg, setMsg] = useState({
    //     msg: 1    });

    const [state, setState] = useState({
        tab: 1
    });
    // const [state1, setState1] = useState({
    //     tab: 0
    // });
    // const clickHandler = (e, value , i) => {
    //     e.preventDefault();
    //     setState(value + "was taped");
    const onClick = (e, value) => {
        e.preventDefault();
        setState({
            tab: value
        });

        // if (e.target.value.tab === 0) {
        //     setState("please click on the buttom");
        // }
        // else {
        // setState({
        //     tab: value
        // });
        // }
    };
    return (
        <center>
            <h1 >Tabs</h1>
            {/* without return for "map", we didn't have {} */}
            {/* {[0].map((val, index) =>
                <button key={index} onClick={e => onClick(e, 0)} selectTabs={state1.tab === val} >
                    tab{val} {/*  value from array 1 2 3 .... */}
            {/* </button> */}
            {/* )} */}
            {/* <content1 > */}

            {/* </content1> */}
            {/* {tabs.map((value, index) => */}
            {[1, 2, 3].map((value, index) =>
                //return <p key={index}>{value}</p>
                <button key={index} onClick={e => onClick(e, value)} selectTabs={state.tab === value} >
                    tab{value} {/*  value from array 1 2 3 .... */}
                </button>
                //     return<button key={index} onClick={(e) => clickHandler(e, value , index)} selectTabs={state.tab === value} >
                //     tab{value} {/*  value from array 1 2 3 .... */}
                // </button>
                // <Button variant="outlined">Default</Button>
            )}
            {/* <p>{msg}</p> */}
            <content style={{
                display: "flex", justifyContent: "center",
                alignItems: 'center', border: "black solid", width: 200, marginTop: 40, padding: 120
            }}>
                Tab {state.tab} content is showing here
            </content>


        </center>
    )
}

export default Tabs;
