import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import ContactsList from './components/ContactsList';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../src/components/styles.css'
import Edit from './components/Edit';

export default function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <div className='homeMain'>
            <Form />
            <ContactsList />
            </div>
          </Route>
          <Route path="/edit/:id" component={Edit}>
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




// function App() {
//   return (
//     <div className="App">
//       <div >
//         <Form />
//         <ContactsList/>
        
//         </div>
//     </div>
//   );
// }

// export default App;
