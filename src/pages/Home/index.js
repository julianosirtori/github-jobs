import React, { useState, useEffect } from 'react';

import api from '../../sercices/api';

import Flex from '../../components/atoms/Flex';
import SearchJob from '../../components/molecules/SearchJob';
import ListJobs from '../../components/organisms/ListJobs';

function Home() {
  const [jobs, setJobs] = useState([]);

  async function fetchJobs() {
    const response = await api.get('/repos/frontendbr/vagas/issues?state=open&per_page=20');
    const { data } = response;
    setJobs(data);
  }

  function searchJobs(jobsSearch) {
    setJobs(jobsSearch);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Flex flexDirection="column" width="100%">
      <SearchJob onClick={searchJobs} marginBottom={42} />
      <Flex justifyContent="space-between" width="100%" marginRight="32">
        <ListJobs jobs={jobs} />
      </Flex>
    </Flex>
  );
}

export default Home;
