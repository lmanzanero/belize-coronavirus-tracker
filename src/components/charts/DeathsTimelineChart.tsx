import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getDeathsByTimeLine, getDeathCasesSinceDayOne } from '../../repository/api';
import Chart from 'chart.js';

const DeathsTimelineChart = () => {
  const { data, isLoading } = useQuery('deathtimelinecases', getDeathCasesSinceDayOne);
  const months = [
    'Jan..',
    'Feb..',
    'Mar..',
    'Apr..',
    'May..',
    'Jun..',
    'Jul..',
    'Aug..',
    'Sep..',
    'Oct...',
    'Nov...',
    'Dec...',
  ];

  useEffect(() => {
    var ctx = document.getElementById('deathCasesByTimelineCart') as HTMLCanvasElement;
    var casesByTimelineCart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: isLoading ? [] : months,
          datasets: [{
              label: 'Cases',
              data: getDataByMonth(),
              backgroundColor: [
                  'rgba(54, 162, 235, 0.5)',
                  'rgba(255, 99, 132, 0.7)',
                  'rgba(54, 162, 235, 0.7)',
                  'rgba(255, 206, 86, 0.7)',
                  'rgba(75, 192, 192, 0.7)',
                  'rgba(153, 102, 255, 0.7)',
                  'rgba(255, 159, 64, 0.7)',
                  'rgba(255, 159, 64, 0.7)',
                  'rgba(255, 100, 64, 0.7)',
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(255, 99, 132, 0.7)',
                  'rgba(54, 162, 235, 0.7)',
              ],
              borderColor: [
                  'rgba(54, 162, 235, 0.9)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
          }]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
          display: false,
        },
        layout: {
          padding: {
            bottom: 0,
            left: 10,
            right: 10,
            top: 0,
          },
        },
        title: {
          display: true,
          text: 'Total Deaths by Month',
          fontSize: 30,
        },
      },
    });
  }, [isLoading, months]);

  const getDateFromData = () => {
    const dataSet = isLoading
      ? []
      : data?.data.map((dayCases: any) => {
          let date = new Date(dayCases.Date);
          const formattedData = {
            date: date.getMonth(),
            cases: dayCases.Cases,
          };
          return formattedData;
        });
    return dataSet;
  };

  const getDataByMonth = () => {
    let dataArray: any = [];
    const dataSet = getDateFromData();
    if (dataSet.length != 0) {
      const monthData = months.map((monthName, i) => {
        const monthCases = dataSet.filter((date: any) => date.date === i);
        const filteredMonth = {
          [monthName]:
            monthCases.length === 0
              ? 0
              : Math.max.apply(
                  Math,
                  monthCases.map((month: any) => month.cases),
                ),
        };
        return filteredMonth;
      });

      monthData.map((month) => {
        const cases = Object.values(month);
        dataArray.push(...cases);
      });
      // console.log(dataArray);
      return dataArray;
    }
  };

  return (
    <div className={`chart ${isLoading ? 'loading' : ''}`}>
      <div className="chart-inner">
        <canvas id="deathCasesByTimelineCart" style={{ margin: 0, padding: 0 }}></canvas>
      </div>
    </div>
  );
};

export default DeathsTimelineChart;
