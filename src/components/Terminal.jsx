import React, { useEffect, useState, useRef } from "react";
import "../styles/Terminal.css";
import etiopath_project_portfolio from "../assets/images/etiopath_project_portfolio.png";
import jobboard_portfolio from "../assets/images/jobboard_portfolio.png";

const Terminal = ({ active, content, onClose }) => {
  const [showInitializer, setShowInitializer] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showPressSkills, setShowPressSkills] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [commandOutput, setCommandOutput] = useState(null);
  const [showBeginator, setShowBeginator] = useState(false);
  const [input, setInput] = useState("");
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

  useEffect(() => {
  if (active) {
    // reset complet à chaque ouverture du terminal
    setInput("");
    setCommandOutput(null);
  }
}, [active]);

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

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const command = userInput.trim().toLowerCase(); // 🔸 insensible à la casse
      if (command === "skills") {
        setCommandOutput("skills");
      } else if (command === "projects") {
        setCommandOutput("projects");
      } else {
        setCommandOutput("unknown");
      }
      setUserInput("");
    }
  };

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
            <p>usage</p>
            <p>   --- type SKILLS to display skills</p>
            <p>   --- type PROJECTS to display projects</p>
          </div>

          {/* 🔹 Zone de saisie utilisateur */}
          {showBeginator && (
            <>
              <div className="terminal-input-line">
                <span className="prompt">~</span>
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={handleCommand}
                  placeholder="type a command..."
                  autoFocus
                />
              </div>

              {/* 🔹 Résultat de la commande */}
              {commandOutput === "skills" && (
                <div className="terminal-output">
                  <pre className="terminal-table fade-in desktop-table">
                  {`
    ┌───────────────────────────────┬───────────────────────────────┐
    │           FRONTEND            │           BACKEND             │
    ├───────────────────────────────┼───────────────────────────────┤
    │ HTML / CSS     ●●●●●          │ Ruby          ●●●○○           │
    │ JavaScript     ●●●●○          │ NodeJS        ●●●○○           │
    │ React          ●●●○○          │ Java          ●●○○○           │
    │ TypeScript     ●●●○○          │ Python        ●●○○○           │
    └───────────────────────────────┴───────────────────────────────┘

    ┌───────────────────────────────┬───────────────────────────────┐
    │             BDD               │            OTHERS             │
    ├───────────────────────────────┼───────────────────────────────┤
    │ SQL ●●●○○                     │ Webflow       ●●●●○           │
    │                               │ Wordpress     ●●●○○           │
    │                               │ Docker        ●○○○○           │
    │                               │ Jenkins       ●○○○○           │
    └───────────────────────────────┴───────────────────────────────┘
                  `}
                  </pre>
                  <pre className="terminal-table fade-in mobile-table">
                    {`
    ──────────── FRONTEND ────────────

    HTML / CSS     ●●●●●
    JavaScript     ●●●●○
    React          ●●●○○
    TypeScript     ●●●○○

    ──────────── BACKEND ─────────────

    Ruby           ●●●○○
    NodeJS         ●●●○○
    Java           ●●○○○
    Python         ●●○○○

    ──────────── BDD ────────────────

    SQL            ●●●○○

    ──────────── OTHERS ─────────────

    Webflow        ●●●●○
    Wordpress      ●●●○○
    Docker         ●○○○○
    Jenkins        ●○○○○
                    `}
                  </pre>
                </div>
              )}

              {commandOutput === "projects" && (
                <div className="terminal-output projects-section">
                  <div className="project">
                    {/* DIV 1 – Titre */}
                    <div className="project-title">
                      <h3>Jobboard - [K]Reer</h3>
                      <p>2025</p>
                    </div>

                    {/* DIV 2 – Image */}
                    <div className="project-card">
                      <img src={jobboard_portfolio} alt="Portfolio preview" />
                    </div>

                    {/* DIV 3 – Description */}
                    <div className="project-description">
                      <p>
                        My personal portfolio built with <strong>React</strong>, featuring
                        an interactive terminal and smooth transitions.
                      </p>
                      <p className="techs">
                        <span>React</span> • <span>CSS</span> • <span>Vite</span>
                      </p>
                    </div>
                  </div>
                  <div className="project">
                    {/* DIV 1 – Titre */}
                    <div className="project-title">
                      <h3>Etiopath Website</h3>
                      <p>2024</p>
                    </div>

                    {/* DIV 2 – Image */}
                    <div className="project-card">
                      <img src={etiopath_project_portfolio} alt="Portfolio preview" />
                    </div>

                    {/* DIV 3 – Description */}
                    <div className="project-description">
                      <p>
                        My personal portfolio built with <strong>React</strong>, featuring
                        an interactive terminal and smooth transitions.
                      </p>
                      <p className="techs">
                        <span>React</span> • <span>CSS</span> • <span>Vite</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {commandOutput === "unknown" && (
                <div className="terminal-output error">
                  <p> command not found. try "SKILLS" or "PROJECTS".</p>
                </div>
              )}
            </>
          )}
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
