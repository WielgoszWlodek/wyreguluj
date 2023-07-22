import React, { useState, useEffect } from 'react';
import { Pagination } from 'semantic-ui-react';
import axios from 'axios';

const Pagination1 = () => {
  const [data, setData] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [apiUrl, setApiUrl] = useState('https://swapi.co/api/people/');
  
  useEffect(() => {
  	axios.get(apiUrl).then(response => {
      setData(response.data.results);
    });
  }, [apiUrl]);
  
  const onChange = (e, pageInfo) => {
  	setActivePage(pageInfo.activePage);
    setApiUrl('https://swapi.co/api/people/?page=' + activePage.toString());
  };
  
  return (<div className="App">
  	<Pagination 
      activePage={activePage}
      onPageChange={onChange}
      totalPages={10}
      ellipsisItem={null}
    />
  </div>);
};

export default Pagination1;
