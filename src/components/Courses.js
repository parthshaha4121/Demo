
import React, { useState } from 'react';

import DemoVideo from './DemoVideo';
import Quiz from './Quiz';

const Courses = () => {
  const [currentCourse, setCurrentCourse] = useState(null);
  const [videoCompleted, setVideoCompleted] = useState(false);

  const courses = [
    {
      id: 1,
      title: 'Introduction to React',
      image: 'data:image/jpeg;base64,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',
      demoVideo:'https://static.videezy.com/system/resources/previews/000/043/143/original/lights_go.mp4',
    },
    {
      id: 2,
      title: 'JavaScript Fundamentals',
      image: 'data:image/png;base64,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',
      demoVideo:'https://static.videezy.com/system/resources/previews/000/043/143/original/lights_go.mp4', 
    },
    {
      id: 3,
      title: 'Web Design Basics',
      image: 'https://via.placeholder.com/150',
      demoVideo:'https://www.google.com/search?sca_esv=d9a618c90834fc8a&sxsrf=ACQVn09pvib60WfqiLS_i3msXwilm5T5wg:1707376872896&q=react+intro+demo+video&tbm=vid&source=lnms&sa=X&ved=2ahUKEwihxIbAmpuEAxWb-DgGHZgzCu4Q0pQJegQIChAB&biw=767&bih=728&dpr=1.25#',
    },
    {
      id: 4,
      title: 'Node.js Crash Course',
      image: 'https://via.placeholder.com/150',
      demoVideo:'https://www.google.com/search?sca_esv=d9a618c90834fc8a&sxsrf=ACQVn09pvib60WfqiLS_i3msXwilm5T5wg:1707376872896&q=react+intro+demo+video&tbm=vid&source=lnms&sa=X&ved=2ahUKEwihxIbAmpuEAxWb-DgGHZgzCu4Q0pQJegQIChAB&biw=767&bih=728&dpr=1.25#',
    },
    {
      id: 5,
      title: 'HTML and CSS Essentials',
      image: 'https://via.placeholder.com/150',
      demoVideo:'https://www.google.com/search?sca_esv=d9a618c90834fc8a&sxsrf=ACQVn09pvib60WfqiLS_i3msXwilm5T5wg:1707376872896&q=react+intro+demo+video&tbm=vid&source=lnms&sa=X&ved=2ahUKEwihxIbAmpuEAxWb-DgGHZgzCu4Q0pQJegQIChAB&biw=767&bih=728&dpr=1.25#',
    },
  ];

  const handleVideoComplete = () => {
    setVideoCompleted(true);
  }


  return (
    <div style={courseContainer}>
      <h2 style={headingStyle}>Available Courses</h2>
      {currentCourse && (
        <div>
          {videoCompleted ? (
            <Quiz />
          ) : (
            <DemoVideo videoUrl={currentCourse.demoVideo} onComplete={handleVideoComplete} />
          )}
        </div>
      )}
      <div style={coursesList}>
        {courses.map((course) => (
          <div key={course.id} style={courseItem}>
            <img src={course.image} alt={course.title} style={courseImage} />
            <div style={overlay} onClick={() => setCurrentCourse(course)}>
              <div style={playIcon}>▶</div>
            </div>
            <h3 style={courseTitle}>{course.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const courseContainer = {
  width: '80%',
  margin: 'auto',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  marginTop: '20px',
};

const headingStyle = {
  textAlign: 'center',
  color: '#2c3e50',
};

const coursesList = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  marginTop: '20px',
};

const courseItem = {
  position: 'relative',
  width: '200px',
  margin: '10px',
  padding: '10px',
  borderRadius: '8px',
  boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f5f5f5',
  textAlign: 'center',
};

const courseImage = {
  width: '100%',
  borderRadius: '4px',
};

const overlay = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0, 0, 0, 0.5)',
  borderRadius: '8px',
};

const playIcon = {
  fontSize: '30px',
  color: '#fff',
};

const courseTitle = {
  marginTop: '10px',
  color: '#333',
};

export default Courses;
