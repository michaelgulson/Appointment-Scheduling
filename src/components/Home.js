import React from 'react';
import '../App.css'
import Header from './Header'
import Login from './/Login'



  const Home = () => (
    <div>
    <Header />    
      <div>
        <h2>"Mary S. - "My caregiver from St. Lorraine</h2>
        <h2>helped me recover from my knee surgery through</h2>
        <h2>personalized workouts and meals.</h2>
        <h2>She was a wonderful support to me</h2>
        <h2>and good company during my recovery.</h2>
        <h2>  Thank you St. Lorraine!"</h2>
      </div>
      <Login />
      </div>
  );

  export default Home;

