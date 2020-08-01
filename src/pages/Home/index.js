import React from 'react';

import Flex from '../../components/atoms/Flex';
import Text from '../../components/atoms/Text';
import SearchJob from '../../components/molecules/SearchJob';
import ListJobs from '../../components/organisms/ListJobs';
import Filters from '../../components/molecules/Filters';

function Home() {
  return (
    <Flex minHeight="100%" bg="#F6F7FB">
      <Flex flexDirection="column" marginY="32px" marginX="auto" maxWidth={1200} width="100%" minHeight="100%">
        <Flex marginBottom="32px">
          <Text fontSize="xlarge" marginRight="4px" fontWeight="bold">Github</Text>
          <Text fontSize="xlarge">Jobs</Text>
        </Flex>

        <SearchJob marginBottom={42} />

        <Flex justifyContent="space-between" width="100%" marginRight="32">
          <Filters width="100%" maxWidth="320px" marginRight={32} />
          <ListJobs />
        </Flex>
      </Flex>

    </Flex>
  );
}

export default Home;
