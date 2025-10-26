import React, { useState, useRef, useEffect } from "react";
import "../styles/Navbars.css";

export default function NavbarMobile({ onSelect }) {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef();

  // 🔹 Fermer le menu si clic à l'extérieur
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

  // 🔹 Fonction pour gérer le clic sur un lien
  const handleClick = (type) => {
    onSelect?.(type);          // active le terminal si type === "skills" ou "projects"
    setDropdownOpen(false);     // ferme le dropdown
    setTimeout(() => setOpen(false), 100); // ferme le menu principal après un petit délai
  };

  return (
    <nav className="navbar-mobile" ref={ref}>
      {/* Toggle menu */}
      <div
        className="toggle-navbar"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((s) => !s);
        }}
      >
        ☰
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="liens-navbar-mobile active">
          <a href="#" onClick={(e) => { e.preventDefault(); handleClick("home"); }}>home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); handleClick("education"); }}>education</a>

          {/* Dropdown skills */}
          <div className="dropdown-mobile">
            <div
              className="dropdown-button-mobile"
              onClick={(e) => { e.stopPropagation(); setDropdownOpen((s) => !s); }}
            >
              skills ◡
            </div>

            {dropdownOpen && (
              <div className="liens-dropdown-mobile" onClick={(e) => e.stopPropagation()}>
                <a href="#" onClick={(e) => { e.preventDefault(); handleClick("skills"); }}>skills</a>
                <a href="#" onClick={(e) => { e.preventDefault(); handleClick("projects"); }}>projects</a>
              </div>
            )}
          </div>

          <a href="#" onClick={(e) => { e.preventDefault(); handleClick("work"); }}>work</a>
          <a href="#" onClick={(e) => { e.preventDefault(); handleClick("contact"); }}>contact</a>
        </div>
      )}
    </nav>
  );
}


