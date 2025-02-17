import React from 'react';
import './Home.css';
import background from './images/gym4.jpg';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';
import About from './About';

function Home() {
  return (
    <>
  
    <div
      className="home"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="overlay">
        <h1>Welcome to the Fitness Club</h1>
        <p>Your fitness journey starts here!</p>


      </div>
     
    </div>
    <div>
        <About/>
        <Services/>
        <Gallery/>
        <Contact/>
      </div>
    </>
  );
}

export default Home;
