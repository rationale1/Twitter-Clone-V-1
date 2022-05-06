import React, { useState, useEffect } from "react";
import "./profile.css";

import Feed from "../../components/Feed/Feed";
import RightBar from "../../components/RightBar/RightBar";
import SideBar from "../../components/SideBar/SideBar";
import { useParams } from "react-router";

import axios from "axios";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const url = `http://localhost:5000/api/users/${id}`;

        const { data } = await axios.get(url);

        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div className="profile d-flex">
      <SideBar />

      <div className="profileRight">
        <div className="profileRight__top">
          <div className="profileCover">
            <img
              src="/assets/vintage2.jpg"
              alt="profile"
              className="profileCover__img"
            />

            <img
              src="/assets/vintage4.jpg"
              alt="profile"
              className="profileCover__pic"
            />
          </div>

          <div className="profileInfo d-flex jc-center ai-center">
            <h4 className="profileInfo__name">{user && user?.username}</h4>

            <span className="profile_desc">
              {user.desc ? user?.desc : "No description Yet"}
            </span>
          </div>
        </div>

        <div className="profileRight__bottom d-flex">
          <Feed id={id} />

          <RightBar profile user={user} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
