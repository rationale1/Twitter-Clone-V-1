import React from "react";
import "./feeds.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

const Feeds = () => {
  return (
    <div className="feeds">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <div className="d-flex d-column gap-2">
        <TweetBox />

        <Post />

        <Post />

        <Post />

        <Post />
      </div>
    </div>
  );
};

export default Feeds;
