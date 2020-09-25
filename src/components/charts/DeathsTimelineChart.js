import React from 'react'; 
import { useQuery } from 'react-query';
import { getCasesByTimeline, getDeathsByTimeLine } from '../../repository/api';

const DeathsTimelineChart = () =>  {
  const { data, isLoading, error } = useQuery('deathtimelinecases', getDeathsByTimeLine)
  console.log(data);
    return (
      <div className="chart"> 
          <div className="chart-inner">
            { isLoading ? 'loading...' : 'data'}
          </div>
      </div>  
    ); 
}

export default DeathsTimelineChart;