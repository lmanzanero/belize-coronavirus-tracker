import React, { useEffect } from 'react';
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
import Chart from './components/charts/Chart';
import TimelineChart from './components/charts/TimelineChart';
import { Footer } from './components/Footer'; 
import ReactGA from 'react-ga';
import axios from 'axios';
import BelizeMap from './components/Map';
import GenderChart from './components/charts/GenderChart';
import { useQuery } from 'react-query';
import { getApiData } from './repository/api';
import DeathsTimelineChart from './components/charts/DeathsTimelineChart';

export const App = () => { 
  const { data, isLoading, status, error } = useQuery('latestdata', getApiData);    
  ReactGA.initialize('UA-175547717-1');
  ReactGA.pageview(window.location.pathname + window.location.search); 
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1><span className="virus">🦠</span> Belize Coronavirus (covid-19) cases and live updates <span className="virus">🦠</span></h1>
          <h4>🇧🇿 Total Cases: {isLoading ? 'loading...' : data.data[0].confirmed} 🇧🇿 <br/><br/> <span>Last Updated: { isLoading ? 'loading...' : Date(Number(data.data[0].lastUpdate))}</span></h4>
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
          <Chart/> 
          <GenderChart/>  
        </div>
        <div className="grid-2"> 
          <TimelineChart/>  
          <DeathsTimelineChart/> 
        </div>
        <div className="map-container"> 
            <h1>View Cases on Map</h1>
            <div className="map-container-inner">
              <BelizeMap/> 
              <div>
                <h4>Cases By District</h4>
              </div>
            </div>
        </div> 
        <Footer/>
      </div>
    ); 
}

export default App;
