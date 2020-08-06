// src/App.js
import React from 'react';

import { API, graphqlOperation } from 'aws-amplify'
// import uuid to create a unique client ID
import uuid from 'uuid/v4'

import { listUsers as ListUsers } from '../graphql/queries'
// import the mutation
import { createUser as CreateUser } from '../graphql/mutations'

const CLIENT_ID = uuid()

class SignUpGraphQL extends React.Component {
  // define some state to hold the data returned from the API
  state = {
    type: 'client', firstName: '', lastName: '', email: '', password: '', cellphone: '', address:'', users: []
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
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    return (
      <>
        <h1>Sign Up</h1>
        <input
          name='firstName'
          onChange={this.onChange}
          value={this.state.firstName}
          placeholder='first name'
        />
        <input
          name='lastName'
          onChange={this.onChange}
          value={this.state.lastName}
          placeholder='last name'
        />
        <input
          name='email'
          onChange={this.onChange}
          value={this.state.email}
          placeholder='email'
        />
        <input
          name='password'
          onChange={this.onChange}
          value={this.state.password}
          placeholder='password'
        />
        <input
          name='cellphone'
          onChange={this.onChange}
          value={this.state.cellphone}
          placeholder='cellphone'
        />
        <input
          name='address'
          onChange={this.onChange}
          value={this.state.address}
          placeholder='address'
        />


        <button onClick={this.createUser}>Create User</button>
      </>
    )
  }
}

export default SignUpGraphQL