import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getCasesByGender } from '../../repository/api';
import Chart from 'chart.js';

export const GenderChart = () => {
  const { data, isLoading } = useQuery('getcasesbygender', getCasesByGender, {refetchOnWindowFocus: false});
  useEffect(() => {
    if (!data) return;

    const { confirmale, confirmfemale } = data.data.features[0].attributes;
    var ctx = document.getElementById('casesByGenderChart') as HTMLCanvasElement;
    var casesByGenderPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Male', 'Female'],
        datasets: [
          {
            label: '# of Votes',
            data: [confirmale, confirmfemale],
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
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
        maintainAspectRatio: false,
        legend: {
          position: 'bottom',
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
          text: 'Cases by Gender',
          fontSize: 30,
        },
      },
    });
  }, [data, isLoading]);

  return (
    <div className={`chart ${isLoading ? 'loading' : ''}`}>
      <div className="chart-inner">
        <canvas id="casesByGenderChart" style={{ margin: 0, padding: 0 }}></canvas>
      </div>
    </div>
  );
};

export default GenderChart;
