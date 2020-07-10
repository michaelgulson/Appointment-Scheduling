import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { Home, About, Contact, Services, Jobs, Volunteer, Search, SignUp, Account } from './components/index'


const App = () => (
  <React.Fragment>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/services" component={Services} />
      <Route path="/jobs" component={Jobs} />
      <Route path="/volunteer" component={Volunteer} />
      <Route path="/search" component={Search} />
      <Route path="/signup" component={SignUp} />
      <Route path="/account" component={Account} />
    </Switch>
  </React.Fragment>
);

export default App;