import React from 'react';
import { MdWork } from 'react-icons/md';

import WorkBackground from '../../../assets/images/workbackground.png';

import Flex from '../../atoms/Flex';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

const SearchJob = ({ ...props }) => (
  <Flex
    backgroundImage={`url('${WorkBackground}')`}
    backgroundPosition="center"
    borderRadius={8}
    width="100%"
    height="138px"
    {...props}
  >
    <Input
      maxWidth={790}
      width="100%"
      margin="auto"
      placeholder="Title, companies, expertise or benefits"
      sufix={(
        <MdWork color="textLight" />
      )}
      color="textLight"
      prefix={(
        <Button variant="big">
          Search
        </Button>
    )}
    />
  </Flex>
);

export default SearchJob;
