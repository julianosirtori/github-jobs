import React from 'react';
import styled from 'styled-components';

import JobItem from '../../molecules/JobItem';

const List = styled.ul`
  width: 100%;
  li{
    margin-bottom: 32px;
  }
`;

const ListJobs = ({ ...props }) => (
  <List {...props}>
    <li>
      <JobItem />
    </li>
    <li>
      <JobItem />
    </li>
    <li>
      <JobItem />
    </li>
    <li>
      <JobItem />
    </li>
    <li>
      <JobItem />
    </li>

  </List>
);

export default ListJobs;
