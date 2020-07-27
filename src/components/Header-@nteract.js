import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownTrigger,
  DropdownContent
} from "@nteract/dropdown-menu";

const Header = () => (
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
              <DropdownMenu>
              <DropdownTrigger>
                <button title="Account">
                </button>
              </DropdownTrigger>
          <DropdownContent>
          <li
            role="option"
            aria-selected="false"
            tabIndex="0"
          >
              <Link to="/Sign Up">Sign Up</Link>
          </li>
          <li
            role="option"
            aria-selected="false"
            tabIndex="0"
          >
            <Link to="/">Log In</Link>
          </li>
        </DropdownContent>
        </DropdownMenu>                     
          </div>
        </div>        
      </header>
    </div>
  );




  export default Header