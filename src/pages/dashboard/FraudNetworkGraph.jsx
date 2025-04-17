// import React from "react";
// import { Scatter } from "react-chartjs-2";
// import { Chart as ChartJS, Tooltip, Legend, LinearScale, PointElement } from "chart.js";

// ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

// const FraudNetworkGraph = ({ transaction }) => {
//   if (!transaction) return null; // Prevents rendering if transaction is undefined

//   // Simulated fraud-linked accounts
//   const data = {
//     datasets: [
//       {
//         label: "Fraud Network",
//         data: [
//           { x: 10, y: 20, label: "Mule Account 1" },
//           { x: 15, y: 35, label: "Mule Account 2" },
//           { x: 25, y: 45, label: transaction.name }, // Main Transaction
//         ],
//         backgroundColor: ["red", "orange", "blue"],
//         pointRadius: 8,
//         pointHoverRadius: 10,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       tooltip: {
//         callbacks: {
//           label: (context) => context.raw.label || `(${context.raw.x}, ${context.raw.y})`,
//         },
//       },
//       legend: { display: false },
//     },
//     scales: {
//       x: { title: { display: true, text: "Transaction Link" } },
//       y: { title: { display: true, text: "Risk Level" } },
//     },
//   };

//   return <Scatter data={data} options={options} />;
// };

// export default FraudNetworkGraph;
