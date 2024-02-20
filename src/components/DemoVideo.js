import React, { useRef, useState } from 'react';

const DemoVideo = ({ videoUrl, onComplete }) => {
  const videoRef = useRef(null);
  const [played, setPlayed] = useState(false);

  const handleVideoComplete = () => {
    setPlayed(true);
    onComplete();
  };

  return (
    <div style={videoContainer}>
      <video
        ref={videoRef}
        src={videoUrl}
        style={videoStyle}
        controls
        onEnded={handleVideoComplete}
      />
      {played && <p style={completionMessage}>Video Completed! Proceed to Quiz.</p>}
    </div>
  );
};

const videoContainer = {
  margin: '20px 0',
};

const videoStyle = {
  width: '100%',
  borderRadius: '8px',
};

const completionMessage = {
  textAlign: 'center',
  color: '#3498db',
  fontWeight: 'bold',
  marginTop: '10px',
};

export default DemoVideo;
