import React from 'react'
import Chart from 'react-apexcharts'
import dayjs from 'dayjs'

const GraphTest = ({ items }) => {

    const data = {
        series: [
          {
            name: "Review",
            data: [10, 15, 30, 90, 40, 120, 100],
            // data: descriptions,  // Use descriptions for series data
          },
        ],
        options: {
          chart: {
            type: "line",
            height: "auto",
          },
    
          fill: {
            colors: ["#fff"],
            type: "gradient",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            // curve: "smooth",
            colors: ["#ff929f"],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          grid: {
            show: false,
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ],
            // type: "category", // Changed from 'datetime' to 'category' since names are not dates
            // categories: names, // Use names for x-axis categories
          },
          yaxis: {
            show: false
          },
          toolbar:{
            show: false
          },
          markers: {
            size: 0,
          }
        },
      };

      // Initial data
  const xAxisData = [
    "2024-07-1702:50:20",
    "2024-07-1607:35:19",
    "2024-07-1515:50:21",
    "2024-07-1416:50:18",
    "2024-07-1320:15:19",
    "2024-07-1220:16:18",
    "2024-07-1220:15:19",
    "2024-07-1215:14:21",
  ];

  const yAxisData = ["15", "10", "10", "14", "10", "15", "10", "9"];

  // Function to insert space and convert to date
  const formatDate = (str) => {
    return new Date(str.slice(0, 10) + " " + str.slice(10));
  };

  // Format x-axis data with date objects
  const formattedDates = xAxisData.map((dateStr) => formatDate(dateStr));

  // ApexCharts data configuration
  const data_2 = {
    series: [
      {
        name: "Review",
        data: yAxisData.map((value, index) => ({
          x: formattedDates[index],
          y: Number(value),
        })),
      },
    ],
    options: {
      chart: {
        type: "scatter",
        height: "auto",
        zoom: {
          enabled: true,
          type: 'xy',
        },
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: true, // Enable data labels to show Y values
        formatter: function (val) {
          return val.toString();
        },
        offsetY: -10,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      markers: {
        size: 8, // Size of the points
        colors: ["#ff929f"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 10, // Increase size on hover
          sizeOffset: 3,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          format: "dd/MM/yy HH:mm",
        },
        y: {
          formatter: function (val) {
            return `Value: ${val}`;
          },
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        show: true,
      },
      toolbar: {
        show: false,
      },
    },
  };


//###########highlighted points#########

  // const data_2 = {
  //   series: [
  //     {
  //       name: "Review",
  //       data: yAxisData.map((value, index) => ({
  //         x: formattedDates[index],
  //         y: Number(value),
  //       })),
  //     },
  //   ],
  //   options: {
  //     chart: {
  //       type: "scatter",
  //       height: "auto",
  //     },
  //     fill: {
  //       colors: ["#fff"],
  //       type: "gradient",
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     markers: {
  //       size: 5,
  //       colors: ["#ff929f"],
  //     },
  //     tooltip: {
  //       x: {
  //         format: "dd/MM/yy HH:mm",
  //       },
  //     },
  //     grid: {
  //       show: false,
  //     },
  //     xaxis: {
  //       type: "datetime",
  //     },
  //     yaxis: {
  //       show: true,
  //     },
  //     toolbar: {
  //       show: false,
  //     },
  //   },
  // };

//################Normal ####################

  // // ApexCharts data configuration
  // const data_2 = {
  //   series: [
  //     {
  //       name: "Review",
  //       data: yAxisData.map((value, index) => ({
  //         x: formattedDates[index],
  //         y: Number(value),
  //       })),
  //     },
  //   ],
  //   options: {
  //     chart: {
  //       type: "line",
  //       height: "auto",
  //     },
  //     fill: {
  //       colors: ["#fff"],
  //       type: "gradient",
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     stroke: {
  //       curve: "smooth",
  //       colors: ["#ff929f"],
  //     },
  //     tooltip: {
  //       x: {
  //         format: "dd/MM/yy HH:mm",
  //       },
  //     },
  //     grid: {
  //       show: false,
  //     },
  //     xaxis: {
  //       type: "datetime",
  //     },
  //     yaxis: {
  //       show: true,
  //     },
  //     toolbar: {
  //       show: false,
  //     },
  //   },
  // };

//#############Aggregate for median###################

  // // Aggregate data by date (calculate the median for same dates)
  // const aggregatedData = xAxisData.reduce((acc, curr, idx) => {
  //   const dateKey = dayjs(formatDate(curr)).format("YYYY-MM-DD");

  //   if (!acc[dateKey]) {
  //     acc[dateKey] = [];
  //   }
  //   acc[dateKey].push(Number(yAxisData[idx]));
  //   return acc;
  // }, {});

  // // Calculate the median for each date
  // const dates = Object.keys(aggregatedData).sort();
  // const medianYValues = dates.map((date) => {
  //   const values = aggregatedData[date];
  //   values.sort((a, b) => a - b);
  //   const mid = Math.floor(values.length / 2);

  //   return values.length % 2 !== 0
  //     ? values[mid]
  //     : (values[mid - 1] + values[mid]) / 2;
  // });

  // // ApexCharts data configuration
  // const data_2 = {
  //   series: [
  //     {
  //       name: "Review",
  //       data: medianYValues,
  //     },
  //   ],
  //   options: {
  //     chart: {
  //       type: "line",
  //       height: "auto",
  //     },
  //     fill: {
  //       colors: ["#fff"],
  //       type: "gradient",
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     stroke: {
  //       curve: "smooth",
  //       colors: ["#ff929f"],
  //     },
  //     tooltip: {
  //       x: {
  //         format: "dd/MM/yy HH:mm",
  //       },
  //     },
  //     grid: {
  //       show: false,
  //     },
  //     xaxis: {
  //       type: "datetime",
  //       categories: dates, // Use formatted dates for x-axis categories
  //     },
  //     yaxis: {
  //       show: true,
  //     },
  //     toolbar: {
  //       show: false,
  //     },
  //   },
  // }

//################################

    return (
        <div>
            <h1>Test Page </h1>
            <Chart options={data.options} series={data.series} type="line" />
            <Chart options={data.options} series={data.series} type="area" />
            <Chart options={data.options} series={data.series} type="bar" />
            <Chart options={data_2.options} series={data_2.series} type="line" />
        </div>
    )

};

export default GraphTest;