import { useState, useEffect } from 'react'
import NavbarDesktop from "./components/NavbarDesktop.jsx";
import NavbarMobile from "./components/NavbarMobile.jsx";
import HeroTitleDiv from './components/HeroTitleDiv.jsx';
import Terminal from "./components/Terminal.jsx";
import Education from './components/Education.jsx';
import Work from "./components/Work.jsx";

function App() {
  const [terminalContent, setTerminalContent] = useState(null);
  const [terminalActive, setTerminalActive] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 890);
  const [activeSection, setActiveSection] = useState("home");

  const handleTerminal = (type) => {
    if (type === "skills" || type === "projects") {
      setTerminalContent(type);
      setTerminalActive(true);
      setActiveSection("home");
    } else if (type === "education") {
      setTerminalActive(false);
      setActiveSection("education");
    } else if (type === "work") {
      setTerminalActive(false);
      setActiveSection("work");
    } else if (type === "home") {
      setTerminalActive(false);
      setActiveSection("home");
    } 
  };

  const closeTerminal = () => setTerminalActive(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 890);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("TerminalActive:", terminalActive, "Content:", terminalContent);

  return (
    <>
      <div className="home_body">
          {isDesktop ? (
            <NavbarDesktop onSelect={handleTerminal} />
            ) : (
            <NavbarMobile onSelect={handleTerminal} />
          )}
          {activeSection === "home" && (
            <>
              <HeroTitleDiv />
              <Terminal
                active={terminalActive}
                content={terminalContent}
                onClose={closeTerminal}
              />
            </>
          )}

          {activeSection === "education" && <Education />}
          {activeSection === "work" && <Work />}
      </div>
    </>
  );
}

export default App;
