import axios from 'axios';


const getApiData = () => {
  return axios.get("https://covid19.mathdro.id/api/countries/belize/confirmed");
}

const getCasesByTimeline = () => {
  return axios.get("https://covid19.mathdro.id/api/countries/belize/confirmed");
}

const getCasesByDistrict = () => {
  return axios.get(process.env.React_APP_District_Cases)
}

const getCasesByGender = () => {
  return axios.get(process.env.REACT_APP_CONFIRMEDCASESGENDER)
}

export { getCasesByDistrict, getCasesByGender, getApiData, getCasesByTimeline }