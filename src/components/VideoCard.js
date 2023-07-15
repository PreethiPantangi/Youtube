import React from "react";

const VideoCard = ({ videoInfo }) => {

  const formatTimeSince = (dateString) => {
    const currentDate = new Date();
    const previousDate = new Date(dateString);

    const seconds = Math.floor((currentDate - previousDate) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years >= 1) {
      return years === 1 ? "1 year ago" : `${years} years ago`;
    } else if (months >= 1) {
      return months === 1 ? "1 month ago" : `${months} months ago`;
    } else if (days >= 1) {
      return days === 1 ? "1 day ago" : `${days} days ago`;
    } else if (hours >= 1) {
      return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    } else if (minutes >= 1) {
      return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    } else {
      return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
    }
  };

  const formatViews = (views) => {
    if (views >= 1000000000) {
      return (views / 1000000000).toFixed(1) + "B";
    } else if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + "K";
    } else {
      return views.toString();
    }
  };

  if (!videoInfo) return null;

  const { snippet, statistics } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="m-5 w-96 cursor-pointer">
      <img src={thumbnails.medium.url} alt={title} className="rounded-xl w-96" />
      <ul className="m-2">
        <li>
          {channelTitle} | {title}
        </li>
        <li className="text-sm font-extralight">{channelTitle}</li>
      </ul>
      <div className="flex m-2 justify-between font-extralight">
        <p>{formatViews(statistics.viewCount)}views</p>
        <p>{formatTimeSince(snippet.publishedAt)}</p>
      </div>
    </div>
  );
};

export default VideoCard;
