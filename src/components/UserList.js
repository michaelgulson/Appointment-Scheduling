import React from 'react';


import { API, graphqlOperation } from 'aws-amplify'
import { listUsers as ListUsers } from '../graphql/queries'

class UserList extends React.Component {

    state = {
        users:[]
    }

   // execute the query in componentDidMount
   async componentDidMount() {
    try {
      const UserData = await API.graphql(graphqlOperation(ListUsers))
      console.log('talkData:', UserData)
      this.setState({
        users: UserData.data.listUsers.items
      })
    } catch (err) {
      console.log('error fetching users...', err)
    }
  }
  render() {
    return (
      <>
        {
          this.state.users.map((user, index) => (
            <div key={index}>
                <p>
                    User Type: {user.type}<br></br>
                    First Name: {user.firstName}<br></br>
                    Last Name: {user.lastName}<br></br>
                    Email: {user.email}<br></br>
                    Password: {user.password}<br></br> 
                    Cellphone: {user.cellphone}<br></br>
                    Address: {user.address}                                                                   
                </p>
            </div>
          ))
        }
      </>
    )
  }
}

export default UserList
