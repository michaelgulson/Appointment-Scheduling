import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';


const App = () => (
  <React.Fragment>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
    </Switch>
  </React.Fragment>
);

export default App;
