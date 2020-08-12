import React from 'react';
import Header from './Header';

class ScheduleAppointment extends React.Component {
    // define some state to hold the data returned from the API
    state = {
      client: 'client', employee: '', service: '', date: '', startTime: '', endTime: '', color:''
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
      const { client, employee, service, date, startTime, endTime, color } = this.state
      if ( client === '' || employee === '' || service === '' || date === '' || startTime === '' || endTime === '' || color === '') return
  
      const event = { client, employee, service, date, startTime, endTime, color }
      //const users = [...this.state.users, user]
      this.setState({
        client: 'client', employee: '', service: '', date: '', startTime: '', endTime: '', color:''
    })
  
      try {
        await API.graphql(graphqlOperation(CreateEvent, { input: event }))
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
              <label>
                  Color:
                  <br></br>
                  <input  
                      type='text' 
                      name='color'
                      onChange={this.onChange}
                      value={this.state.color}
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
  

const Appointment = () => (
    <div>
        <Header />
        <ScheduleAppointment />
    </div>
)

export default Appointment
