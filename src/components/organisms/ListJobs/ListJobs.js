import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import JobItem from '../../molecules/JobItem';

const List = styled.ul`
  width: 100%;
  li{
    margin-bottom: 32px;
  }
`;

const ListJobs = ({ jobs, ...props }) => (
  <List {...props}>
    {jobs.map((job) => (
      <li key={job.id}>
        <JobItem job={job} />
      </li>
    ))}
  </List>
);

ListJobs.propTypes = {
  jobs: PropTypes.array.isRequired,
};

export default ListJobs;
