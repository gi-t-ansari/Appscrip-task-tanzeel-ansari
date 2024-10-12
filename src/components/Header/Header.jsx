import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      {Array(3)
        .fill(0)
        .map((item, i) => (
          <div className="header-sub-container" key={i}>
            <LuLayoutDashboard className="header-logo" />{" "}
            <span>Lorem ipsum dolor</span>
          </div>
        ))}
    </header>
  );
};

export default Header;
