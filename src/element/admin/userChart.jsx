'use client'

import { months } from "moment";
import React from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart, Legend, LinearScale, LineController, LineElement, PointElement, Title } from "chart.js";
Chart.register(CategoryScale, LinearScale, PointElement,LineElement, Title, Legend, );

const UserChart = () => {
  // const chartLabel = months({ count: 12 });
  // console.log(chartLabel);

  const data = {
    labels: ["Laki-laki", "Perempuan"],
    datasets: [
      {
        label: "Jenis Kelamin",
        data: [50, 80],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 1)",
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true, // Ensure the y-axis starts at zero
        type: "linear",
      },
      x: {
        type: "category",
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="m-4 w-[500px] h-[250px] text-white bg-white border">
      <Line data={data} options={options} />
    </div>
  );
};

export default UserChart;
