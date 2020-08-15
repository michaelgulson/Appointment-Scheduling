//This is off by one month dates entered with event(2020, 5, 2) show up in june 2 2020

import React from 'react';
import Header from './Header';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
//import globalize from 'globalize'

import UserList from './UserList'
import events from './events' 
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { API, graphqlOperation } from 'aws-amplify'
import { listEvents as ListEvents } from '../graphql/queries'



const localizer = momentLocalizer(moment)
//const localizer = globalizeLocalizer(globalize)

var EventData1;
var events1 = [];

class MyAccount extends React.Component{
  state = {
    events:[]
  }

  async  componentDidMount() {
    try {
      EventData1 = await API.graphql(graphqlOperation(ListEvents))
      events1 = EventData1.data.listEvents.items
      const EventData = await API.graphql(graphqlOperation(ListEvents))
      //console.log('EventData:', EventData)
      this.setState({
        events: EventData.data.listEvents.items
      })
    } catch (err) {
      console.log('error fetching events...', err)
    }
  };

  render(){
    return(
      <>
      <table>
            <tr>
              <th>Client</th>
              <th>Employee</th>
              <th>Service</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Color</th>
        </tr>      
            <tr>
              <td>{events1.client}</td>
              <td>{events1.employee}</td>
              <td>{events1.service}</td>
              <td>{events1.date}</td>
              <td>{events1.startTime}</td>
              <td>{events1.endTime}</td>
              <td>{events1.color}</td>
            </tr>
        {
            this.state.events.map((event, index) => (

            <tr key={index}>
              <td>{event.client}</td>
              <td>{event.employee}</td>
              <td>{event.service}</td>
              <td>{event.date}</td>
              <td>{event.startTime}</td>
              <td>{event.endTime}</td>
              <td>{event.color}</td>
            </tr>
          ))
        }   
        
        </table>
      </>
    )

  }

}

const MyCalendar = props => (
  <>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      eventPropGetter={event => ({
        style: {
          backgroundColor: event.color,
        },
      })}
    />
  </>

)

const Account = () => (
    <>
        <Header />
        <MyCalendar />
        <MyAccount />
    </>
)


export default Account