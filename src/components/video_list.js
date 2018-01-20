import React from 'react';
import VideoCard from "./video_card";

const VideoList = ({videos, onSelectVideo}) => {
  const videoCard = videos.map( (video, index) => {
    return (
      <VideoCard
        onSelectVideo={onSelectVideo}
        key={index}
        video={video} />
    );
  });

  return (
    <div className="list-group col-md-4">
      {videoCard}
    </div>
  );
};

export default VideoList;