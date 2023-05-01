import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Previous Scores</h2>
      <Line
        data={chartData}
        options={{
          scales: {
            x: {
              type: "time",
            },
          },
          plugins: {
            title: {
              display: true,
              text: "GAD-7= Blue     ||      PHQ-9= Red",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
export default LineChart;
