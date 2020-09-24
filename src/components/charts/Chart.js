import React, { useEffect } from 'react'; 
import { useQuery } from 'react-query';
import { getCasesByDistrict } from '../../repository/api';
import Chart from 'chart.js'; 

const CasesByDistrictChart = () => {
  const { data, isLoading, error } = useQuery('casesbydistrict', getCasesByDistrict);  
  useEffect(() => { 
    if(isLoading) {    
      // console.log("loading...")
    }  else { 
      const loadedData = data.data.features.map(district => { 
        let casesByDistrict = {
          name: district.attributes.district,
          value: district.attributes.value
        } 
        return casesByDistrict;
       });;   

      const districts = loadedData.map(district => district.name);
      const districtCases = loadedData.map(district => district.value); 
    var ctx = document.getElementById('casesByDistrict');  
    var casesByGenderPieChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: districts,
          datasets: [{
              label: 'Cases',
              data: districtCases,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.7)',
                  'rgba(54, 162, 235, 0.7)',
                  'rgba(255, 206, 86, 0.7)',
                  'rgba(75, 192, 192, 0.7)',
                  'rgba(153, 102, 255, 0.7)',
                  'rgba(255, 159, 64, 0.7)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, )',
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
          responsive: true,
          title: {
            display: true,
            text: 'Cases by District',
            fontSize: 30
          }
      }
  });
} 
}, [isLoading]) 



  return (
     
    <div className="chart">
      {isLoading ? <div className="loading-text">loading...</div> : ""}
      <div className={isLoading ? "chart-inner loading" : "chart-inner"} >  
        <canvas id="casesByDistrict"></canvas>
      </div>    
    </div>
  ); 
}

export default CasesByDistrictChart;
