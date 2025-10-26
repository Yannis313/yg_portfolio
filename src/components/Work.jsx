import React, { useState } from "react";
import "../styles/Work.css";
import silae_logo from "../assets/images/silae_logo.png";
import bleexo_logo from "../assets/images/bleexo_logo.png";
import vyfe_logo from "../assets/images/vyfe_logo.png";
import vinylit_logo from "../assets/images/vinylit_logo.png";

export default function Work() {
  const works = [
    {
      title: "Team Lead SDR Inbound",
      company: "Silae",
      year: "2022 - 2023",
      description:
        "Management Team SDR Inbound. Gestion stratégie lead generation. Construction d'une stratégie social selling.",
      image: silae_logo,
    },
    {
      title: "Sales Development Representative",
      company: "Bleexo",
      year: "2021 - 2022",
      description:
        "Prospection outbound & inbound (call, mailing, social selling). Implémentation d'outils sales automation.",
      image: bleexo_logo,
    },
    {
      title: "Business Developper & Digital Marketing Project Manager",
      company: "Vyfe",
      year: "2019 - 2020",
      description:
        "Lead generation & qualification. Création architecture SEO et refonte site web (Wordpress). Mailings aquisition & fidélisation.",
      image: vyfe_logo,
    },
    {
      title: "Communication & E-business Assistant",
      company: "Vinyl It",
      year: "2016",
      description:
        "Community Management & Gestion catalogue (Magento)",
      image: vinylit_logo,
    },
  ];

  const [current, setCurrent] = useState(0);
  const nextWork = () => setCurrent((prev) => (prev + 1) % works.length);
  const prevWork = () =>
    setCurrent((prev) => (prev - 1 + works.length) % works.length);

  const work = works[current];

  return (
    <section className="work-section">
      {/* Flèche gauche */}
      <div className="arrow left" onClick={prevWork}>
        &#10094;
      </div>

      <div className="work-content">
        {/* Texte gauche */}
        <div className="work-left">
          <h2>Work Experiences</h2>
          <p>
            Mes parcours et mes <span>expériences professionnelles</span>.
          </p>
        </div>

        {/* Image centrale */}
        <div className="work-image">
          <img src={work.image} alt={work.company} />
        </div>

        {/* Détails droite */}
        <div className="work-right">
          <h3>{work.company}</h3>
          <p className="work-year">{work.year}</p>
          <p className="work-desc">{work.description}</p>
        </div>
      </div>

      {/* Flèche droite */}
      <div className="arrow right" onClick={nextWork}>
        &#10095;
      </div>
    </section>
  );
}
