import React, { useState } from 'react';
import { Router } from '@reach/router';
import './App.css';
import List from './Views/List';
import AddPlayer from './components/AddPlayer';
import Status from './components/Status';
import Header from './components/Header';
// import * from './components' ;

function App() {
  const [player, setPlayer] = useState([]);
  return (
    <div className="App">
      <Header />
      <hr />
      <Router>
        <List path="players/list" player={player} setPlayer={setPlayer} />
        <AddPlayer path="players/addplayer" player={player} setPlayer={setPlayer} />
        <Status path="/status/game/:gameId" player={player} setPlayer={setPlayer} />
      </Router>
    </div>
  );
}

export default App;









