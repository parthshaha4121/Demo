// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentDashboard from './components/StudentDashboard';
import Header from './components/Header';
import TeacherLogin from './components/TeacherLogin';
import Courses from './components/Courses';
import Home from './components/Home';
import Quiz from './components/Quiz';


const App = () => {
  return (
    <div style={appContainer}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherLogin/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/quiz" element={<Quiz/>} />
        
      </Routes>
    </Router>
    </div>
  );
};

const appContainer = {
  backgroundImage: 'url("https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg?size=626&ext=jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
};

export default App;
