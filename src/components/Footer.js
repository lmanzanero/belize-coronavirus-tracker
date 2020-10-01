import React from 'react';
import { useQuery } from 'react-query'
import { getGithubContributors } from '../repository/api';
export const Footer = () => {
  // const { data, isLoading } = useQuery('getgithubcontributors', getGithubContributors); 
  return (
      <div className="footer"> 
        <p>This site is to show the latest on coronavirus cases based on official reports made from Belize. If you would like to contribute to the source code, feel free to do so <a href="https://github.com/lmanzanero/belize-coronavirus-tracker" target="_blank" rel="noopener noreferrer">here</a><span role="img" aria-label="globe" alt="globe"> 🌎🇧🇿</span></p>
        <div className="contributors">
        {/* <p><i>All Contributors</i> <span>({isLoading ? 'loading...' : data.data.length})</span></p>
          {
            isLoading ? 'loading...' : data.data.map(contributor =>  
                <a href={contributor.html_url} key={contributor.id} target="_blank" rel="noopener noreferrer"><img src={contributor.avatar_url} alt="users" /></a> 
              )
          } */}
        </div>
      </div>
  );
}