import React from 'react';
import styled from 'styled-components';
import { MdSchedule, MdPublic } from 'react-icons/md';
import Avatar from '../../atoms/Avatar';
import Flex from '../../atoms/Flex';
import Badge from '../../atoms/Badge';
import Label from '../../atoms/Label';
import Text from '../../atoms/Text';

const JobItemStyled = styled(Flex)`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`;

const JobItem = () => (
  <JobItemStyled
    background="white"
    width="100%"
    borderRadius={4}
    padding={12}
  >
    <Avatar marginRight={16} />
    <Flex flexDirection="column" width="100%">
      <Text fontWeight="bold" color="primary" marginBottom="8px" fontSize="small">Kasisto</Text>
      <Text color="primary" marginBottom="12px" fontSize="large">Front-End Software Enginner</Text>
      <Flex justifyContent="space-between">
        <Flex>
          <Badge>Full Time</Badge>
        </Flex>
        <Flex>
          <Label icon={(<MdPublic />)} marginRight={28}>New York</Label>
          <Label icon={(<MdSchedule />)}>5 days ago</Label>
        </Flex>
      </Flex>

    </Flex>
  </JobItemStyled>
);

export default JobItem;
