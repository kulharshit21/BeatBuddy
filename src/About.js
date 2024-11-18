import React from 'react';
import './About.css';
import image from './image 2.png'; // Import the image

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text-box">
        <h1>About Beatbuddy</h1>
        <p>
          Welcome to Beatbuddy, the ultimate music platform designed for music lovers and creators alike. 
          Our app offers three dynamic ways to enjoy and engage with music: jam along with friends, 
          explore a vast library of tracks, and connect with fellow music enthusiasts. Whether you’re a 
          casual listener or a passionate musician, Beatbuddy provides a vibrant community where everyone 
          can share their love for music.
        </p>
        <p>
          At Beatbuddy, we empower users to not only listen to their favorite tunes but also showcase their talents. 
          From hosting live concerts to interacting with fans, our platform enables both established artists and 
          aspiring musicians to connect with their audience on a personal level. Join us to discover new sounds, 
          follow your favorite artists, and become part of a thriving musical community!
        </p>
      </div>
      <img src={image} alt="About Us Visual" className="about-image" />
    </div>
  );
}

export default About;
