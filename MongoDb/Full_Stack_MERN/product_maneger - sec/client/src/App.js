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
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
// import Details from './views/Details';
import Edit from './views/Edit';
// import AllProduct from './views/AllProduct';
// import Card from './views/Card';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/product" />
        {/* <AllProduct path="/" /> 
        <Details path="/product/:id" /> */}
        {/* <Card path="/" /> */}
        <Edit path="/product/edit/:id" />
      </Router>
    </div>
  );
}
export default App;
