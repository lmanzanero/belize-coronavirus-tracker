import React, { useEffect } from 'react'; 
import { useQuery } from 'react-query';
import { getCasesByTimeline } from '../../repository/api';
import Chart from 'chart.js';


const TimelineChart = () =>  {
  const { data, isLoading, error } = useQuery('timelinecases', getCasesByTimeline)
  const months = ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  useEffect(() => {
    var ctx = document.getElementById('casesByTimelineCart');
    var casesByTimelineCart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: months,
          datasets: [{
              label: 'Cases',
              data: [0, 926, 799],
              backgroundColor: [
                  'rgba(54, 162, 235, 0.5)',
                  'rgba(255, 99, 132, 0.7)',
                  'rgba(54, 162, 235, 0.7)',
                  'rgba(255, 206, 86, 0.7)',
                  'rgba(75, 192, 192, 0.7)',
                  'rgba(153, 102, 255, 0.7)',
                  'rgba(255, 159, 64, 0.7)'
              ],
              borderColor: [
                  'rgba(54, 162, 235, 0.7)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
          }]
      },
      options: { 
          maintainAspectRatio: false, 
          legend: {
              position: 'bottom',
              display: false
          }, 
          layout: {
              padding: {
                  bottom: 0,
                  left: 10,
                  right: 10,
                  top: 0
              }
          },
          title: {
              display: true,
              text: 'Belize Coronavirus Curve',
              fontSize: 30
            }
      }
  });
}, []) 
    const getDateFromData = async () => {
        const dataSet = isLoading ? [] : data.data.map(dayCases => {  
          let date = new Date(dayCases.Date);   
          const formattedData = {
            date: date.getMonth(),
            cases: dayCases.Cases
          } 
          return formattedData;
        });
        return dataSet;
    }

    const getDataByMonth = async () => {
          const dataSet = await getDateFromData(); 
          if(dataSet.length != 0) {
            // const filterMonth = Math.max.apply(Math, dataSet.map(month => month.date)); 
            const monthData = months.map((monthName, i) => {  
                const monthCases = dataSet.filter(date => date.date === i); 
                const filteredMonth = {
                  [monthName]: monthCases.length === 0 ? 0 : Math.max.apply(Math, monthCases.map(month=> month.cases))
                }
                return filteredMonth;
            });

            return monthData;
          }
    }

    getDataByMonth().then(data => console.log(data));

    return (
      <div className="chart"> 
          <div className="chart-inner"> 
            <canvas id="casesByTimelineCart" style={{margin: 0, padding:0}}></canvas> 
          </div>
      </div>  
    ); 
}

export default TimelineChart;