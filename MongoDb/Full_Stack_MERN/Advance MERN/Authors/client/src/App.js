

import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import AllAuthor from './components/AllAuthor';
import Create from './Views/Create';
import Edit from './Views/Edit';

function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      <Router>
        {/* we can use loaded for a table */}
        <AllAuthor default path="/" />
        <Create path="/author/new" />
        <Edit path="/author/edit/:id" />
      </Router>
    </div>
  );
}

export default App;


