//errors
import React from 'react';
import Header from './Header';
import Dayz from 'dayz';
//import 'dayz/dist/styles.css';
import moment from 'moment-range';



const EVENTS = new Dayz.EventsCollection([
    { content: 'A short event',
      range: moment.range( Date.clone(),
                           Date.clone().add(1, 'day') ) },
    { content: 'Two Hours ~ 8-10',
      range: moment.range( Date.clone().hour(8),
                           Date.clone().hour(10) ) },
    { content: "A Longer Event",
      range: moment.range( Date.clone().subtract(2,'days'),
                           Date.clone().add(8,'days') ) }
]);
 
class MyComponent extends React.Component {
 
    render() {
        return <Dayz
                   display='week'
                   date={this.props.date}
                   events={EVENTS}
               />
    }
 
}


const Account = () => (
        <div>
            <Header />
            <MyComponent />
        </div>
)


export default Account