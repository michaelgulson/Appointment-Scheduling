import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");


// Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
} 



class Header extends React.Component {




render(){
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
                  <div class = "dropdown">
                  <button onclick="myFunction()" class="dropbtn">Account</button>
                  <div id="myDropdown" class="dropdown-content">
                        <Link to="/Sign Up">Sign Up</Link>
                        <Link to="/">Log In</Link>
                  </div>
                  </div>                        
          </div>
        </div>        
      </header>
    </div>
  );
  }
}




  export default Header