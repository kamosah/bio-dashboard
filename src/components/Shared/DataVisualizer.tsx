// src/components/Shared/DataVisualizer.tsx - Component with memory leak
"use client";

import { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { ChartData } from "@/lib/types";

// BUG: This component has a memory leak
export default function DataVisualizer({
  data,
  title,
}: {
  data: ChartData;
  title?: string;
}) {
  const [chartData, setChartData] = useState<any>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Process data for visualization
    if (data) {
      setChartData({
        labels: data.labels,
        datasets: [
          {
            label: title || "Data Visualization",
            data: data.values,
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      });
    }

    // Bug: Sets up an interval but never clears it
    intervalRef.current = setInterval(() => {
      // Simulates real-time data updates
      console.log("Checking for updates...");
    }, 5000);

    // No cleanup function to clear the interval
    return () => {
      // This cleanup function is never called, leading to a memory leak
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [data, title]);

  if (!chartData) {
    return <div>Loading visualization...</div>;
  }

  return (
    <div className="data-visualizer">
      <h3 className="text-lg font-medium mb-2">
        {title || "Data Visualization"}
      </h3>
      <div className="chart-container">
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
            },
          }}
        />
      </div>
    </div>
  );
}
