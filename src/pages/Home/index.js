import React from 'react';

import Flex from '../../components/atoms/Flex';
import Text from '../../components/atoms/Text';
import SearchJob from '../../components/molecules/SearchJob';

function Home() {
  return (
    <Flex minHeight="100%" bg="#F6F7FB">
      <Flex flexDirection="column" marginY="32px" marginX="auto" maxWidth={1200} width="100%" minHeight="100%">
        <Flex marginBottom="32px">
          <Text fontSize="xlarge" marginRight="4px" fontWeight="bold">Github</Text>
          <Text fontSize="xlarge">Jobs</Text>
        </Flex>

        <SearchJob marginBottom={42} />

        <Flex>
          <Flex />
          <Flex />
        </Flex>
      </Flex>

    </Flex>
  );
}

export default Home;
