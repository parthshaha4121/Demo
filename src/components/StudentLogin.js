
import React, { useState } from 'react';

const StudentLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    if (email === 'student@example.com' && password === 'password') {

      onLogin(true);
    } else {

      alert('Invalid credentials');
    }
  };

  return (
    <div style={loginContainer}>
      <h2 style={headingStyle}>Student Login</h2>
      <div style={inputContainer}>
        <label style={labelStyle}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div style={inputContainer}>
        <label style={labelStyle}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
      </div>
      <button onClick={handleLogin} style={buttonStyle}>
        Login
      </button>
    </div>
  );
};

const loginContainer = {
  width: '300px',
  margin: 'auto',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
};

const headingStyle = {
  textAlign: 'center',
  color: '#2c3e50',
};

const inputContainer = {
  marginBottom: '15px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  color: '#333',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#2ecc71',
  color: '#fff',
  cursor: 'pointer',
};

export default StudentLogin;
