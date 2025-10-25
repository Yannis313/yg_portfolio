import React from "react";
import "../styles/Education.css";

export default function Education() {
  const educationData = [
    {
      year: "2025 - 2028",
      title: "Pre-MsC & MsC Architecte Systèmes d'Information",
      description: "Epitech",
    },
    {
      year: "2024",
      title: "Bootcamp Développement Web",
      description: "Le Wagon",
    },
    {
      year: "2017 - 2020",
      title: "Master II — Marketing Digital",
      description: "Toulouse School of Management (IAE)",
    },
    {
      year: "2016 - 2017",
      title: "Licence — International Business & Trade",
      description: "Ming Chuan University (Taïwan)",
    },
    {
      year: "2014 - 2016",
      title: "DUT— Techniques de Commercialisation",
      description: "Université Paul Sabatier Toulouse III",
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
