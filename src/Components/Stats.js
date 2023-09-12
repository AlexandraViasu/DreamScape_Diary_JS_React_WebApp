import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import axios from 'axios';
const Statistics = ({dream}) => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:9000/api/dreamscapeDiary/')
      .then((response) => {
        const data = response.data;
        setChartData(data);
        const lucidDreamCount = data.filter((dream) => dream.isLucidDream).length;
        const nightmareCount = data.filter((dream) => dream.isNightmare).length;
        const recurringCount = data.filter((dream) => dream.isRecurring).length;
        const colors = ['#0466C8', '#001233', '#5C677D'];
        const options = {
        chart: {
            type: 'bar',
        },
        title: {
            text: 'Dream Statistics',
        },
        xAxis: {
            categories: ["Dreams"],
        },
        yAxis: {
            title: {
            text: 'Occurrences',
            },
        },
        series: [
            {
              name: 'Is Lucid Dream',
              data: [lucidDreamCount],
              color: colors[0],
            },
            {
              name: 'Is Nightmare',
              data: [nightmareCount],
              color: colors[1],
            },
            {
              name: 'Is Recurring',
              data: [recurringCount],
              color: colors[2],
            },
          ],
        };
<<<<<<< HEAD
=======
        //   series: [
        //     {
        //       name: 'Is Lucid Dream',
        //       data: data.map((dream) => dream.isLucidDream ? 1 : 0),
        //     },
        //     {
        //       name: 'Is Nightmare',
        //       data: data.map((dream) => dream.isNightmare ? 1 : 0),
        //     },
        //     {
        //       name: 'Is Recurring',
        //       data: data.map((dream) => dream.isRecurring ? 1 : 0),
        //     },
        //   ],
>>>>>>> 668a96883209e6cdd817c23cd4c225838eda3ec7
        Highcharts.chart('container', options);
      })
      .catch((error) => {
        console.error('Error fetching dream data:', error);
      });
  }, []);
  return (
    <>
      <h1>Your Dream Stats!</h1>
      <div id="container" style={{ width: '100%', height: '400px' }}></div>
    </>
  );
};
export default Statistics;