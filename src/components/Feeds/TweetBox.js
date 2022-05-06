import React from "react";
import "./tweetbox.css";
import { Avatar, Button } from "@material-ui/core";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form className="d-flex d-column gap-2">
        <div className="tweetBox__input d-flex ai-center gap-1">
          <Avatar src="assets/images6.jpg" />

          <input type="text" placeholder="What's happening" />
        </div>

        <input
          type="text"
          className="tweetBox__imgInput"
          placeholder="Optional Enter Image URL"
        />

        <Button className="tweetBox__tweetBtn">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
