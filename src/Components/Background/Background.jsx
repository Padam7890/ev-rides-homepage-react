// Background.jsx
import React, { useRef, useEffect } from "react";
import "./Background.css";
import video1 from "../../Assets/video1.mp4";
import image1 from "../../Assets/image1.png";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.png";

const Background = ({ playStatus, heroCount, onTimeUpdate }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (videoRef.current) {
        const newTime = videoRef.current.currentTime;
        onTimeUpdate(newTime);
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [onTimeUpdate, playStatus]);

  if (playStatus) {
    return (
      <div className="relative-container">
        <video className="background fade-in" autoPlay muted loop ref={videoRef}>
          <source src={video1} type="video/mp4" />
        </video>
      </div>
    );
  } else if (heroCount === 0) {
    return <img className="background fade-in" src={image1} alt="" />;
  } else if (heroCount === 1) {
    return <img className="background fade-in" src={image2} alt="" />;
  } else if (heroCount === 2) {
    return <img className="background fade-in" src={image3} alt="" />;
  }
};

export default Background;
