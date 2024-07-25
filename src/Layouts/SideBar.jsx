import React from "react";
import "../styles/sideBar.css";

const SideBar = ({ header, leftSide, children }) => {
  return (
    <section className="layout">
      <div className="header">{header || <div>Default Header</div>}</div>
      <div className="leftSide">{leftSide || <div>Default Left Side</div>}</div>
      <div className="body">{children || <div>Default Body Content</div>}</div>
    </section>
  );
};

export default SideBar;
