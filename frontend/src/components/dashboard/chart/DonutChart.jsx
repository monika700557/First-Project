// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import Dropdown from "react-bootstrap/Dropdown";
import ApexCharts from "react-apexcharts";
import { useState } from "react";
import { Circle } from 'lucide-react'
// import CircleIcon from "@mui/icons-material/Circle";

// const dropdownItems = [
//   { id: 1, label: "Action", href: "#/action-1" },
//   { id: 2, label: "Another action", href: "#/action-2" },
//   { id: 3, label: "Something else", href: "#/action-3" },
// ];

const chartItems = [
  { color: "blue", label: "Invoiced", amount: "$5,132" },
  { color: "green", label: "Received", amount: "$2,132" },
  { color: "red", label: "Pending", amount: "$1,132" }
];

// Method to get color class from color name
const getColorClass = (color) => {
  switch (color) {
    case "blue":
      return "text-blue-custom";
    case "green":
      return "text-green-500"; // Tailwind green color
    case "red":
      return "text-red-custom";
    default:
      return "text-gray-500"; // Fallback color
  }
};

const DonutChart = () => {
  // Static data
  const countryNames = ["Overdue", "Draft", "Paid", "Unpaid"];
  const medals = [39, 38, 28, 89];

  const chartOptions = {
    labels: countryNames,
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
          },
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false, // Hide the legend
    },
  };

  return (
    <div className="w-full h-full ">
      <div className="bg-white shadow-[0_0_13px_0_rgba(82,63,105,0.05)] mt-0 mb-7.5 rounded-xl w-full border-0">
        <div className="border-b border-gray-200 flex justify-between items-center">
          <h5 className="text-base font-semibold p-4 text-gray-800 leading-tight">
            Invoice Analytics
          </h5>
          <div className="text-base font-semibold p-4 text-gray-800 leading-tight">
            Hello
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center">
                 <ApexCharts
            type="donut"
            width={400}  // Set the desired width in pixels
            height={400} // Set the desired height in pixels
            series={medals}
            options={chartOptions}
          />
        </div>

        <div className="flex items-center justify-center gap-x-6 p-4 text-[#2f2e2e]">
          {chartItems.map((item, index) => (
            <div className="flex flex-col" key={index}>
              <p className="flex items-center">
                <Circle
                  className={`mr-2 ${getColorClass(item.color)} text-xs`}
                  style={{ fontSize: '15px' }}
                />
                {item.label}
              </p>
              <h5 className="text-lg">{item.amount}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
