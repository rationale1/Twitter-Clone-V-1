import React from "react";
import "./options.css";
import { Avatar } from "@material-ui/core";
import { Twitter } from "@material-ui/icons";
import { FavoriteBorder, Person } from "@material-ui/icons";

const WidgetOptions = () => {
  return (
    <div className="options d-flex column gap-1">
      <div className="options__top d-flex ai-center">
        <div className="d-flex ai-center gap-1">
          <Avatar src="assets/Matrix.jpg" />
          <div>
            <h6>Code With Akky</h6>
            <span>@vikky_im</span>
          </div>
        </div>

        <Twitter className="twitter__icon" />
      </div>

      <div className="options__middle">
        <p>Learn Programming with HTML, CSS and JavaScript</p>
      </div>

      <div>
        <img src="assets/vintage1.jpg" alt="widgets" />
      </div>

      <div className="option__bottom">
        <div className="d-flex ai-center">
          <FavoriteBorder />
          <span>3</span>
        </div>

        <div className="option__bottomRight d-flex ai-center">
          <Person />
          <p>Programming is fun</p>
        </div>
      </div>
    </div>
  );
};

export default WidgetOptions;
