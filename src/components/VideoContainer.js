import React, { useEffect, useState } from 'react'
import {YOUTUBE_MOST_POPULAR_VIDEOS_API} from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getMostPopularVideos();
  },[])

  const getMostPopularVideos = async () => {
    const data = await fetch(YOUTUBE_MOST_POPULAR_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  if(!videos) return null;

  return (
    <div className='flex flex-wrap'>
      {
        videos.map((video) => <VideoCard videoInfo = {video}/>)
      }
    </div>
  )
}

export default VideoContainer