import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition:'right',
    location: 'City'
  }

  render(){
    return (
      <div className="chart">
        <h1>🇧🇿Total Cases: {452} 🇧🇿</h1>
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Cases in ' +this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            },
            maintainAspectRatio: false
          }}
        /> 
        <h1>Belize's Coronavirus Curve</h1>
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Total Cases in ' +this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            },
            maintainAspectRatio: true, 
          }}
        />
      </div>
    );
  }
}

export default Chart;
