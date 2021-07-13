import logo from './logo.svg';
import './App.css';
import PersonCardComponent from './components/PersonCardComponent.js'
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PersonCardComponent firstName={"Doe"} lastName={"Jane"} age={45} hairColor={"Black"} />
        <PersonCardComponent firstName={"Smith"} lastName={"John"} age={88} hairColor={"Brown"} />
        <PersonCardComponent firstName={"Fillmore"} lastName={"Millard"} age={50} hairColor={"Brown"} />
        <PersonCardComponent firstName={"Smith"} lastName={"Maria"} age={62} hairColor={"Brown"} />
      </div>
    );
  }
}

export default App;
