import  { useState, useEffect } from "react";

const YouTubePlayer = ({ videoId }) => {
    return (
      <div className="relative">
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

export default YouTubePlayer