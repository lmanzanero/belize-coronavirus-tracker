import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class TimelineChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: false,
    legendPosition:'right',
    location: 'City',
  }

  render(){
    return (
      <div className="chart"> 
          <div className="chart-inner">
          <Line
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: 'Coronavirus Curve in ' +this.props.location,
                fontSize: 25,
                fontColor: 'whitesmoke',
              },
              legend: {
                display: this.props.displayLegend,
                position: this.props.legendPosition, 
              },
              maintainAspectRatio: false,  
            }}
          />
          </div>
      </div>  
    );
  }
}