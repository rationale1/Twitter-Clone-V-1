import React from "react";
import "./sidebar.css";
import {
  Twitter,
  Home,
  Notifications,
  MailOutlineOutlined,
  Bookmark,
  ListAlt,
  PermIdentity,
  MoreHoriz,
  Search,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";

import SidebarOptions from "./SidebarOptions";

const SideBar = () => {
  const options = [
    { id: 1, Icon: Home, text: "Home", active: true },
    { id: 2, Icon: Search, text: "Explore" },
    { id: 3, Icon: Notifications, text: "Notifications" },
    { id: 4, Icon: MailOutlineOutlined, text: "Message" },
    { id: 5, Icon: Bookmark, text: "Bookmark" },
    { id: 6, Icon: ListAlt, text: "Lists" },
    { id: 7, Icon: PermIdentity, text: "Profile" },
    { id: 8, Icon: MoreHoriz, text: "More" },
  ];

  return (
    <div className="sidebar">
      <Twitter className="sidebar__twitter" />

      <div className="d-flex d-column gap-2">
        {options.map(({ id, Icon, text, active }) => (
          <SidebarOptions key={id} Icon={Icon} text={text} active={active} />
        ))}
      </div>

      <Button className="sidebar__tweet" variant="outlined">
        Tweet
      </Button>
    </div>
  );
};

export default SideBar;
