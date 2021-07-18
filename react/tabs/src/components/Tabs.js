import React, { useState } from 'react'
import './Style.css';
import  "./Style.js";
import  "./Content.js";




const Tabs = (props) => {
    const [state, setState] = useState({
        // tab: 0
        tab: 1
    });

    const onClick = (e, value) => {
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
        {[1, 2, 3].map((value, index) =>
            <button key={index} onClick={e => onClick(e, value)} selectTabs={state.tab === value} >
                tab{value} {/*  value from array 1 2 3 .... */}
            </button>
        )}
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
