import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from '../../atoms/Avatar';
import Flex from '../../atoms/Flex';
import Label from '../../atoms/Label';
import Text from '../../atoms/Text';

const JobItemStyled = styled(Flex)`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  transition: all .2s ease-in-out;

  &:hover{
    cursor: pointer;
    transform: scale(1.05); 
  }

`;

const JobItem = ({ job }) => (
  <JobItemStyled
    background="white"
    width="100%"
    borderRadius={4}
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
