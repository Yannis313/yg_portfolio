import React, { useState, useRef, useEffect } from "react";
import "../styles/Navbars.css";

export default function NavbarMobile({ onSelect }) {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleClick = (type) => {
    onSelect?.(type);          
    setDropdownOpen(false); 
    setTimeout(() => setOpen(false), 100);
  };

  return (
    <nav className="navbar-mobile" ref={ref}>
      <div
        className="toggle-navbar"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((s) => !s);
        }}
      >
        ☰
      </div>

      {open && (
        <div className="liens-navbar-mobile active">
          <a href="#" onClick={(e) => { e.preventDefault(); handleClick("home"); }}>home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); handleClick("education"); }}>education</a>
          <a href="#" onClick={(e) => { e.preventDefault(); handleClick("about"); }}>about</a>

          <a href="#" onClick={(e) => { e.preventDefault(); handleClick("skills"); }}>skills</a>

          <a href="#" onClick={(e) => { e.preventDefault(); handleClick("work"); }}>work</a>
          <a href="#" onClick={(e) => { e.preventDefault(); handleClick("contact"); }}>contact</a>
        </div>
      )}
    </nav>
  );
}


