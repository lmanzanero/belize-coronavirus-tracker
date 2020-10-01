import React from 'react'; 
import { useQuery } from 'react-query';
import {  getDeathsByTimeLine } from '../../repository/api';

const DeathsTimelineChart = () =>  {
  const { isLoading } = useQuery('deathtimelinecases', getDeathsByTimeLine)
  // console.log(data);
    return (
      <div className="chart"> 
          <div className="chart-inner">
            { isLoading ? 'loading...' : 'data'}
          </div>
      </div>  
    ); 
}

export default DeathsTimelineChart;