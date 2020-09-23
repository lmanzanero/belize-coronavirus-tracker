import React, { useEffect } from 'react'; 
import { useQuery } from 'react-query';
import { getCasesByDistrict } from '../../repository/api';
import Chart from 'chart.js';

const CasesByDistrictChart = () => {
  const { data, isLoading, error } = useQuery('casesbydistrict', getCasesByDistrict);
  useEffect(() => {
    var ctx = document.getElementById('casesByDistrict');
    var casesByGenderPieChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
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
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          },
          maintainAspectRatio: false,
          responsive: true
      }
  });
}, [])
  return (
    <div className="chart">
      {/* <div className={isLoading ? "chart-inner loading" : "chart-inner"}>  */}
      {isLoading ? <div className="loading-text">loading...</div> : ""}
      <div className={isLoading ? "chart-inner loading" : "chart-inner"} >  
        <canvas id="casesByDistrict"></canvas>
      </div>    
    </div>
  ); 
}

export default CasesByDistrictChart;
