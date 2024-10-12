import React from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";
import { PAGE_OPTIONS } from "../../config";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-sub-container">
        <div style={{ display: "flex", gap: "12px" }}>
          <CiMenuBurger className="nav-menu-icon" size={20} />
          <img className="main-logo" src={Logo} alt="logo" />
        </div>
        <h2 className="nav-heading">logo</h2>
        <ul className="nav-list-container1">
          <li className="nav-list-item1">
            <CiSearch className="nav-icons" />
          </li>
          <li className="nav-list-item1">
            <CiHeart className="nav-icons" />
          </li>
          <li className="nav-list-item1">
            <BsHandbag className="nav-icons" />
          </li>
          <li className="nav-list-item1">
            <CgProfile className="nav-icons" />
          </li>
          <li className="nav-list-item1">
            <select name="language" className="language-selector">
              <option value="english">ENG</option>
              <option value="hindi">HIN</option>
            </select>
          </li>
        </ul>
      </div>
      <ul className="nav-list-container2">
        {PAGE_OPTIONS.map((item) => (
          <li key={item} className="nav-list-item2">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
