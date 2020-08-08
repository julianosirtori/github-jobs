import React, { useState } from 'react';
import { MdWork } from 'react-icons/md';
import Proptypes from 'prop-types';
import WorkBackground from '../../../assets/images/workbackground.png';

import api from '../../../sercices/api';

import Flex from '../../atoms/Flex';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Form from '../../atoms/Form';

const SearchJob = ({ onClick, ...props }) => {
  const [search, setSearch] = useState('');

  async function submitSearch(event) {
    event.preventDefault();
    const response = await api.get(`/search/issues?state=open&per_page=20&order=desc&q=${search}%20repo:frontendbr/vagas`);
    const { items } = response.data;
    onClick(items);
  }

  return (
    <Flex
      backgroundImage={`url('${WorkBackground}')`}
      backgroundPosition="center"
      borderRadius={8}
      width="100%"
      height="138px"
      {...props}
    >
      <Form
        width="100%"
        margin="auto"
        maxWidth={790}
        onSubmit={submitSearch}
      >
        <Input
          width="100%"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Title, companies, expertise or benefits"
          sufix={(
            <MdWork color="textLight" />
      )}
          color="textLight"
          prefix={(
            <Button type="submit" variant="big">
              Search
            </Button>
    )}
        />
      </Form>
    </Flex>
  );
};

SearchJob.propTypes = {
  onClick: Proptypes.func.isRequired,
};

export default SearchJob;
