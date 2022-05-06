import React from "react";
import "./sidebaroptions.css";

const SidebarOptions = ({ Icon, text, active }) => {
  return (
    <div className={`sidebaroptions d-flex ai-center ${active && "active"}`}>
      <Icon />

      <span>{text}</span>
    </div>
  );
};

export default SidebarOptions;
