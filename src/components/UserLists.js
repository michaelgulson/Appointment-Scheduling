import React from 'react';


import { API, graphqlOperation } from 'aws-amplify'
import { listUsers as ListUsers } from './graphql/queries'

class UserList extends React.Component {

    state = {
        users:[]
    }

   // execute the query in componentDidMount
   async componentDidMount() {
    try {
      const UserData = await API.graphql(graphqlOperation(ListUsers))
      console.log('talkData:', userData)
      this.setState({
        users: userData.data.listUsers.items
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
                    {user.id}<br></br>
                    {user.type}<br></br>
                    {user.firstName}<br></br>
                    {user.lastName}<br></br>
                    {user.email}<br></br>
                    {user.password}<br></br> 
                    {user.cellphone}<br></br>
                    {user.address}                                                          
                </p>
            </div>
          ))
        }
      </>
    )
  }
}

export default UserList
