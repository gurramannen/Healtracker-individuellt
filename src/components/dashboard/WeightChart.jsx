import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WeightChart = ({ weightData }) => {
  // Omvandla viktData (array med objekt {date, weight}) till etiketter och datapunkter
  const labels = weightData.map(entry => entry.date);
  const dataPoints = weightData.map(entry => entry.weight);

  const data = {
    labels,
    datasets: [
      {
        label: "Vikt (kg)",
        data: dataPoints,
        fill: false,
        borderColor: "#4FD1C5",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Viktprogression",
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default WeightChart;
