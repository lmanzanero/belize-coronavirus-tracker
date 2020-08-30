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
import belize from './belize.svg';
import ReactGA from 'react-ga';
import axios from 'axios';
import BelizeMap from './components/Map';
import GenderChart from './components/GenderChart';

class App extends Component {
  constructor(props){
    super(props); 
    this.state = {
      chartData: props.chartData,
      lineChartData: props.lineChartData,
      genderData: props.chartData,
      apiData: [],
      groupMonths: [],
      activeCases: 0,
      deaths: 0,
      confirmedCases: 0,
      recovered: 0,
      lastUpdated: ''
    }
    ReactGA.initialize('UA-175547717-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  componentWillMount(){ 
    this.getChartData();
    this.getChartLineData(); 
  }

  componentDidMount() {
    this.getApiData();
    this.getLatestData();
  }

  //  setGroupMonths() {
  //   const districtCases = this.state.apiData; 
    // const cleanDistrictCases = districtCases.map((cases, i) => { 
    //     console.log(cases.attributes.confirmfemale);
    //     console.log(cases.attributes.confirmale);
    //     return [cases.attributes.confirmfemale, cases.attributes.confirmale]
    // });
    // const cleanedMonths = months.map((month, i) => {
    //   // let timeStamp =  Number(Date.UTC(month['attributes'].date));
    //   // let timeStamp =  Number(Date.UTC(month['attributes'].date));
    //   let cases = Number(month['attributes'].new_cases); 
    //   // let date = Date(timeStamp);   
    //   // let cases = Number(month['attributes'].total_cases);  
    //   // console.log(month['attributes'].total_cases, months[i]['attributes'].total_cases);
    //   return {cases: cases, date: month['attributes'].date}
    // })
    
    // const groupMonths = Object.values(cleanedMonths.reduce(a, {cases, date}) => {
    //   if(!a[date]){
    //     a[date] = Object.assign({}, {cases, date});
    //   } else {
    //     a[date].cases += cases
    //   }
    //   return a;
    // }, {}));

    // const groupMonths = Object.values(cleanedMonths.reduce((a, {cases, date})=>{
    //   if(!a[date])
    //     a[date] = Object.assign({},{cases, date});
    //    else
    //     a[date].cases += cases;
    //   return a;
    //  },{}));
    

  //   //  console.log(groupMonths);
  //   console.log(cleanDistrictCases)
  //    return cleanDistrictCases;
  // }

  getApiData() { 
    axios.get(`https://services6.arcgis.com/fbMLjLVHNRUxmuIA/arcgis/rest/services/country_covid19_cases/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22confirmale%22%2C%22outStatisticFieldName%22%3A%22confirmale%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22confirmfemale%22%2C%22outStatisticFieldName%22%3A%22confirmfemale%22%7D%5D&resultType=standard&cacheHint=true`)
    .then((e) => {      
      this.setState({
          genderData: {
          labels: ['Male', 'Female'],
          datasets: [
            {
              label: 'Cases',
              data:[
                e.data.features[0].attributes.confirmale,
                e.data.features[0].attributes.confirmfemale,
              ],
              backgroundColor:[ 
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)', 
            ],
            }
          ]
        }
      })
    })
    .catch((error) => console.log(error)); 
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
    this.setState({
      chartData: {
        labels: ['Corozal', 'Orange Walk', 'San Pedro','Belize City', 'Cayo', 'Stann Creek', 'Toledo'],
        datasets: [
          {
            label: 'Cases',
            data:[
              56,
              165,
              196,
              116,
              58,
              15,
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

  getLatestData() { 
    //https://covid19.mathdro.id/api/countries/belize
    axios.get(`https://covid19.mathdro.id/api/countries/belize/confirmed`)
    .then((e) => { 
      console.log(e.data[0].active)
      this.setState({
        activeCases: e.data[0].active,
        deaths: e.data[0].deaths,
        confirmedCases: e.data[0].confirmed,
        lastUpdated: e.data[0].lastUpdate,
        recovered: e.data[0].recovered
      });
    })
    .catch((e) => {
      console.log(e);
    })
  }

  render() {     
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1><img className="virus" src={virus} alt="Belize Coronavirus updates"/> Belize Coronavirus Cases and live updates <img className="virus" src={virus} alt="Belize Coronavirus updates"/></h1>
          <h4>🇧🇿Total Cases: {this.state.confirmedCases} 🇧🇿 <br/> <span>Last Updated: {Date(Number(this.state.lastUpdated)*1000)}</span></h4>
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
              <p>605</p>
            </div>
            <div className="btn">
              <p>Deseased</p>
               <img src={death} alt="Belize Coronavirus deseased"/>
               <p className="number">{this.state.deaths}</p>
            </div>
            <div className="btn">
              <p>Recovered</p>
               <img src={recovered} alt="Belize Coronavirus recovered"/>
              <p>{this.state.recovered}</p>
            </div>
            <div className="btn">
              <p>Active</p>
               <img src={active} alt="Belize Coronavirus Active cases"/>
               <p>{this.state.activeCases}</p>
            </div>
          </div>
        </div>
        <div className="grid-2">
          <Chart chartData={this.state.chartData} location="District" legendPosition='bottom' /> 
          <TimelineChart chartData={this.state.lineChartData} location="Belize" legendPosition='bottom' />
        </div>
        <div className="grid-2"> 
          {this.state.genderData ? <GenderChart chartData={this.state.genderData} legendPosition='bottom' />  : <div className="chart"><div className="chart-inner"><h1 style={{color: "whitesmoke"}}>loading...</h1></div></div>}
          <TimelineChart chartData={this.state.lineChartData} location="Belize" legendPosition='bottom' />
        </div>
        <div className="belize-map"> 
            <h1>View Cases on Map</h1>
            {/* <BelizeMap/> */}
        </div> 
        <Footer/>
      </div>
    );
  }
}

export default App;
