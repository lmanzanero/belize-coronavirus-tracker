import React, {useEffect, useState} from 'react';
import logo from './icons/belize-flag.png'; 
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
import BelizeMap from './components/Map';
import GenderChart from './components/charts/GenderChart';
import { useQuery } from 'react-query';
import { getApiData } from './repository/api';
import DeathsTimelineChart from './components/charts/DeathsTimelineChart';
import LiveTimelineChart from './components/charts/LiveTimelineChart';
import moment from 'moment'

const affectedVillagesData = [
  {
    name: 'corozal',
    formatted_name: 'Corozal',
    data : [
      {
        0: 'corozal village 1',
        1: 'corozal village 2',
        2: 'corozal village 3'
      }
  ] 
  },
  {
    name: 'orangewalk',
    formatted_name: 'Orange Walk',
    data : [
      {
        0: 'orange walk village 1',
        1: 'orange walk village 2',
        2: 'orange walk village 3'
      }
  ] 
  },
  {
    name: 'belize',
    formatted_name: 'Belize',
    data : [
      {
        0: 'belize village 1',
        1: 'belize village 2',
        2: 'belize village 3'
      }
  ] 
  },
  {
    name: 'cayo',
    formatted_name: 'Cayo',
    data : [
      {
        0: 'cayo village 1',
        1: 'cayo village 2',
        2: 'cayo village 3'
      }
  ] 
  },
  {
    name: 'stanncreek',
    formatted_name: 'Stann Creek',
    data : [
      {
        0: 'stann creek village 1',
        1: 'stann creek village 2',
        2: 'stann creek village 3'
      }
  ] 
  },
  {
    name: 'toledo',
    formatted_name: 'Toledo',
    data : [
      {
        0: 'toledo village 1',
        1: 'toledo village 2',
        2: 'toledo village 3'
      }
  ] 
  }
];

export const App = () => { 
  const { data, isLoading } = useQuery('latestdata', getApiData);  
  const [date, setDate ] = useState('')  

  useEffect(() => { 
    ReactGA.initialize('UA-175547717-1');
    ReactGA.pageview(window.location.pathname + window.location.search); 
    if(data){
      let date = Number(data.data[0].lastUpdate);
      let formmatedDate = new Date(date);
      setDate(formmatedDate.toDateString()); 
   }
  }, [isLoading])

  const getVillages = (e:any) => {  
    const districtData = affectedVillagesData.filter(district => district.name === e.target.getAttribute('data-value'));
  }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1><span className="virus" role="img" aria-label="virus">🦠</span> Belize Coronavirus (covid-19) cases and live updates <span className="virus" role="img" aria-label="virus">🦠</span></h1>
    <h4>🇧🇿 Total Cases: {isLoading ? 'loading...' : data?.data[0].confirmed} 🇧🇿 <br/><br/> <span>Last Updated: { isLoading ? 'loading...' :  date}</span></h4>
          <div className="screening-data">
            <div className="btn">
               <p className="title">Test Done</p>
                 <img src={swab} alt="Belize Coronavirus updates"/>
               <p className="text">5,855</p>
            </div>
            <div className="btn">
              <p className="title">Under Investigation</p>
               <img src={search} alt="Belize Coronavirus under investigation"/>
              <p className="text">412</p>
            </div>
            <div className="btn">
              <p className="title">Negative</p>
               <img src={negative} alt="Belize negative cases"/>
              <p className="text">5,186</p>
            </div>
            <div className="btn">
              <p className="title">Confirmed</p>
               <img src={positive} alt="Belize Coronavirus confirmed"/>
              <p className="text"> {isLoading ? 'loading...' : data?.data[0].confirmed} </p>
            </div>
            <div className="btn">
              <p className="title">Deseased</p>
               <img src={death} alt="Belize Coronavirus deseased"/>
               <p className="text"> {isLoading ? 'loading...' : data?.data[0].deaths}</p>
            </div>
            <div className="btn">
              <p className="title">Recovered</p>
               <img src={recovered} alt="Belize Coronavirus recovered"/>
              <p className="text"> {isLoading ? 'loading...' : data?.data[0].recovered}</p>
            </div>
            <div className="btn">
              <p className="title">Active</p>
               <img src={active} alt="Belize Coronavirus Active cases"/>
               <p className="text"> {isLoading ? 'loading...' : data?.data[0].active}</p>
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
        <div className="container">
          <LiveTimelineChart/>
        </div>
        <div className="map-container"> 
            <div className="map-container-inner">
              <div>
                <h1 className="paper-title">View Cases on Map</h1>
                <div className="districts-row">
                  <div className="district" onClick={(e) => getVillages(e)} data-value="corozal">Corozal</div>
                  <div className="district" onClick={(e) => getVillages(e)} data-value="belize">Belize</div>
                  <div className="district" onClick={(e) => getVillages(e)} data-value="orangewalk">Orange Walk</div>
                  <div className="district" onClick={(e) => getVillages(e)} data-value="cayo">Cayo</div>
                  <div className="district" onClick={(e) => getVillages(e)} data-value="stanncreek">Stann Creek</div>
                  <div className="district" onClick={(e) => getVillages(e)} data-value="toledo">Toledo</div>
                </div>
                <div className="affected-areas">
                    <div className="district-area">San Ignacio <span className="virus" role="img" aria-label="virus">🦠</span></div>
                    <div className="district-area">San Ignacio <span className="virus" role="img" aria-label="virus">🦠</span></div>
                    <div className="district-area">San Ignacio <span className="virus" role="img" aria-label="virus">🦠</span></div>
                    <div className="district-area">San Ignacio <span className="virus" role="img" aria-label="virus">🦠</span></div>
                    <div className="district-area">San Ignacio <span className="virus" role="img" aria-label="virus">🦠</span></div>
                    <div className="district-area">San Ignacio <span className="virus" role="img" aria-label="virus">🦠</span></div>
                    <div className="district-area">San Ignacio <span className="virus" role="img" aria-label="virus">🦠</span></div>
                    <div className="district-area">San Ignacio <span className="virus" role="img" aria-label="virus">🦠</span></div>
                    <div className="district-area">San Ignacio <span className="virus" role="img" aria-label="virus">🦠</span></div>
                </div>
              </div>
              <BelizeMap/> 
            </div>
        </div> 
        <Footer/>
      </div>
    ); 
}

export default App;
