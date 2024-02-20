
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <h1>E-learning</h1>
      </div>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/courses" style={linkStyle}>Courses</Link>
        <Link to="/student-dashboard" style={linkStyle}>Student Dashboard</Link>
        <Link to="/teacher-dashboard" style={linkStyle}>Teacher Dashboard</Link>
      </nav>
    </header>
  );
};

const headerStyle = {
  background: 'url("https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg?size=626&ext=jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#ecf0f1',
  padding: '1rem',
  textAlign: 'center',
};

const logoStyle = {
  flex: '1',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
};

const linkStyle = {
  color: 'white',

}
export default Header;
