import React from "react";
import "../styles/Navbars.css";
import Dropdown from "./Dropdown.jsx";

export default function NavbarDesktop({ onSelect }) {
  return (
    <nav className="navbar-desktop">
      <div className="logo-desktop">
        <img src="/images/portfolio-logo.png" className="logo-desktop" alt="logo portfolio yg" />
      </div>

      <div className="liens-navbar-desktop">
        <a href="#" onClick={(e) => { e.preventDefault(); onSelect?.(null); }}>home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onSelect?.(null); }}>education</a>

        {/* on utilise notre Dropdown React */}
        <Dropdown onSelect={onSelect} />

        <a href="#" onClick={(e) => { e.preventDefault(); onSelect?.(null); }}>work</a>
        <a href="#" onClick={(e) => { e.preventDefault(); onSelect?.(null); }}>contact</a>
      </div>
    </nav>
  );
}
