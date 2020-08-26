import React from 'react';


const userContext = React.createContext({
    user: '',  
    toggleTheme: () => {},
});

export {
    userContext // Export it so it can be used by other Components
  };