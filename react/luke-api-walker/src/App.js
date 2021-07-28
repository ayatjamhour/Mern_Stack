import './App.css';
import { Router } from '@reach/router';
import People from './components/People.js';
import Search from './components/Search.js';
import Planets from './components/Planets.js';
import StarShips from './components/StarShips.js'

function App() {
  return (
    <div className="App">
      <Search />
      <Router>
        {/* <Search path ="/" /> */}
        <Planets path="/planets/:id" />
        <People path="/people/:id" />
        <StarShips path="/starships/:id" />
      </Router>
    </div>
  );
}

export default App;