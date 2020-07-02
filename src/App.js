import React from 'react';
import './App.css';

const HomeHeader = () => (
  <div>
    <header>
      <div class="row">
        <div class = "column-8-logo">
          <a href=""><img src="logo-notext.jpeg" alt="logo" width="50" height="50"></img></a>
        </div>
        <div class = "column-8">
          <a href="">Contact Us</a>
        </div>
        <div class = "column-8">
          <a href="">About Us</a>
        </div>
        <div class = "column-8">
          <a href="">Services</a>
        </div>
        <div class = "column-8">
          <a href="">Jobs</a>
        </div>
        <div class = "column-8">
          <a href="">Volunteer</a>
        </div>
        <div class = "column-8">
          <a href="">Search</a>
        </div>
      </div>        
    </header>
  </div>
);


const App = () => (
  <React.Fragment>
    <HomeHeader />    
    <div class="background-image">
      <h2>"Mary S. - "My caregiver from St. Lorraine</h2>
      <h2>helped me recover from my knee surgery through</h2>
      <h2>personalized workouts and meals.</h2>
      <h2>She was a wonderful support to me</h2>
      <h2>and good company during my recovery.</h2>
      <h2>  Thank you St. Lorraine!"</h2>
      <p>                                 
      </p>
    </div>
  </React.Fragment>


);

export default App;
