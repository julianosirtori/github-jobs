import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  layout, padding, space, background,
} from 'styled-system';
import styled from 'styled-components';

import Avatar from '../../atoms/Avatar';
import Flex from '../../atoms/Flex';
import Label from '../../atoms/Label';
import Text from '../../atoms/Text';

const JobItemStyled = styled(Link)`
  ${space}
  ${background}
  ${padding}
  ${layout}

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  transition: all .2s ease-in-out;
  display: flex;
  border-radius: 4px;

  &:hover{
    cursor: pointer;
    transform: scale(1.02); 
  }

`;

const JobItem = ({ job }) => (
  <JobItemStyled
    to={`/job/${job.number}`}
    background="white"
    width="100%"
    padding={12}
  >
    <Avatar src={job.user.avatar_url} marginRight={16} />
    <Flex flexDirection="column" width="100%">
      <Text color="primary" fontWeight="bold" marginBottom="4px" fontSize="large">{job.title}</Text>
      <Text color="primary" marginBottom="12px" fontSize="small">
        {`aberto por ${job.user.login}`}
      </Text>
      <Flex>
        {
          job.labels.map((label) => (
            <Label marginRight={2} key={label.id} color={`#${label.color}`}>{label.name}</Label>
          ))
        }
      </Flex>
    </Flex>
  </JobItemStyled>
);

JobItem.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobItem;
