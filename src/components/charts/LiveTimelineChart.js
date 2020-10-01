import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import Chart from 'chart.js'
import { getCasesSinceDayOne } from '../../repository/api';
import moment from 'moment';   


export default function LiveTimelineChart() {
  const { data, isLoading } = useQuery('timelinecases', getCasesSinceDayOne);
  // const months = ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	let color = Chart.helpers.color;
	
  useEffect(() => { 
    let cfg = {
			data: {
				datasets: [{
					label: ' 🦠 Cases',
					backgroundColor: color('red').alpha(0.5).rgbString(),
					borderColor: 'rgba(54, 162, 235, 0.5)',
					data: cleanUpData(),
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
							console.log(ticks[0].value);
							let majorUnit = scale._majorUnit;
							let firstTick = ticks[0];
							let i, ilen, val, tick, currMajor, lastMajor;

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
							labelString: '# of 🦠 cases'
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
		}

	if(!isLoading){ 
		let ctx = document.getElementById('liveCasesByTimelineCart');
		let liveCasesByTimelineCart = new Chart(ctx, cfg);
	}
      
	 function cleanUpData() {
		if(data){
			const dataArr = data.data.map(cases => { 
				const chartData = {
						t: new Date(cases.Date).getTime(),
						y: `${cases.Cases}`
				}
				return chartData
			}) 
			return dataArr;
		} 
	}  

}, [isLoading]);

	return (
    <div className={`chart ${isLoading ? 'loading' : ''}`}>  
      <div className="chart-inner">  
        <canvas id="liveCasesByTimelineCart" style={{margin: '0', padding:0}}></canvas> 
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