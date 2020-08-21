import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class GenderChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: props.chartData
    }
  }
 
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition:'right',
    location: 'Gender'
  }

  render(){  
    return (
      <div className="chart">
        <div className="chart-inner"> 
            <Pie
             data={this.state.chartData}
             options={{
               title: {
                 display: this.props.displayTitle,
                 text: 'Cases by ' + this.props.location,
                 fontSize: 25
               },
               legend: {
                 display: this.props.displayLegend,
                 position: this.props.legendPosition
               },
               maintainAspectRatio: false
             }}
           />  
        </div>    
      </div>
    );
  }
}

export default GenderChart;
