// StudentDashboard.js
import React, { useState } from 'react';
import StudentLogin from '../components/StudentLogin';

const StudentDashboard = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setLoggedIn(status);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome to the Student Dashboard</h2>
          
        </div>
      ) : (
        <StudentLogin onLogin={handleLogin} />
      )}
    </div>
  );
};

export default StudentDashboard;
