import React from 'react'
import Chart from 'react-apexcharts'

const Graph = ({ items }) => {

  // Extract 'name' and 'description' for use in chart data
  const names = items.map(item => item.name);
  const descriptions = items.map(item => item.description);

  const data = {
    series: [
      {
        name: "Review",
        // data: [10, 15, 30, 90, 40, 120, 100],
        data: descriptions,  // Use descriptions for series data
      },
    ],
    options: {
      chart: {
        type: "area",
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
        curve: "smooth",
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
        // type: "datetime",
        // categories: [
        //   "2018-09-19T00:00:00.000Z",
        //   "2018-09-19T01:30:00.000Z",
        //   "2018-09-19T02:30:00.000Z",
        //   "2018-09-19T03:30:00.000Z",
        //   "2018-09-19T04:30:00.000Z",
        //   "2018-09-19T05:30:00.000Z",
        //   "2018-09-19T06:30:00.000Z",
        // ],
        type: "date", // Changed from 'datetime' to 'category' since names are not dates
        categories: names, // Use names for x-axis categories
      },
      yaxis: {
        show: true
      },
      toolbar:{
        show: false
      }
    },
  };

  return (
    <div className='CustomerReview'>
        {items.map((item, index) => (
            <h4 key={index}>
                Name: {item.name}, ID: {item.description}
            </h4>
        ))}
        <Chart options={data.options} series={data.series} type="area" />
    </div>
  )
};

export default Graph;
