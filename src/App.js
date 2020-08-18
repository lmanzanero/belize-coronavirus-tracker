import React, { Component } from 'react';
import logo from './belize-flag.png';
import virus from './virus.png';
import positive from './positive.png';
import recovered from './recovered.png';
import negative from './negative.png';
import swab from './swab.png';
import death from './death.png';
import search from './search.png';
import active from './active.png';
import './App.css';
import Chart from './components/Chart';
import TimelineChart from './components/TimelineChart';
import { Footer } from './components/Footer';
import ReactGA from 'react-ga';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: props.chartData,
      lineChartData: props.lineChartData
    }
    ReactGA.initialize('UA-175547717-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  componentWillMount(){
    this.getChartData();
    this.getChartLineData();
  }

  getChartLineData() {
    this.setState({
      lineChartData: {
        labels: ['January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September', 'November', 'December'],
        datasets: [
          {
            label: 'Cases',
            data:[
              0,
              0,
              2,
              18,  
              0,
              6,
              25,
              300
            ],
            backgroundColor:[ 
            'rgba(54, 162, 235, 0.6)', 
          ],
          }
        ]
      }
    });
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
              46,
              130,
              164,
              82,
              38,
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
          <h1><img className="virus" src={virus} alt="Belize Coronavirus updates"/> Belize Coronavirus Cases and live updates <img className="virus" src={virus} alt="Belize Coronavirus updates"/></h1>
          <div className="screening-data">
            <div className="btn">
               <p>Test Done</p>
                 <img src={swab} alt="Belize Coronavirus updates"/>
               <p>5281</p>
            </div>
            <div className="btn">
              <p>Under Investigation</p>
               <img src={search} alt="Belize Coronavirus under investigation"/>
              <p>481</p>
            </div>
            <div className="btn">
              <p>Negative</p>
               <img src={negative} alt="Belize negative cases"/>
              <p>4761</p>
            </div>
            <div className="btn">
              <p>Confirmed</p>
               <img src={positive} alt="Belize Coronavirus confirmed"/>
              <p>475</p>
            </div>
            <div className="btn">
              <p>Deseased</p>
               <img src={death} alt="Belize Coronavirus deseased"/>
              <p className="number">4</p>
            </div>
            <div className="btn">
              <p>Recovered</p>
               <img src={recovered} alt="Belize Coronavirus recovered"/>
              <p>38</p>
            </div>
            <div className="btn">
              <p>Active</p>
               <img src={active} alt="Belize Coronavirus Active cases"/>
              <p>433</p>
            </div>
          </div>
        </div>
        <Chart chartData={this.state.chartData} location="Belize" legendPosition='bottom' /> 
        <TimelineChart chartData={this.state.lineChartData} location="Belize" legendPosition='bottom' />
        <Footer/>
      </div>
    );
  }
}

export default App;
