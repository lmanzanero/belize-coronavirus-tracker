import React from 'react';
import logo from './icons/belize-flag.png';
import virus from './icons/virus.png';
import positive from './icons/positive.png';
import recovered from './icons/recovered.png';
import negative from './icons/negative.png';
import swab from './icons/swab.png';
import death from './icons/death.png';
import search from './icons/search.png';
import active from './icons/active.png';
import './App.css';
import Chart from './components/Chart';
import TimelineChart from './components/TimelineChart';
import { Footer } from './components/Footer'; 
import ReactGA from 'react-ga';
import axios from 'axios';
import BelizeMap from './components/Map';
import GenderChart from './components/GenderChart';
import { useQuery } from 'react-query';
import { getApiData } from './repository/api';

export const App = () => {
  // const [ chartData, setChartData ] = useState(null);
  // const [ lineChartData, setLineChartData ] = useState(null);
  // const [ genderData, setGenderData ] = useState(null);
  // const [ apiData, setApiData ] = useState({});
  const { data, isLoading, status, error } = useQuery('latestdata', getApiData);   
  console.log(data);
  //  state = {
  //   chartData: props.chartData,
  //   lineChartData: props.lineChartData,
  //   genderData: props.chartData,
  //   apiData: [],
  //   groupMonths: [],
  //   activeCases: 0,
  //   deaths: 0,
  //   confirmedCases: 0,
  //   recovered: 0,
  //   lastUpdated: ''
  // }
  // ReactGA.initialize('UA-175547717-1');
  // ReactGA.pageview(window.location.pathname + window.location.search);

  // this.getChartData();
  //   this.getChartLineData(); 

 
   
 
 
 
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1><img className="virus" src={virus} alt="Belize Coronavirus updates"/> Belize Coronavirus Cases and live updates <img className="virus" src={virus} alt="Belize Coronavirus updates"/></h1>
          <h4>🇧🇿Total Cases: {isLoading ? 'loading...' : data.data[0].confirmed} 🇧🇿 <br/> <span>Last Updated: { isLoading ? 'loading...' : Date(Number(data.data[0].lastUpdate))}</span></h4>
          <div className="screening-data">
            <div className="btn">
               <p>Test Done</p>
                 <img src={swab} alt="Belize Coronavirus updates"/>
               <p>5,855</p>
            </div>
            <div className="btn">
              <p>Under Investigation</p>
               <img src={search} alt="Belize Coronavirus under investigation"/>
              <p>412</p>
            </div>
            <div className="btn">
              <p>Negative</p>
               <img src={negative} alt="Belize negative cases"/>
              <p>5,186</p>
            </div>
            <div className="btn">
              <p>Confirmed</p>
               <img src={positive} alt="Belize Coronavirus confirmed"/>
              <p> {isLoading ? 'loading...' : data.data[0].confirmed} </p>
            </div>
            <div className="btn">
              <p>Deseased</p>
               <img src={death} alt="Belize Coronavirus deseased"/>
               <p className="number"> {isLoading ? 'loading...' : data.data[0].deaths}</p>
            </div>
            <div className="btn">
              <p>Recovered</p>
               <img src={recovered} alt="Belize Coronavirus recovered"/>
              <p> {isLoading ? 'loading...' : data.data[0].recovered}</p>
            </div>
            <div className="btn">
              <p>Active</p>
               <img src={active} alt="Belize Coronavirus Active cases"/>
               <p> {isLoading ? 'loading...' : data.data[0].active}</p>
            </div>
          </div>
        </div>
        <div className="grid-2">
          <Chart /> 
          <TimelineChart/>
        </div>
        <div className="grid-2"> 
          <GenderChart /> 
          <TimelineChart/>
        </div>
        <div className="belize-map"> 
            <h1>View Cases on Map</h1>
            {/* <BelizeMap/> */}
        </div> 
        <Footer/>
      </div>
    ); 
}

export default App;
