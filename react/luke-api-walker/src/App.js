import './App.css';
import { Router } from '@reach/router';
import People from './components/People';
import Search from './components/Search';
import Planets from './components/Planets';

function App() {
  return (
    <div className="App">
      <Search />
      <Router>
        {/* <Search path ="/" /> */}
        <Planets path="/planets/:id" />
        <People path="/people/:id" />
      </Router>
    </div>
  );
}

export default App;