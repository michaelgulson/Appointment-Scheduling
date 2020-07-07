import React from 'react';
import '../App.css'
import { Link, withRouter } from 'react-router-dom'

//fileio
//const fs = require('fs');


class SignUpLogic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fname: '', lname: '', email: '', password:'', cpassword:'', cellphone:'', address:''};
  }



  
  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value; 
    this.setState({[nam]: val});
    }
  handleSubmit = (event) => {
    /* Write to a json file attempt
    let account = {
      email: this.state.email,
      password: this.state.password
    };
    let data = JSON.stringify(account);
    fs.writeFileSync('login.json', data);*/
    alert('info dump: ' + this.state.fname + ' ' + this.state.lname + ' ' + this.state.email + ' ' + this.state.password + ' ' + this.state.cpassword + ' ' + this.state.cellphone + ' ' + this.state.address);
    console.log('info dump: ' + this.state.fname + ' ' + this.state.lname + ' ' + this.state.email + ' ' + this.state.password + ' ' + this.state.cpassword + ' ' + this.state.cellphone + ' ' + this.state.address);
    this.props.history.push('/');
    event.preventDefault(); //not sure what this does
  }

  render() {
    return (
      <div>
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              First Name:
              <br></br>
              <input type="text" name='fname' onChange={this.handleChange} />        
              </label>
            <br></br>
            <br></br>
            <label>
                Last Name:
                <br></br>
                <input type="text" name='lname' onChange={this.handleChange} /> 
            </label>
            <br></br>
            <br></br>
            <label>
                Email:
                <br></br>
                <input type="email" name='email' onChange={this.handleChange} /> 
            </label>
            <br></br>
            <br></br>
            <label>
                Password:
                <br></br>
                <input type="password" name='password' onChange={this.handleChange} /> 
            </label>
            <br></br>
            <br></br>
            <label>
                Confirm Password:
                <br></br>
                <input type="password" name='cpassword' onChange={this.handleChange} /> 
            </label>
            <br></br>
            <br></br>
            <label>
                Cellphone:
                <br></br>
                <input type="text" name='cellphone' onChange={this.handleChange} /> 
            </label>
            <br></br>
            <br></br>
            <label>
                Address:
                <br></br>
                <input type="text" name='address' onChange={this.handleChange} /> 
            </label>
            <br></br>
            <br></br>
              <input type="submit" value="Next" />
          </form>
        </div>
    );
  }
}

export default withRouter(SignUpLogic);