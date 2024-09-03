import React from 'react'

import { generateClient } from 'aws-amplify/api';
import { listSMlGS } from '../../graphql/queries';

import { useState } from 'react';
import dayjs from 'dayjs';

import Chart from 'react-apexcharts';

const client = generateClient();

const DesignPage = () => {

    const [sortedSMLG, setSortedSMLG] = useState([]);

    async function fetchSMLG() {
        const result = await client.graphql({
          query: listSMlGS,
        });
        // console.log(result.data.listSMlGS.items)
        const sortedSMLG = result.data.listSMlGS.items;
        // Sort the items by the TIME field in ascending order

        // With space betwenn the date and time
        // sortedSMLG.sort((a, b) => new Date(a.TIME) - new Date(b.TIME));
        
        // Without space between the date and time
        sortedSMLG.sort((a, b) => {
        const timeA = a.TIME.slice(0, 10) + ' ' + a.TIME.slice(10);
        const timeB = b.TIME.slice(0, 10) + ' ' + b.TIME.slice(10);
        // Compare the dates
        return new Date(timeA) - new Date(timeB);
      });
        console.log(sortedSMLG);
        setSortedSMLG(sortedSMLG);
    }

    const xAxisData = sortedSMLG.map(item => item.TIME);
    const yAxisData = sortedSMLG.map(item => item.SAP_RESPONSE_TIME);

    // Function to insert space and convert to date
  const formatDate = (str) => {
    return new Date(str.slice(0, 10) + " " + str.slice(10));
  };

  // Format x-axis data with date objects
  const formattedDates = xAxisData.map((dateStr) => formatDate(dateStr));

  // ApexCharts data configuration
  const data = {
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

return (
    <div>
        <h1>Design page</h1>
        <button onClick={fetchSMLG}>Fetch SMLG</button>
        <Chart options={data.options} series={data.series} type="line" />
    </div>    
)
};

export default DesignPage;