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
import Detail from './views/Details';
import Card from './views/Card';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/product" />
        <Detail path="/product/:id" />
        <Card path="/product/delete/:id" />
      </Router>
    </div>
  );
}
export default App;
