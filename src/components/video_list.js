import React from 'react';
import VideoCard from "./video_card";

const VideoList = (props) => {
  const videoCard = props.videos.map( (video, index) => {
    return <VideoCard key={index} video={video} />;
  });

  return (
    <div>
      {videoCard}
    </div>
  );
};

export default VideoList;