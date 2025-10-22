import React, { useEffect, useState, useRef } from "react";
import "../styles/Terminal.css";

const Terminal = ({ active, content, onClose }) => {
  const [showInitializer, setShowInitializer] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showPressSkills, setShowPressSkills] = useState(false);
  const [showBeginator, setShowBeginator] = useState(false);
  const terminalRef = useRef(null);

  // 🔹 Ferme le terminal si on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (terminalRef.current && !terminalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [onClose]);

  // 🔹 Gère l’animation "skills"
  useEffect(() => {
    if (!active || content !== "skills") return;

    // Reset
    setShowInitializer(true);
    setShowLoading(false);
    setShowPressSkills(false);
    setShowBeginator(false);

    // Timers pour l'animation
    const loadingTimer = setTimeout(() => setShowLoading(true), 2000);
    const pressSkillsTimer = setTimeout(() => setShowPressSkills(true), 4000);
    const beginatorTimer = setTimeout(() => setShowBeginator(true), 4200);
    const hideTimer = setTimeout(() => {
      setShowInitializer(false);
      setShowLoading(false);
    }, 6000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(pressSkillsTimer);
      clearTimeout(beginatorTimer);
      clearTimeout(hideTimer);
    };
  }, [active, content]);

  if (!active) return null;

  return (
    <div
      ref={terminalRef}
      className={`terminal-skills-project-container ${active ? "active" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      {content === "skills" && (
        <div className="terminal-content">
          <div className={`initializer ${showInitializer ? "active" : ""}`} style={{ display: showInitializer ? 'flex' : 'none' }}>
            <span>~ preparing terminal</span>
            <div className="loader"></div>
          </div>

          <div className={`loading-projects ${showLoading ? "active" : ""}`} style={{ display: showLoading ? 'flex' : 'none' }}>
            <span>~ updating skills & projects</span>
            <div className="loader"></div>
          </div>

          <div className={`press-skills ${showPressSkills ? "active" : ""}`}>
            <p>usage : type</p>
            <p>   --- SKILLS to display skills</p>
            <p>   --- PROJECTS to display projects</p>
            <p className={`beginator ${showBeginator ? "active" : ""}`}>~</p>
          </div>
        </div>
      )}

      {content === "projects" && (
        <div className="terminal-content">
          <h2>🚀 Projects</h2>
          <p>Portfolio, Web App, API Node...</p>
        </div>
      )}
    </div>
  );
};

export default Terminal;
