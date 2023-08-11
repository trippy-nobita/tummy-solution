import React from 'react';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Home from './screens/Home';


import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import Login from './screens/Login';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element= {<Home/>}  />
          <Route exact path="/login" element= {<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
