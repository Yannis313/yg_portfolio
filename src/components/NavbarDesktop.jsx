import React from "react";
import "../styles/Navbars.css";
import Dropdown from "./Dropdown.jsx";
import portfoliologo from "../assets/images/portfoliologo.png";

export default function NavbarDesktop({ onSelect }) {
  return (
    <nav className="navbar-desktop">
      <div className="logo-desktop">
        <img src={portfoliologo} className="logo-desktop" alt="logo portfolio yg" />
      </div>

      <div className="liens-navbar-desktop">
        <a href="#" onClick={(e) => { e.preventDefault(); onSelect?.("home"); }}>home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onSelect?.("about"); }}>about</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onSelect?.("education"); }}>education</a>

        {/* on utilise notre Dropdown React */}
        <Dropdown onSelect={onSelect} />

        <a href="#" onClick={(e) => { e.preventDefault(); onSelect?.("work"); }}>work</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onSelect?.("contact"); }}>contact</a>
      </div>
    </nav>
  );
}
