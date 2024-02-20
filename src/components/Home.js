
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div style={homeContainer}>
      <h1 style={headingStyle}>Welcome to the Tutorial Website</h1>
      <p style={introText}>Explore our courses and take a quiz to test your knowledge!</p>
      <div style={buttonContainer}>
        <Link to="/courses" style={buttonStyle}>
          View Courses
        </Link>
        <Link to="/quiz" style={buttonStyle}>
          Take Quiz
        </Link>
      </div>
      
    </div>
  );
};

const homeContainer = {
  width: '80%',
  margin: 'auto',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  marginTop: '20px',
  textAlign: 'center',
};

const headingStyle = {
  color: '#2c3e50',
};

const introText = {
  color: '#7f8c8d',
  marginBottom: '20px',
};

const buttonContainer = {
  display: 'flex',
  justifyContent: 'center',
};

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#3498db',
  color: '#fff',
  textDecoration: 'none',
};

export default Home;
