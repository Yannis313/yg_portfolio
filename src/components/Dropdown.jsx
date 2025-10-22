import React, { useState, useRef, useEffect } from "react";

export default function Dropdown({ onSelect }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const handleSelect = (e, name) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(false);
    onSelect?.(name);
  };

  return (
    <div className="dropdown-desktop" ref={ref}>
      <a
        href="#"
        className="dropdown-button-desktop"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
      >
        skills ◡
      </a>

      {open && (
        <div className="liens-dropdown-desktop">
          <a href="#" onClick={(e) => handleSelect(e, "skills")}>skills</a>
          <a href="#" onClick={(e) => handleSelect(e, "projects")}>projects</a>
        </div>
      )}
    </div>
  );
}
