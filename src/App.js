import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: props.chartData
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    //Ajax Call here
    this.setState({
      chartData: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets: [
          {
            label: 'Population',
            data:[
              6175994,
              1810450,
              1530600,
              1065190,
              1051620,
              9507200
            ],
            backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
         <Chart chartData={this.state.chartData} location="New York" legendPosition='bottom' />
      </div>
    );
  }
}

export default App;
