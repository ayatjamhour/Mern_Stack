// import React from 'react';
import React from 'react';
// , { Component } from 'react';

class PersonCardComponent extends React.Component {
    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div>
                <h2>{firstName} , {lastName}</h2>
                <p>age : {age}</p>
                <p>hair color : {hairColor}</p>
            </div>
        );
    }
}
export default PersonCardComponent;