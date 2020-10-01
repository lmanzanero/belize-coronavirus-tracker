import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import Chart from 'chart.js'
import { getCasesSinceDayOne } from '../../repository/api';
import moment from 'moment';


export default function LiveTimelineChart() {
  const { isLoading } = useQuery('timelinecases', getCasesSinceDayOne);
  // const months = ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // console.log(data);
  let color = Chart.helpers.color;
  useEffect(() => {
    let cfg = {
			data: {
				datasets: [{
					label: 'Cases by Day',
					backgroundColor: color('red').alpha(0.5).rgbString(),
					borderColor: 'rgba(54, 162, 235, 0.5)',
					data: generateData(),
					type: 'line',
					pointRadius: 0,
					fill: false,
					lineTension: 0,
					borderWidth: 2
				}]
			},
			options: {
				maintainAspectRatio: false,
        responsive: true,
				animation: {
					duration: 0
				},
				scales: {
					xAxes: [{
						type: 'time',
						distribution: 'series',
						offset: true,
						ticks: {
							major: {
								enabled: true,
								fontStyle: 'bold'
							},
							source: 'data',
							autoSkip: true,
							autoSkipPadding: 75,
							maxRotation: 0,
							sampleSize: 100
						},
						afterBuildTicks: function(scale, ticks) {
							var majorUnit = scale._majorUnit;
							var firstTick = ticks[0];
							var i, ilen, val, tick, currMajor, lastMajor;

							val = moment(ticks[0].value);
							if ((majorUnit === 'minute' && val.second() === 0)
									|| (majorUnit === 'hour' && val.minute() === 0)
									|| (majorUnit === 'day' && val.hour() === 9)
									|| (majorUnit === 'month' && val.date() <= 3 && val.isoWeekday() === 1)
									|| (majorUnit === 'year' && val.month() === 0)) {
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
						}
					}],
					yAxes: [{
						gridLines: {
							drawBorder: false
						},
						scaleLabel: {
							display: true,
							labelString: '# of cases'
						}
					}]
				},
				tooltips: {
					intersect: false,
					mode: 'index',
					callbacks: {
						label: function(tooltipItem, myData) {
							var label = myData.datasets[tooltipItem.datasetIndex].label || '';
							if (label) {
								label += ': ';
							}
							label += parseFloat(tooltipItem.value).toFixed(2);
							return label;
						}
					}
				}
			}
		};
      let ctx = document.getElementById('liveCasesByTimelineCart');
      let liveCasesByTimelineCart = new Chart(ctx, cfg);
  function generateData() {
    let unit = document.getElementById('unit').value;
   
     function unitLessThanDay() {
       return unit === 'second' || unit === 'minute' || unit === 'hour';
     }
   
     function beforeNineThirty(date) {
       return date.hour() < 9 || (date.hour() === 9 && date.minute() < 30);
     }
   
     // Returns true if outside 9:30am-4pm on a weekday
     function outsideMarketHours(date) {
       if (date.isoWeekday() > 5) {
         return true;
       }
       if (unitLessThanDay() && (beforeNineThirty(date) || date.hour() > 16)) {
         return true;
       }
       return false;
     }
   
     function randomNumber(min, max) {
       return Math.random() * (max - min) + min;
     }
   
     function randomBar(date, lastClose) {
      let open = randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2);
      let close = randomNumber(open * 0.95, open * 1.05).toFixed(2);
       return {
         t: date.valueOf(),
         y: close
       };
     }
   
    let date = moment('Jan 01 1990', 'MMM DD YYYY');
    let now = moment();
    let data = [];
    let lessThanDay = unitLessThanDay();
     for (; data.length < 600 && date.isBefore(now); date = date.clone().add(1, unit).startOf(unit)) {
       if (outsideMarketHours(date)) {
         if (!lessThanDay || !beforeNineThirty(date)) {
           date = date.clone().add(date.isoWeekday() >= 5 ? 8 - date.isoWeekday() : 1, 'day');
         }
         if (lessThanDay) {
           date = date.hour(9).minute(30).second(0);
         }
       }
       data.push(randomBar(date, data.length > 0 ? data[data.length - 1].y : 30));
     }
   
     return data;
   }

  // console.log(generateData())
}, []) 

 

  return (
    <div className="chart"> 
      {isLoading ? <div className="loading-text">loading...</div> : ""}
      <div className={isLoading ? "chart-inner loading" : "chart-inner"}> 
        <h4 className="loading-text">Feature coming soon...</h4>
        <canvas id="liveCasesByTimelineCart" style={{margin: 0, padding:0}}></canvas> 
				<div>
				<select id="type">
					<option value="line">Line</option>
					<option value="bar">Bar</option>
				</select>
				<select id="unit" defaultChecked>
					<option value="second">Second</option>
					<option value="minute">Minute</option>
					<option value="hour">Hour</option>
					<option value="day" checked>Day</option>
					<option value="month">Month</option>
					<option value="year">Year</option>
				</select>
				</div>
      </div>
    </div>  
  )
}