import React from 'react';


const userContext = React.createContext({
    firstName: 'Account',
    lastName: '',
    id: '',
    type: '',
    email: '',
    password: '',
    cellphone: '',
    address: '',
    //setUser:  () => {},
});

export {
    userContext // Export it so it can be used by other Components
  };