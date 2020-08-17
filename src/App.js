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
import { Footer } from './components/Footer';
import ReactGA from 'react-ga';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: props.chartData
    }
    ReactGA.initialize('UA-175547717-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
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
          <h1><img className="virus" src={virus} alt="Belize Coronavirus updates"/> Belize Coronavirus Cases and live updates <img className="virus" src={virus} alt="Belize Coronavirus updates"/></h1>
          <div className="screening-data">
            <div className="btn">
              <img src={swab} alt="Belize Coronavirus updates"/>
              <p>Tests Done</p>
            </div>
            <div className="btn"><img src={search} alt="Belize Coronavirus under investigation"/>
              <p>Under Investigation</p>
            </div>
            <div className="btn">
              <img src={negative} alt="Belize negative cases"/>
              <p>Negative</p>
            </div>
            <div className="btn">
              <img src={positive} alt="Belize Coronavirus confirmed"/>
              <p>Confirmed</p>
            </div>
            <div className="btn">
              <img src={death} alt="Belize Coronavirus deseased"/>
              <p>Deseased</p>
            </div>
            <div className="btn">
              <img src={recovered} alt="Belize Coronavirus recovered"/>
              <p>Recovered</p>
            </div>
            <div className="btn">
              <img src={active} alt="Belize Coronavirus Active cases"/>
              <p>Active</p>
            </div>
          </div>
        </div>
        <Chart chartData={this.state.chartData} location="Belize" legendPosition='bottom' /> 
        <Footer/>
      </div>
    );
  }
}

export default App;
