import React from 'react';


const userContext = React.createContext({
    user: 'account',
    //setUser:  () => {},
});

export {
    userContext // Export it so it can be used by other Components
  };