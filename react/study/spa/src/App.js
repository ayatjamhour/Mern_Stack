import React from 'react';
import { Router } from '@reach/router';
import LoginComponent from './components/LoginComponent.js';
import DashboardComponent from './components/DashboardComponent.js';
function App() {
  return (
    <div className="App">
        <Router>
            <LoginComponent path="/login"/>
            <DashboardComponent path="/dashboard"/>
        </Router>
    </div>
  );
}
export default App;