import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
// import Navbar from './components/Navbar';
import HomePage from './pages/Homepage';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/index.html" component={HomePage} />
      </div>
      </Router>
  );
}

export default App;
