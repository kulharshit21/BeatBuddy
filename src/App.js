import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Connect from './Connect';
import Jamming from './Jamming';
import Listening from './Listening';
import About from './About';
import Contact from './Contact';
import LogIn from './LogIn';  // Import Login component
import Signup from './Signup'; // Import Signup component

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/jamming" element={<Jamming />} />
          <Route path="/listening" element={<Listening />} />
          <Route path="/login" element={<LogIn />} />  {/* Add Login route */}
          <Route path="/signup" element={<Signup />} /> {/* Add Signup route */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
