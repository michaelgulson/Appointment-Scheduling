
import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom'


const fs = require('fs');


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {    this.setState({email: event.target.value, password: this.state.password});  }
  handlePasswordChange(event){  this.setState({email: this.state.email, password: event.target.value})}
  handleSubmit(event) {
    /* Write to a json file attempt
    let account = {
      email: this.state.email,
      password: this.state.password
    };
    let data = JSON.stringify(account);
    fs.writeFileSync('login.json', data);*/
    alert('email and password: ' + this.state.email + ' ' + this.state.password);
    console.log('email and password: ' + this.state.email + ' ' + this.state.password);
    event.preventDefault(); //not sure what this does
  }

  render() {
    return (
      <div class ="row">
        <div class ="column-8-right">
          <form onSubmit={this.handleSubmit}>
            <label>
              Email:
              <input type="email" value={this.state.email} onChange={this.handleEmailChange} />        </label>
            <br></br>
            <label>
                Password:
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange} /> 
            </label>
            <br></br>
              <Link to="/signup"><input type="submit" value="Log in" /></Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login