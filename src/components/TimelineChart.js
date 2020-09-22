import React from 'react'; 
import { useQuery } from 'react-query';
import { getCasesByTimeline } from '../repository/api';

const TimelineChart = () =>  {
  const { data, isLoading, error } = useQuery('timelinecases', getCasesByTimeline)
    return (
      <div className="chart"> 
          <div className="chart-inner">
            { isLoading ? 'loading...' : 'data'}
          </div>
      </div>  
    ); 
}

export default TimelineChart;