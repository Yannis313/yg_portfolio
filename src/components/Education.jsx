import React from "react";
import "../styles/Education.css";

export default function Education() {
  const educationData = [
    {
      year: "2025 - 2026",
      title: "Pré-Master — Nom de l’école",
      description: "Programme préparatoire en design et développement web.",
    },
    {
      year: "2022 - 2025",
      title: "Licence Informatique — Université …",
      description: "Spécialisation front-end, UX/UI, projets web.",
    },
    {
      year: "2020 - 2022",
      title: "BTS SIO — Option SLAM",
      description: "Dév web, algo, conception logicielle.",
    },
  ];

  return (
    <div className="education-overlay">
      {/* Ligne en tirets qui se trace */}
        <svg
            className="timeline-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 100"
            preserveAspectRatio="none"
            >
            <line
                x1="5"
                y1="0"
                x2="5"
                y2="100"
                className="timeline-line"
            />
        </svg>

      <div className="education-list">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="education-item"
            style={{ animationDelay: `${index * 0.35 + 0.8}s` }}
          >
            <div className="edu-year">{edu.year}</div>
            <div className="edu-content">
              <h3>{edu.title}</h3>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
