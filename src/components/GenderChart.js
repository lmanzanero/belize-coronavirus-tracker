import React from 'react'; 
import { useQuery } from 'react-query';
import { getCasesByGender } from '../repository/api';

export const GenderChart = () => {
  const { data, isLoading, error } = useQuery('getcasesbygender', getCasesByGender);
  return (
    <div className="chart">
      <div className="chart-inner"> 
          {isLoading ? 'loading...' : 'data'}
      </div>    
    </div>
  ); 
}

export default GenderChart;
