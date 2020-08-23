import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import { AppProvider } from './ContextApp/context';

function App() {
  return (
    <Router>
      <AppProvider>
      <div>
        <Route path="/list_feed/:id/:timestamp" component={HomePage} />
        <Route path="/" exact component={HomePage} />
        <Route path="/index.html" component={HomePage} />
      </div>
      </AppProvider>
      </Router>
  );
}

export default App;
