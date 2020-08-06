// src/App.js
import React from 'react';

import { API, graphqlOperation } from 'aws-amplify'
// import uuid to create a unique client ID
import uuid from 'uuid/v4'

import { listUsers as ListUsers } from '../graphql/queries'
// import the mutation
import { createUser as CreateUser } from '../graphql/mutations'
import { Link, withRouter } from 'react-router-dom'


const CLIENT_ID = uuid()

class SignUpGraphQL extends React.Component {
  // define some state to hold the data returned from the API
  state = {
    type: 'client', firstName: '', lastName: '', email: '', password: '', cellphone: '', address:'', users: []
  }
  handleSubmit = (event) => {
    /* Write to a json file attempt
    let account = {
      email: this.state.email,
      password: this.state.password
    };
    let data = JSON.stringify(account);
    fs.writeFileSync('login.json', data);*/
    //console.log('big info dump: ' + this.state.fname + ' ' + this.state.lname + ' ' + this.state.email + ' ' + this.state.password + ' ' + this.state.cpassword + ' ' + this.state.cellphone + ' ' + this.state.address);
    // db.query('SELECT * FROM UserInfo').spread(function (users) {
    //   console.log('Hello users', users);
    // });

    this.props.history.push('/Account');
    //testconnection();
    event.preventDefault(); //not sure what this does
  }

  // execute the query in componentDidMount
  async componentDidMount() {
    try {
      const userData = await API.graphql(graphqlOperation(ListUsers))
      console.log('userData:', userData)
      this.setState({
        users: userData.data.listUsers.items
      })
    } catch (err) {
      console.log('error fetching users...', err)
    }
  }
  createUser = async() => {
    const { type, firstName, lastName, email, password, cellphone, address } = this.state
    if ( type === '' || firstName === '' || lastName === '' || email === '' || password === '' || cellphone === '' || address === '') return

    const user = { type, firstName, lastName, email, password, cellphone, address}
    const users = [...this.state.users, user]
    this.setState({
      users, type: 'client', firstName: '', lastName: '', email: '', password: '', cellphone: '', address: ''
    })

    try {
      await API.graphql(graphqlOperation(CreateUser, { input: user }))
      console.log('item created!')
    } catch (err) {
      console.log('error creating user...', err)
    }
    this.props.history.push('/Account');
    //testconnection();
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <>
        <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Sign Up</h1>
            <label>
              First Name:
              <br></br>
              <input 
                type="text"
                name='firstName' 
                onChange ={this.onChange}
                value={this.state.firstName}
              />        
              </label>
            <br></br>
            <br></br>
            <label>
                Last Name:
                <br></br>
                <input 
                    type="text"  
                    name='lastName'
                    onChange={this.onChange}
                    value={this.state.lastName}
                /> 
            </label>
            <br></br>
            <br></br>
            <label>
                Email:
                <br></br>
                <input  
                    type= "email" 
                    name='email'
                    onChange={this.onChange}
                    value={this.state.email}
                /> 
            </label>
            <br></br>
            <br></br>
            <label>
                Password:
                <br></br>
                <input  
                    type='password' 
                    name='password'
                    onChange={this.onChange}
                    value={this.state.password}
                /> 
            </label>
            <br></br>
            <br></br>
            <label>
                Confirm Password:
                <br></br>
                <input type='password' /> 
            </label>
            <br></br>
            <br></br>
            <label>
                Cellphone:
                <br></br>
                <input    
                    type= "text"
                    name='cellphone'
                    onChange={this.onChange}
                    value={this.state.cellphone}
                /> 
            </label>
            <br></br>
            <br></br>
            <label>
                Address:
                <br></br>
                <input 
                    type="text" 
                    name='address'
                    onChange={this.onChange}
                    value={this.state.address}
                />
            </label>
            <br></br>
            <br></br>
            <button onClick={this.createUser}>Create My Account</button>            
            </form>
        </div>
      </>
    )
  }
}

export default withRouter(SignUpGraphQL)