
import Chart from "react-apexcharts";
import React, { useState } from "react";

// const dropdownItems = [
//   { id: 1, label: "Action", href: "#/action-1" },
//   { id: 2, label: "Another action", href: "#/action-2" },
//   { id: 3, label: "Something else", href: "#/action-3" },
// ];

const metrics = [
  { label: 'Total Sales', value: '$1000', color: 'blue' },
  { label: 'Receipts', value: '$3000', color: '#22cc62' },
  { label: 'Expenses', value: '$1000', color: 'red' },
  { label: 'Earnings', value: '$7000', color: 'black' },
];

const BarChart = () => {
  const [state, setState] = useState({
    options: {
      colors: ["rgb(118, 56, 255)", "#FF9800"],
      chart: {
        id: "basic-bar",
        offsetX: 8,
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
      },
      yaxis: {
        min: 0,
        max: 250,
        tickAmount: 5,
        title: {
          text: 'Value (thousands)',
          style: {
            color: '#000',
            fontSize: '8px',
            fontFamily: 'circularstd, sans-serif',
          },
        },
        labels: {
          formatter: function (val) {
            return val !== undefined && val !== null ? val.toFixed(0) : '';
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          endingShape: 'rounded',
          columnWidth: '40%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 1,
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent'],
      },
    },
    series: [
      {
        name: "Received",
        data: [70, 150, 80, 180, 150, 230, 201, 91, 220, 204],
      },
      {
        name: "Pending",
        data: [23, 42, 35, 27, 43, 60, 20, 81, 180, 20],
      },
    ],
  });

  return (
    <div className="bg-white shadow-md p-4 rounded-md max-h-[85vh]  ">
      <div className="flex items-center justify-between border-b border-gray-200 pb-2">
        <h5 className="text-lg font-semibold text-gray-800">Sales Analytics</h5>
        <div className="flex-grow flex justify-end">

        </div>
        {/* <MoreVertIcon fontSize="small" /> */}
      </div>

      <div className="mt-2">
        <div className="flex gap-8 mt-2 mb-4">
          {metrics.map((metric, index) => (
            <div className="flex flex-col" key={index}>
              <span className="text-xs font-semibold">{metric.label}</span>
              <p className="text-2xl font-medium" style={{ color: metric.color }}>
                {metric.value}
              </p>
            </div>
          ))}
        </div>
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          width="100%"
          height={360}
        />
      </div>


    </div>
  );
};

export default BarChart;
