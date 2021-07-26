import React from 'react';
const Box = (props) => {
    ///////////////////////////////////////
    // style , we can put it inside css and import it 
    ///////////////////////////////////////
    const styles = {
        backgroundColor: props.value.color,
        width: parseInt(props.value.length), //User enters it 
        height: parseInt(props.value.length), //User enters it
        // flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'


    };
    ///////////////////////////////////////

    return (

        <div style={styles} ></div>

    );
}

export default Box;