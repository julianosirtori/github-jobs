import React from 'react';

import Text from '../../atoms/Text';
import Flex from '../../atoms/Flex';
import Select from '../../atoms/Select';

const Filters = ({ ...props }) => {
  const labels = ['clt', 'pj', 'test'];
  return (
    <Flex flexDirection="column" {...props}>
      <Text fontSize="medium" fontWeight="bold">Labels</Text>
      <Select itens={labels}>
        { labels.map((label) => (
          <option key={label}>{label}</option>
        )) }
      </Select>
    </Flex>
  );
};

export default Filters;
