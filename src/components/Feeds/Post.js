import React from "react";
import "./post.css";
import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from "@material-ui/icons";

const Post = () => {
  return (
    <div className="post d-flex gap-2">
      <div className="post__avatar">
        <Avatar src="assets/images6.jpg" />
      </div>

      <div className="post__body d-flex d-column gap-2">
        <div className="post__header d-flex ai-center">
          <h3>CodeWithAkky</h3>
          <span className="post__headerSpecial d-flex ai-center gap-1">
            <VerifiedUser className="post__badge" />
            @username
          </span>
        </div>

        <div className="post__desc">
          <p>This is the Description</p>
        </div>

        <img src="assets/images10.jpg" alt="post" />

        <div className="post__footer d-flex ai-center">
          <ChatBubbleOutline className="post__icon" htmlColor="yellow" />

          <Repeat className="post__icon" htmlColor="orange" />

          <FavoriteBorder className="post__icon" htmlColor="red" />

          <Publish className="post__icon invert" htmlColor="green" />
        </div>
      </div>
    </div>
  );
};

export default Post;
