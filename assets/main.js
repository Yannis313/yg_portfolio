document.addEventListener("DOMContentLoaded", () => {
  // ---HOMEPAGE ET NAVBAR (DROPDOWN)---
  const dropdown = document.querySelector(".dropdown-desktop");
  const dropdownBtn = document.querySelector(".dropdown-button-desktop");

  dropdownBtn.addEventListener("click", (e) => {

    dropdown.classList.add("active");
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });

        // ---NAVBAR MOBILE---

  const toggleButton = document.getElementById("toggle-navbar");
  const navMobile = document.getElementById("liens-navbar-mobile");

  toggleButton.addEventListener("click", () => {
    navMobile.classList.toggle("active");
  });

  const dropdownMobile = document.querySelector(".dropdown-mobile");
  const dropdownBtnMobile = document.querySelector(".dropdown-button-mobile");

  dropdownBtnMobile.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownMobile.classList.toggle("active");
  });

  // ---TECHNODIV ET TERMINAL---

  const terminal = document.querySelector('.terminal-skills-project-container');
  const liensSkills = document.querySelectorAll('.liens-dropdown-desktop a[href="#"], .liens-dropdown-mobile a[href="#"]');

  liensSkills.forEach((lien) => {
    lien.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation()

      const lienText = lien.textContent.trim().toLowerCase();

      dropdown.classList.remove("active");
      dropdownMobile.classList.remove("active");

      terminal.classList.add("active");

      if (lienText === "skills") {
        terminal.innerHTML = ` 
          <div class="terminal-content">
            <div class="initializer" id="initializer">
              <p>~ preparing terminal</p>
              <div class="loader"></div>
            </div>
            <div class="loading-projects" id="loading-projects">
              <p>~ updating skills & projects</p>
              <div class="loader"></div>
            </div>
            <div class="press-skills" id="press-skills">
              <p>-> enter :</p>
              <p>   --- SKILLS to display skills</p>
              <p>   --- PROJECTS to display projects</p>
              <p class="beginator" id="beginator">-></p>
            </div>
          </div>
        `;
          setTimeout(() => {
            document.getElementById('loading-projects').style.display = "flex";
          }, 2000);
          setTimeout(() => {
            document.getElementById('press-skills').style.display = "block";
          }, 4000);
          setTimeout(() => {
            document.getElementById('beginator').style.display = "block";
          }, 4200);
          setTimeout(() => {
            document.getElementById('initializer').style.display = "none";
            document.getElementById('loading-projects').style.display = "none";
          }, 6000);
      } else if (lienText === "projects") {
        terminal.innerHTML = `
          <div class="terminal-content">
            <h2>🚀 Projects</h2>
            <p>Portfolio, Web App, API Node...</p>
          </div>
        `;
      }
    })
  })

  if (terminal) {
    document.addEventListener("click", (e) => {
      if (!terminal.contains(e.target)) {
        terminal.classList.remove("active");
      }
    });
  }
});