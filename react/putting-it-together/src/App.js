import logo from './logo.svg';
import './App.css';
import CardClick from './components/CardClick.js'
import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CardClick firstName={"Doe"} lastName={"Jane"} age={45} hairColor={"Black"} />
        <CardClick firstName={"Smith"} lastName={"John"} age={88} hairColor={"Brown"} />
        <CardClick firstName={"Fillmore"} lastName={"Millard"} age={50} hairColor={"Brown"} />
        <CardClick firstName={"Smith"} lastName={"Maria"} age={62} hairColor={"Brown"} />
      </div>
    );
  }
}

export default App;
