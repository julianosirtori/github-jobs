import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { MdAccessTime } from 'react-icons/md';

import api from '../../sercices/api';

import Flex from '../../components/atoms/Flex';
import Text from '../../components/atoms/Text';
import Label from '../../components/atoms/Label';
import Markdown from '../../components/molecules/Markdown';

function Job() {
  const [issue, setIssue] = useState();

  const { id } = useParams();

  async function fetchIssue() {
    const response = await api.get(`/repos/frontendbr/vagas/issues/${id}`);
    const { data } = response;
    setIssue(data);
  }

  useEffect(() => {
    fetchIssue();
  }, [id]);

  return issue ? (
    <Flex flexDirection="column">
      <Flex marginBottom="16px">
        <Link to="/">
          <Flex alignItems="center" justifyContent="center">
            <BsArrowLeft color="#334680" size={24} />
            <Text color="primary" fontSize="large">Voltar</Text>
          </Flex>
        </Link>
      </Flex>

      <Flex justifyContent="center" alignItems="center">
        <Text color="primary" marginRight="4px" fontWeight="bold" fontSize="large">{issue.title}</Text>
        <Flex>
          {
            issue.labels.map((label) => (
              <Label marginRight={2} key={label.id} color={`#${label.color}`}>{label.name}</Label>))
          }
        </Flex>
      </Flex>
      <Flex marginTop="10px">
        <MdAccessTime color="#B9BDCF" />
        <Text marginLeft="8px" color="textLight" fontSize="small">{issue.created_at}</Text>
      </Flex>

      <Markdown flexDirection="column" body={issue.body} />

    </Flex>

  ) : <Flex />;
}

export default Job;
