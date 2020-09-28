import axios from 'axios';


const getApiData = () => {
  return axios.get("https://covid19.mathdro.id/api/countries/belize/confirmed");
}

const getCasesByTimeline = () => {
  return axios.get("https://api.covid19api.com/total/dayone/country/belize/status/confirmed");
}



const getCasesSinceDayOne = () => {
  return axios.get("https://api.covid19api.com/dayone/country/belize/status/confirmed/live")
}

const getDeathsByTimeLine = () => {
  return axios.get("https://services6.arcgis.com/8TOGEuvqHhwQHCke/arcgis/rest/services/MOH_Infographics_CountryIndicator/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=ObjectId%2CConfirmed%2CDate&orderByFields=Date%20asc&resultOffset=0&resultRecordCount=32000&resultType=standard&cacheHint=true")
}
const getCasesByDistrict = () => {
  return axios.get("https://services6.arcgis.com/fbMLjLVHNRUxmuIA/arcgis/rest/services/Covid_district_cases_point_view_aug06/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&groupByFieldsForStatistics=district&orderByFields=value%20desc&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22confirmcases%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&resultType=standard&cacheHint=true")
}

const getCasesByGender = () => {
  return axios.get("https://services6.arcgis.com/fbMLjLVHNRUxmuIA/arcgis/rest/services/country_covid19_cases/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22confirmale%22%2C%22outStatisticFieldName%22%3A%22confirmale%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22confirmfemale%22%2C%22outStatisticFieldName%22%3A%22confirmfemale%22%7D%5D&resultType=standard&cacheHint=true")
}

const getGithubContributors = () => {
  return axios.get("https://api.github.com/repos/lmanzanero/belize-coronavirus-tracker/contributors");
}

export { 
  getCasesByDistrict, 
  getCasesByGender, 
  getApiData, 
  getCasesByTimeline, 
  getDeathsByTimeLine,
  getCasesSinceDayOne,
  getGithubContributors 
}