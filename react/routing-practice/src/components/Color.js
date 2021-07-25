import React from 'react'

const Color = (props) => {
    return (
        <div style={{background:props.bcolor , width : "700px" , display:"flex" ,paddingLeft : " 450px"}}> 
        {/* , display:"flex" ,textAlign: "center" */}
            <h2 style={{color:props.fcolor }}>The Word Is : {props.word}</h2>
        </div>
    )
}

export default Color