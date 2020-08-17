import React, { Component } from 'react';
import logo from './belize-flag.png';
import './App.css';
import Chart from './components/Chart';
import Footer from './components/Footer';

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
    //https://covid19.mathdro.id/api/countries/belize
    this.setState({
      chartData: {
        labels: ['Corozal', 'Orange Walk', 'San Pedro','Belize City', 'Cayo', 'Stann Creek', 'Toledo'],
        datasets: [
          {
            label: 'Cases',
            data:[
              42,
              129,
              158,
              74,
              34,
              14,
              1
            ],
            backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            '#ffa500',
            'rgba(54, 162, 235, 0.6)',
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
          <h2>Belize Coronavirus Cases</h2>
          <div className="screening-data">
            <div className="btn">Tests Done</div >
            <div className="btn">Under Investigation <span></span></div >
            <div className="btn">Negative<span>-</span></div >
            <div className="btn">Confirmed<span>+</span></div >
            <div className="btn">Deseased<span></span></div >
            <div className="btn">Recovered<span></span></div >
            <div className="btn">Active<span></span></div >
          </div>
        </div>
        <Chart chartData={this.state.chartData} location="Belize" legendPosition='bottom' /> 
        <Footer/>
      </div>
    );
  }
}

export default App;
