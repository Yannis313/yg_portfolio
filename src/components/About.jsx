import React from "react";
import "../styles/About.css";
import SoftSkillsDiagram from "./SoftSkillsDiagram";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-grid">

        {/* PHOTO + IDENTITÉ */}
        <div className="about-photo card-glass">
          <img src="/images/photoid.jpg" alt="portrait" />
          <h2>Yannis Gaspard</h2>
          <p>Etudiant Pré-MsC Architecte Systèmes d'Information</p>
        </div>

        {/* DESCRIPTION */}
        <div className="about-description card-glass">
          <h3>À propos de moi</h3>
          <p>
            Fasciné par l'informatique, l'innovation et le monde de la tech, j'ai d'abord commencé
            mon parcours dans le marketing digital avant de me lancer dans le développement logiciel. <br></br>
            Après un Master à l'IAE de Toulouse, j'ai commencé par le bootcamp du Wagon avant d'intégrer le MsC
            Architecte Systèmes d'Information d'Epitech. <br></br>
            J’aime concevoir des interfaces orientées utilisateurs, efficaces et performantes, en soignant
            l'UX et l'UI pour des expériences satisfaisantes et modernes. Passionné par le développement produit, 
            c'est la construction d'outils pertinents, utiles et accessibles qui m'enthousiasme le plus.
          </p>
        </div>

        {/* SOFT SKILLS */}
        <div className="about-softskills card-glass">
          <h3>Soft Skills</h3>
          <SoftSkillsDiagram />
        </div>

        {/* HOBBIES */}
        <div className="about-hobbies card-glass">
          <h3>Loisirs & Passions</h3>
          <div className="hobbies-grid">
            <span>🎞️ Cinéma</span>
            <span>🎨 Street-Art & Danse</span>
            <span>🏃 Running & Trail</span>
            <span>♟️ Echecs</span>
            <span>📖 Lecture</span>
          </div>
        </div>

        {/* LIENS */}
        <div className="about-links card-glass">
          <h3>Réseaux & Contact</h3>
            <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/github_logo.png" alt="GitHub" className="social-icon" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin_logo.png" alt="LinkedIn" className="social-icon" />
                </a>
                <a href="mailto:yann@example.com">
                <img src="/images/email_icon.png" alt="E-mail" className="social-icon" />
                </a>
                <a href="/files/CV_YANNIS_GASPARD.pdf" download>
                <img src="/images/cv_icon.png" alt="Télécharger le CV" className="social-icon" />
                </a>
            </div>
        </div>

      </div>
    </section>
  );
}
