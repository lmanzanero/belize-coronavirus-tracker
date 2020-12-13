import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getCasesByDistrict } from '../../repository/api';
import Chart from 'chart.js';

const CasesByDistrictChart = () => {
  const { data, isLoading } = useQuery('casesbydistrict', getCasesByDistrict);
  useEffect(() => {
    if (isLoading) {
      // console.log("loading...")
    } else {
      console.log(data);
      const loadedData = data?.data.features.map((district: any) => {
        let casesByDistrict = {
          name: district.attributes.district,
          value: district.attributes.value,
        };
        return casesByDistrict;
      });

      const districts = loadedData.map((district: any) => district.name);
      const districtCases = loadedData.map((district: any) => district.value);
      var ctx = document.getElementById('casesByDistrict') as HTMLCanvasElement;
      var casesByGenderPieChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: districts,
          datasets: [
            {
              label: 'Cases',
              data: districtCases,
              backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)',
              ],
              borderColor: [
                'rgba(255, 99, 132, )',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: true,
            text: 'Cases by District',
            fontSize: 30,
          },
        },
      });
    }
  }, [data, isLoading]);

  return (
    <div className={`chart ${isLoading ? 'loading' : ''}`}>
      <div className="chart-inner">
        <canvas id="casesByDistrict"></canvas>
      </div>
    </div>
  );
};

export default CasesByDistrictChart;
