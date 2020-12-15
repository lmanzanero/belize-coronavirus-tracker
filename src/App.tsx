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
import { useMapApi } from './repository/useMapApi';

 

export const App = () => { 
  const { data, isLoading } = useQuery('latestdata', getApiData);  
  const [date, setDate ] = useState('')  
  const { data: mapData, action } = useMapApi();
  const [ activeDistrict, setActiveDistrict ] = useState('');

  useEffect(() => { 
    console.log(action)
    ReactGA.initialize('UA-175547717-1');
    ReactGA.pageview(window.location.pathname + window.location.search); 
    if(data){
      let date = Number(data.data[0].lastUpdate);
      let formmatedDate = new Date(date);
      setDate(formmatedDate.toDateString()); 
   }
  }, [isLoading])

  const getVillages = (e:any) => {  
    console.log("getting villages...")
    const districtData = mapData.filter(district => district.name === e.target.getAttribute('data-value')); 
    setActiveDistrict(districtData[0].name)
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
               <p className="text">19,351</p>
            </div>
            <div className="btn">
              <p className="title">Under Investigation</p>
               <img src={search} alt="Belize Coronavirus under investigation"/>
              <p className="text">531</p>
            </div>
            <div className="btn">
              <p className="title">Negative</p>
               <img src={negative} alt="Belize negative cases"/>
              <p className="text">14799</p>
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
              <div  className="map-data-col">
                <h1 className="paper-title">View Cases on Map</h1>
                <div className="districts-row">
                  <div className="district" onClick={getVillages} data-value="corozal">Corozal</div>
                  <div className="district" onClick={getVillages} data-value="belize">Belize</div>
                  <div className="district" onClick={getVillages} data-value="orangewalk">Orange Walk</div>
                  <div className="district" onClick={getVillages} data-value="cayo">Cayo</div>
                  <div className="district" onClick={getVillages} data-value="stanncreek">Stann Creek</div>
                  <div className="district" onClick={getVillages} data-value="toledo">Toledo</div>
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
              <BelizeMap activeDistrict={activeDistrict || 'cayo'} /> 
            </div>
        </div> 
        <Footer/>
      </div>
    ); 
}

export default App;
