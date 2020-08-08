import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  fontSize, fontWeight, padding,
} from 'styled-system';

import showdown from 'showdown';
import Flex from '../../atoms/Flex';

const MarkdownStyled = styled(Flex)`
  ${fontSize}
  ${fontWeight}
  ${padding}

  color: ${({ theme }) => theme.colors.primary};

  h1,h2,h3, h4{
    margin-top: 8px;
  }
  p{
    margin-top: 8px;
  }

  a{
    color: ${({ theme }) => theme.colors.secondary}
  }

  ul{
    list-style: inside;
    padding-left: 16px;
  }

`;

const Markdown = ({ body, ...props }) => {
  const [bodyHtml, setBodyHtml] = useState('');

  useEffect(() => {
    const converter = new showdown.Converter();
    setBodyHtml(converter.makeHtml(body));
  }, [body]);

  return <MarkdownStyled dangerouslySetInnerHTML={{ __html: bodyHtml }} {...props} />;
};

Markdown.propTypes = {
  body: PropTypes.string.isRequired,
};

export default Markdown;
