import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { Home, About, Contact, Services, Jobs, Volunteer, Search, SignUp, Account, UserList, Admin, Appointment } from './components/index'
import { userContext } from './components/UserContext';


class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.toggleUser = (email) => {
        this.setState(state => ({
          user: email
            // state.user === ''
            //   ? email
            //   : state.user
          
        }));
      };
  
      // State also contains the updater function so it will    // be passed down into the context provider    
      this.state = {
        user: '',
        toggleUser: this.toggleUser   
      };
    }
    render() {
      return(
        <React.Fragment>
          <userContext.Provider value={this.state}>
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