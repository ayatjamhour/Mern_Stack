// import React from 'react';
// import Main from './views/Main';
// function App() {
//   return (
//     <div className="App">
//       <Main />
//     </div>
//   );
// }
// export default App;
//////////////////


import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import AllProduct from './views/AllProduct';
import Details from './views/Details';
// import Form from './components/Form';
import Edit from './views/Edit';
// import Main from './views/Main';



function App() {
  return (
    <div className="App">
       {/* <Main /> */}
      <Router>
       
        <AllProduct default path="/product" />
        <Details path="/product/:id" />
        <Edit path="/product/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
