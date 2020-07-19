import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { Home, About, Contact, Services, Jobs, Volunteer, Search, SignUp, Account } from './components/index'
//import firebase from 'firebase/app'

/*
const firebaseConfig = {
  apiKey: "AIzaSyAOVms5PKUKe9nXl1_-C147etBUzAs7mx8",
  authDomain: "st-lorraine.firebaseapp.com",
  databaseURL: "https://st-lorraine.firebaseio.com",
  projectId: "st-lorraine",
  storageBucket: "st-lorraine.appspot.com",
  messagingSenderId: "501666410157",
  appId: "1:501666410157:web:12d59437ddd678a1826024",
  measurementId: "G-XE7JLMMTY6"
};

firebase.initializeApp(firebaseConfig);
*/

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