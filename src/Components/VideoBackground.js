import React from "react";
import "./VideoBackground.css";

const VideoBackground = () => {
  return (
    <div className="fullscreen-bg" class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img"
      <video autoPlay loop muted class="fullscreen-bg__video">
        <source src="/vid1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
