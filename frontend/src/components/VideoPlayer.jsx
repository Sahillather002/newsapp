import React, { useEffect, useState } from "react";
// import "./VideoPlayer.css";

const VideoPlayer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch(
        "https://newsapi-iota.vercel.app/api/videos"
      );
      const data = await response.json();
      setVideos(data);
    };
    fetchVideos();
  }, []);

  function func(url) {
    // Split the URL by '/' and get the last part
    const parts = url.split("/");
    const filename = parts[parts.length - 1];
    return filename;
  }
  return (
    <div className="video-player">
      {videos.map((video, index) => (
        <video key={index} className="video" controls>
          <source
            src={`https://newsapi-iota.vercel.app/${func(video.video)}`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
};

export default VideoPlayer;
