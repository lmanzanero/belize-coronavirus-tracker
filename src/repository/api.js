import axios from 'axios';


const getCasesByDistrict = () => {
  return axios.get(process.env.React_APP_District_Cases)
}

const getCasesByGender = () => {
  return axios.get(process.env.REACT_APP_CONFIRMEDCASESGENDER)
}

export { getCasesByDistrict, getCasesByGender }