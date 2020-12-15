import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import Chart from 'chart.js';
import {
  getConfirmedCasesSinceDayOne,
  getRecoveredCasesSinceDayOne,
  getDeathCasesSinceDayOne,
  getTotalAllStatusCases,
} from '../../repository/api';
import moment from 'moment';

export default function LiveTimelineChart() {
  const { data, isLoading } = useQuery('livetimelinecases', getConfirmedCasesSinceDayOne);
  const { data: recoveredData, isLoading: recoveredLoading } = useQuery(
    'livetimelinerecoveredcases',
    getRecoveredCasesSinceDayOne,
  );
  const { data: deathsData, isLoading: deathsLoading } = useQuery('livetimelinedeathscases', getDeathCasesSinceDayOne);
  const { data: activeData, isLoading: activeLoading } = useQuery('activecases', getTotalAllStatusCases);

  useEffect(() => {
    let cfg: any = {
      data: {
        datasets: [
          {
            label: ' ✅ Confirmed',
            backgroundColor: '#81B622',
            borderColor: '#81B622',
            data: cleanUpData(data),
            type: 'line',
            pointRadius: 0,
            fill: false,
            lineTension: 0,
            borderWidth: 4,
          },
          {
            label: ' 🦠 Active',
            backgroundColor: '#f6cd61',
            borderColor: '#f6cd61',
            data: cleanUpActiveData(data),
            type: 'line',
            pointRadius: 0,
            fill: false,
            lineTension: 0,
            borderWidth: 4,
          },
          {
            label: ' 🥳 Recovered',
            backgroundColor: '#0e9aa7',
            borderColor: '#0e9aa7',
            data: cleanUpData(recoveredData),
            type: 'line',
            pointRadius: 0,
            fill: false,
            lineTension: 0,
            borderWidth: 4,
          },
          {
            label: ' ☠️ Deaths',
            backgroundColor: '#fe8a71',
            borderColor: '#fe8a71',
            data: cleanUpData(deathsData),
            type: 'line',
            pointRadius: 0,
            fill: false,
            lineTension: 0,
            borderWidth: 4,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        animation: {
          duration: 0,
        },
        title: {
          display: true,
          text: 'Belize 🦠 Coronavirus 🦠 Curve',
          fontSize: 30,
        },
        legend: {
          display: true,
          position: 'bottom',
        },
        scales: {
          xAxes: [
            {
              type: 'time',
              distribution: 'series',
              offset: true,
              ticks: {
                major: {
                  enabled: true,
                  fontStyle: 'bold',
                },
                source: 'data',
                autoSkip: true,
                autoSkipPadding: 75,
                maxRotation: 0,
                sampleSize: 100,
              },
              afterBuildTicks: function (scale: any, ticks: any) {
                let majorUnit = scale._majorUnit;
                let firstTick = ticks[0];
                let i, ilen, val, tick, currMajor, lastMajor;

                val = moment(ticks[0].value);
                if (
                  (majorUnit === 'minute' && val.second() === 0) ||
                  (majorUnit === 'hour' && val.minute() === 0) ||
                  (majorUnit === 'day' && val.hour() === 9) ||
                  (majorUnit === 'month' && val.date() <= 3 && val.isoWeekday() === 1) ||
                  (majorUnit === 'year' && val.month() === 0)
                ) {
                  firstTick.major = true;
                } else {
                  firstTick.major = false;
                }
                lastMajor = val.get(majorUnit);

                for (i = 1, ilen = ticks.length; i < ilen; i++) {
                  tick = ticks[i];
                  val = moment(tick.value);
                  currMajor = val.get(majorUnit);
                  tick.major = currMajor !== lastMajor;
                  lastMajor = currMajor;
                }
                return ticks;
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                drawBorder: false,
              },
              scaleLabel: {
                display: true,
                labelString: '🦠 cases',
              },
            },
          ],
        },
        tooltips: {
          intersect: false,
          mode: 'index',
          callbacks: {
            label: function (tooltipItem: any, myData: any) {
              var label = myData.datasets[tooltipItem.datasetIndex].label || '';
              if (label) {
                label += ': ';
              }
              label += parseFloat(tooltipItem.value).toFixed(0);
              return label;
            },
          },
        },
      },
    };

    if (!isLoading && !recoveredLoading && !deathsLoading && !activeLoading) {
      let ctx = document.getElementById('liveCasesByTimelineCart') as HTMLCanvasElement;
      let liveCasesByTimelineCart = new Chart(ctx, cfg);
    }

    function cleanUpActiveData(dataSrc: any) {
      if (activeData) {
        const data = activeData.data.map((cases: any) => {
          const chartData = {
            t: new Date(cases.Date).getTime(),
            y: `${cases.Active}`,
          };
          return chartData;
        });
        return data;
      }
    }

    function cleanUpData(dataSrc: any) {
      if (dataSrc) {
        const dataArr = dataSrc.data.map((cases: any) => {
          const chartData = {
            t: new Date(cases.Date).getTime(),
            y: `${cases.Cases}`,
          };
          return chartData;
        });
        return dataArr;
      }
    }
  }, [isLoading, recoveredLoading, deathsLoading, activeLoading, data, recoveredData, deathsData, activeData]);

  return (
    <div className={`chart ${isLoading || recoveredLoading || deathsLoading ? 'loading' : ''}`}>
      <div className="chart-inner">
        <canvas id="liveCasesByTimelineCart" style={{ margin: '0', padding: 0 }}></canvas>
        <div>
          <select id="type">
            <option value="line">Line</option>
            <option value="bar">Bar</option>
          </select>
          <select id="unit" defaultChecked>
            <option value="second">Second</option>
            <option value="minute">Minute</option>
            <option value="hour">Hour</option>
            <option value="day">Day</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </div>
      </div>
    </div>
  );
}
