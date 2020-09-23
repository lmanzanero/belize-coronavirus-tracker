import React from 'react'; 
import { useQuery } from 'react-query';
import { getCasesByDistrict } from '../../repository/api';

const CasesByDistrictChart = () => {
  const { data, isLoading, error } = useQuery('casesbydistrict', getCasesByDistrict);
  return (
    <div className="chart">
      <div className="chart-inner"> 
        {isLoading ? 'loading...' : 'data'}
      </div>    
    </div>
  ); 
}

export default CasesByDistrictChart;
