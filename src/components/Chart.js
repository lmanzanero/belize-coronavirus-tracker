import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import belize from '../belize.svg';

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
        <h1>🇧🇿Total Cases: {475} 🇧🇿</h1>
        <div className="chart-inner">
          <div>
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
          </div> 
          <div className="belize-map">
            {/* <img src={belize}/> */}
            <h1>Belize Map</h1>
          </div> 
        </div>    
      </div>
    );
  }
}

export default Chart;
