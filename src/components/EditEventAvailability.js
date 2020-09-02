


import React from 'react';
import Header from './Header';
import { API, graphqlOperation } from 'aws-amplify'
import { createEvent as CreateEvent } from '../graphql/mutations'
import { createEventAvailability as CreateEventAvailability } from '../graphql/mutations'

import { Link, withRouter } from 'react-router-dom'
import { userContext } from './UserContext';


class EditEventAvailability extends React.Component {
    // define some state to hold the data returned from the API
    static contextType = userContext;

   
    state = {
      employee: this.context.id, date: '', startTime: '', endTime: ''
    }
    handleSubmit = (event) => {
  
      this.props.history.push('/Account');
      //testconnection();
      event.preventDefault(); //not sure what this does
    }
  
    // execute the query in componentDidMount
    /*async componentDidMount() {
      try {
        const userData = await API.graphql(graphqlOperation(ListUsers))
        console.log('userData:', userData)
        this.setState({
          users: userData.data.listUsers.items
        })
      } catch (err) {
        console.log('error fetching users...', err)
      }
    }*/
    createEvent = async() => {
      var employeeId = this.context.id;

      const { employee, date, startTime, endTime} = this.state
      if ( employee === '' || date === '' || startTime === '' || endTime === '' ) return
  
      const eventAvailability = { employee: employeeId, date, startTime, endTime}
      //const users = [...this.state.users, user]
      this.setState({
        employee: employeeId,  date: '', startTime: '', endTime: ''
      })
  
      try {
          
        await API.graphql(graphqlOperation(CreateEventAvailability, { input: eventAvailability }))
        console.log('item created!')
      } catch (err) {
        console.log('error creating event...', err)
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
          <Header setUser={this.props.setUser}/>
          <div>
          <form onSubmit={this.handleSubmit}>
            <h1>Schedule Appointment</h1>
              <label>
                Date:
                <br></br>
                <input 
                  type="text"
                  name='date' 
                  onChange ={this.onChange}
                  value={this.state.date}
                />        
                </label>
              <br></br>
              <br></br>
              <label>
                  Start Time:
                  <br></br>
                  <input 
                      type="text"  
                      name='startTime'
                      onChange={this.onChange}
                      value={this.state.startTime}
                  /> 
              </label>
              <br></br>
              <br></br>
              <label>
                  End Time:
                  <br></br>
                  <input  
                      type= "text" 
                      name='endTime'
                      onChange={this.onChange}
                      value={this.state.endTime}
                  /> 
              </label>
              <br></br>
              <br></br>
              <button onClick={this.createEvent}>Create Event</button>            
              </form>
          </div>
        </>
      )
    }
  }

  EditEventAvailability.contextType= userContext;

  

export default withRouter(EditEventAvailability)
