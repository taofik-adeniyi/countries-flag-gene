import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage'
import Details from './pages/Details/Details'
import Error from './pages/Error/Error'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/details" exact component={Details} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
