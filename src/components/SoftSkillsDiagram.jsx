import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function SoftSkillsChart() {
  const data = {
    labels: ["Dynamisme", "Travail d'équipe", "Communication", "Autonomie", "Rigueur"],
    datasets: [
      {
        label: "Soft Skills",
        data: [9, 8, 8, 7, 9], // valeurs sur 10
        backgroundColor: "rgba(0, 255, 157, 0.2)",
        borderColor: "#00ff9d",
        borderWidth: 2,
        pointBackgroundColor: "#00ff9d",
        pointBorderColor: "#000",
        pointHoverBackgroundColor: "#fff",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        angleLines: {
          color: "rgba(255,255,255,0.1)",
        },
        grid: {
          color: "rgba(255,255,255,0.1)",
        },
        suggestedMin: 0,
        suggestedMax: 10,
        ticks: {
          display: false,
        },
        pointLabels: {
          color: "rgba(255,255,255,0.9)",
          font: { size: 10.5, family: 'LumiosTypewriter' },
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="softskills-chart-container">
      <Radar data={data} options={options} />
    </div>
  );
}