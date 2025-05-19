// src/components/Experiment/VisualizationPanel.tsx
"use client";

import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ExperimentData } from "@/lib/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// BUG: This component has display issues on smaller screens
export default function VisualizationPanel({ data }: { data: ExperimentData }) {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (data) {
      setChartData({
        labels: data.timePoints,
        datasets: [
          {
            label: "Energy (kcal/mol)",
            data: data.energyValues,
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgba(75, 192, 192, 0.5)",
          },
        ],
      });
    }
  }, [data]);

  const options = {
    // Bug: No responsive option
    maintainAspectRatio: true, // This causes issues on small screens
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <div className="visualization-panel p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-3">Energy Profile</h2>
      {/* Bug: No container with proper styling for responsive display */}
      <div className="chart-container">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
