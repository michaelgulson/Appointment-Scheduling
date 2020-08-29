import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { Home, About, Contact, Services, Jobs, Volunteer, Search, SignUp, Account, UserList, Admin, Appointment } from './components/index'
import { userContext } from './components/UserContext';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Account',
      lastName: '',
      id: '',
      type: '',
      email: '',
      password: '',
      cellphone: '',
      address: '',
        //setUser: this.setUser,
      };


    this.setUser = (user) => {
      this.setState(state => ({
        firstName: user.firstName,
        lastName: user.lastName,
        id: user.id,
        type: user.type,
        email: user.email,
        password: user.password,
        cellphone: user.cellphone,
        address: user.address,
      }));
      console.log('state for app.js file');
      console.log(this.state);
    };
}  
    render() {
      return(
        <React.Fragment>
        <userContext.Provider value={this.state}>
  
          <Switch>
            <Route path="/" render={() => <Home setUser={this.setUser}/>} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/services" component={Services} />
            <Route path="/jobs" component={Jobs} />
            <Route path="/volunteer" component={Volunteer} />
            <Route path="/search" component={Search} />
            <Route path="/signup" render={() => <SignUp setUser={this.setUser}/>} />
            <Route path="/account" component={Account} />
            <Route path="/userlist" component={UserList} />
            <Route path="/admin" component={Admin} />
            <Route path="/appointment" component={Appointment} />
          </Switch>
         </userContext.Provider>
    
        </React.Fragment>
      );
    }
}
export default App;