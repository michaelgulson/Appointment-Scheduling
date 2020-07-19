//react-full-event-calendar
//military time starts with 0:00am no color

import React from 'react';
import Header from './Header';
import Calendar from "react-full-event-calendar";
import moment from 'moment'
 

const events = [
  {
    startTime: new Date(moment().add(2, "hour")),
    endTime: new Date(moment().add(3, "hour")),
    title: "working in the weekend"
  },
  {
    startTime: new Date(moment().add(-3, "hour")),
    endTime: new Date(moment().add(-2, "hour")),
    title: "working in the weekend"
  },
  {
    startTime: new Date(),
    endTime: new Date(moment().add(1, "hour")),
    title: "working in the weekend"
  }
];
 

const Account = () => (
    <div>
        <Header />
        <Calendar events={events} />;
    </div>
)


export default Account