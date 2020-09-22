import React from 'react';
import { useQuery } from 'react-query'
import { getCasesByDistrict } from '../repository/api';
export const Footer = () => {
  const { data, status, error, isLoading } = useQuery('casesbydistrict', getCasesByDistrict) 
  return (
      <div className="footer"> 
        <p>This site is to show the latest on coronavirus cases based on official reports made from Belize. If you would like to contribute to the source code, feel free to do so <a href="https://github.com/lmanzanero/belize-coronavirus-tracker" target="_blank" rel="noopener noreferrer">here</a><span role="img" alt="globe"> 🌎🇧🇿</span></p>
      </div>
  );
}