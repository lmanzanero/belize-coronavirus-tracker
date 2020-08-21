import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Chart extends Component {
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
    location: 'City'
  }

  render(){
    return (
      <div className="chart">
        <div className="chart-inner"> 
            <Bar
            data={this.state.chartData}
            options={{
              title: {
                display: this.props.displayTitle,
                text: 'Cases by ' +this.props.location,
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

export default Chart;
