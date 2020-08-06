//This is off by one month dates entered with event(2020, 5, 2) show up in june 2 2020

import React from 'react';
import Header from './Header';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
//import globalize from 'globalize'

import UserList from './UserList'
import events from './events' 
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)
//const localizer = globalizeLocalizer(globalize)






const MyCalendar = props => (
  <div>
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
  </div>
)

const Account = () => (
    <div>
        <Header />
        <MyCalendar />
    </div>
)


export default Account