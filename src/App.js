import React from 'react';
import './App.css';
import { Route, Switch, Redirect} from 'react-router-dom'
import { Home, About, Contact, Services, Jobs, Volunteer, Search, SignUp, Account, UserList, Admin, Appointment, EditEventAvailability } from './components/index'
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
      // console.log('state for app.js file');
      // console.log(this.state);
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
            <Route path="/account" render={() => {
            switch(this.state.type){
              case 'client': return <Account setUser={this.setUser}/>;
              case 'admin' : return <Account setUser={this.setUser}/>;
              case 'employee' : return <Account setUser={this.setUser}/>;
              default: return <Redirect to="/" />;
            }
          }} 
              />
            <Route path="/userlist" component={UserList} />
            <Route path="/admin" render={() => this.state.type === 'admin' ?
             <Admin setUser={this.setUser}/> : <Redirect to="/" />} />
            <Route path="/appointment" render={() => {
            switch(this.state.type){
              case 'client': return <Appointment setUser={this.setUser}/>;
              case 'admin' : return <Appointment setUser={this.setUser}/>;
              case 'employee' : return <Appointment setUser={this.setUser}/>;
              default: return <Redirect to="/" />;
            }
          }} 
              />
            <Route path="/availability" render= {() => (this.state.type === 'employee') ?
            <EditEventAvailability setUser={this.setUser}/> : <Redirect to="/" />} />          </Switch>
         </userContext.Provider>
    
        </React.Fragment>
      );
    }
}
export default App;