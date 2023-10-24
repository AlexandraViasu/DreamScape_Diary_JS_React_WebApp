import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import axios from 'axios';
import './Stats.css';


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
            text: 'Explore your dream statistics, including lucid dreams, nightmares, and recurring dreams, beautifully visualized on our website.',
        },
        xAxis: {
            categories: ["Type of Dreams"],
        },
        yAxis: {
            title: {
            text: 'Number of Dreams',
            },
        },
        series: [
            {
              name: 'Lucid Dream',
              data: [lucidDreamCount],
              color: colors[0],
            },
            {
              name: 'Nightmare',
              data: [nightmareCount],
              color: colors[1],
            },
            {
              name: 'Recurring',
              data: [recurringCount],
              color: colors[2],
            },
          ],
        };
        Highcharts.chart('container', options);
      })
      .catch((error) => {
        console.error('Error fetching dream data:', error);
      });
    }, []);


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
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie'
          },
          title: {
              text: 'Aaaaand... in pie form!',
              align: 'center'
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          accessibility: {
              point: {
                  valueSuffix: '%'
              }
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: true,
                      format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                  }
              }
          },
          series: [{
              name: 'Types of Dreams',
              colorByPoint: true,
              data: [{
                  name: 'Lucid Dream',
                  y: lucidDreamCount,
                  color: colors[0],
                  sliced: true,
                  selected: true
              }, {
                  name: 'Nightmare',
                  y: nightmareCount,
                  color: colors[1],
              },  {
                  name: 'Recurring',
                  y: recurringCount,
                  color: colors[2],
              }]
          }]
        }      
        Highcharts.chart('piechart', options)
      // .catch((error) => {
      //   console.error('Error fetching dream data:', error);
      // });
    })}, []);

  return (
    <>
      
      <h1 className='stats-title'>Your Dream Stats 🛌🏽</h1>
      <div id="container" style={{ width: '100%', height: '400px' }}></div>
      <div id="piechart" style={{ width: '100%', height: '400px' }}></div>
    </>
  );

}
export default Statistics;