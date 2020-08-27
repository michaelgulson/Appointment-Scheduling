import React from 'react';
import Header from './Header';
import SignUpLogic from './SignUpLogic'
import SignUpGraphQL from './Sign Up-graphql'
import { userContext } from './UserContext';

import { render } from '@testing-library/react';

// const SignUp = () => (
//         <div>
//             <Header />
//             <SignUpLogic />
//         </div>
// )
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'user',
            //setUser: this.setUser,
          };


        this.setUser = (email) => {
          this.setState(state => ({
            user: email
              // state.user === ''
              //   ? email
              //   : state.user
            
          }));
          console.log('set user');
        };
    }    
    
        // State also contains the updater function so it will    // be passed down into the context provider    

      

    //const SignUp = () => (

    render(){

        
        return(
            <div>
                <userContext.Provider value={this.state}>
                <Header/>
                <SignUpGraphQL setUser={this.setUser} />
                </userContext.Provider>
            </div>
        );
        }
}


export default SignUp