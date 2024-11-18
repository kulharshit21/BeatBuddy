import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import logo from './Loogo.png'; // Path to the first image
import image2 from './image 2.png'; // Path to the second image

const Home = () => {
  return (
    <div className="home">
      <img src={logo} alt="Rhyno Logo" className="logo" />
      <img src={image2} alt="Second Visual Representation" className="image2" />

      <div className="box-container">
        <Link to="/jamming" className="box">Jamming</Link>
        <Link to="/listening" className="box">Listening</Link>
        <Link to="/connect" className="box">Connect</Link>
      </div>
    </div>
  );
};

export default Home;
