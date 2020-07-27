
import React from 'react';
import Header from './Header';
import EventCalendar from 'custom-calendar-react'
import moment from 'moment'
 
 


const Account = () => (
    <div>
        <Header />
        <EventCalendar 
    ref={this.eventCal}
    eventUpdate={this.eventUpdate}
    eventDelete={this.eventDelete}
    eventCreate={this.eventCreate}
    controlClicked={this.controlClicked}
    date={new Date()} 
    events={[
        {
        name: 'Test Event 1',
        date: moment('15/10/2019 12:00 PM', 'DD/MM/YYYY HH:mm A').toDate(),
        color: '#1f8413'
        },
        {
        name: 'Test Event 2',
        date: moment('15/10/2019 12:00 PM', 'DD/MM/YYYY HH:mm A').toDate(),
        color: '#1f8413'
        },
        {
        name: 'Test Event 3',
        date: moment('15/10/2019 02:00 PM', 'DD/MM/YYYY HH:mm A').toDate(),
        color: '#1f8413'
        },
        {
        name: 'Test Event 3_1',
        date: moment('15/10/2019 02:20 PM', 'DD/MM/YYYY HH:mm A').toDate(),
        color: '#1f8413'
        },
        {
        name: 'Test Event 3_2',
        date: moment('15/10/2019 02:40 PM', 'DD/MM/YYYY HH:mm A').toDate(),
        color: '#1f8413'
        },
        {
        name: 'Test Event 3_3',
        date: moment('15/10/2019 04:40 PM', 'DD/MM/YYYY HH:mm A').toDate(),
        color: '#1f8413'
        },
        {
        name: 'Test Event 4',
        date: moment('20/10/2019 06:00 PM', 'DD/MM/YYYY HH:mm A').toDate(),
        leadTimezone: 'America/Los_Angeles',
        },
        {
        name: 'Test Event 5',
        date: moment('11/09/2019 06:00 AM', 'DD/MM/YYYY HH:mm A').toDate(),
        },
        {
        name: 'Test Event 6',
        date: moment('22/11/2019 04:00 AM', 'DD/MM/YYYY HH:mm A').toDate(),
        },
        {
        name: 'Test Event 7',
        date: moment('22/11/2019 06:00 PM', 'DD/MM/YYYY HH:mm A').toDate(),
        }
    ]}
    slot={30}
    perPage={5}
    workingDays={['monday', 'tuesday', 'wednesday', 'thursday']}
    workingHours={{
        start: '11:00 AM',
        end: '06:30 PM'
    }}
    holidays={[
        {
        date: moment('14/10/2019', 'DD/MM/YYYY').toDate(),
        title: 'Holiday1'
        }, {
        date: moment('19/11/2019', 'DD/MM/YYYY').toDate(),
        title: 'Holiday2'
        }
    ]}
    showDisabledTimeFrames={true}
/>
 
 </div>
)


export default Account