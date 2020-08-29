import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuLink,
} from "@reach/menu-button";
import "@reach/menu-button/styles.css";

import { userContext } from './UserContext';

class Header extends React.Component{
  static contextType = userContext;



  render (){
    return(
    <div>
      <header>
        <div class="row">
          <div class = "column-8-logo">
                <Link to="/"><img src="logo-notext.jpeg" alt="logo" width="50" height="50"></img></Link>
          </div>
          <div class = "column-8">
                <Link to="/contact">Contact Us</Link>
          </div>
          <div class = "column-8">
                <Link to="/about">About Us</Link>
          </div>
          <div class = "column-8">
                <Link to="/services">Services</Link>
          </div>
          <div class = "column-8">
                <Link to="/jobs">Jobs</Link>
          </div>
          <div class = "column-8">
                <Link to="/volunteer">Volunteer</Link>
          </div>
          <div class = "column-8">
              <Menu>
              <MenuButton class="dropbtn">
                {this.context.firstName} <span aria-hidden>▾</span>
              </MenuButton>
                
                {this.context.type === 'client' ? 

                  <MenuList>
                      <MenuLink as="a" href="/appointment">
                      Schedule Appointment
                    </MenuLink>
                    <MenuLink as="a" href="/"> 
                      Log Out
                    </MenuLink>
                  </MenuList>
                :
                <MenuList>
                  <MenuLink as="a" href="/signup">
                    Sign Up
                  </MenuLink>
                  <MenuLink as="a" href="/">
                    Log In
                  </MenuLink>
                </MenuList>
                }
              
            </Menu>        
          </div>
        </div>        
      </header>
    </div>
    );
  }
}

Header.contextType= userContext;




  export default Header