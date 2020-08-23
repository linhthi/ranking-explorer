import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
// import Navbar from './components/Navbar';
import HomePage from './pages/Homepage';
import Post from './components/Post';
import { AppProvider } from './ContextApp/context';

function App() {
  return (
    <Router>
      <AppProvider>
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/index.html" component={HomePage} />
        <Route path="/list_feed/:id/:timestamp" component={HomePage} />
      </div>
      </AppProvider>
      </Router>
  );
}

export default App;
