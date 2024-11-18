import React from 'react';
import './Contact.css';
import image2 from './image 2.png'; // Adjust the path as needed

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>ContactUs</h1>
      <div className="contact-box">
        <div className="contact-left">
          <p>SHRIVATSA</p>
          <p>TANAY</p>
          <p>RAUNAK</p>
          <p>SANCHI</p>
          <p>HARSHIT</p>
        </div>
        <div className="divider"></div>
        <div className="contact-right">
          <p>sk4849@srmist.edu.in</p>
          <p>tp5027@srmist.edu.in</p>
          <p>rj4406@srmist.edu.in</p>
          <p>sm1586@srmist.edu.in</p>
          <p>hk0534@srmist.edu.in</p>
        </div>
      </div>
      <img src={image2} alt="Contact Visual Representation" className="contact-image" />
    </div>
  );
};

export default Contact;
