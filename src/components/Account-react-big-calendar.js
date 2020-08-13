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


class MyAccount extends React.Component{
  state = {
    event:[]
  }

  async  FetchEventData() {
    try {
      const EventData = await API.graphql(graphqlOperation(ListEvents))
      //console.log('EventData:', EventData)
      this.setState({
        event: EventData.data.listEvents.items
      })
    } catch (err) {
      console.log('error fetching events...', err)
    }
  };

  render(){
    return(
      <div onLoad={this.FetchEventData}>
        <p>
          {this.state.event}
        </p>
        <button onClick={this.FetchEventData}>Fetch Event Data</button>              
      </div>
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
    <div>
        <Header />
        <MyCalendar />
        <MyAccount />
    </div>
)


export default Account