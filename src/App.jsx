import { useState, useEffect } from 'react'
import NavbarDesktop from "./components/NavbarDesktop.jsx";
import NavbarMobile from "./components/NavbarMobile.jsx";
import Terminal from "./components/Terminal.jsx";
import HeroTitleDiv from './components/HeroTitleDiv.jsx';

function App() {
  const [terminalContent, setTerminalContent] = useState(null);
  const [terminalActive, setTerminalActive] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 890);

  const handleTerminal = (type) => {
    if (type === "skills") {
      setTerminalContent("skills");
    } else if (type === "projects") {
      setTerminalContent("projects");
    }
    setTerminalActive(true);
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
          <HeroTitleDiv />
          <Terminal
            active={terminalActive}
            content={terminalContent}
            onClose={closeTerminal}
          />
      </div>
    </>
  );
}

export default App;
