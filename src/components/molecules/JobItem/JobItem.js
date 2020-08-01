// import React from 'react';
import styled from 'styled-components';
import {
  fontSize, fontWeight, padding,
} from 'styled-system';

const jobItemVariations = {};

const JobItem = styled.button`
  ${fontSize}
  ${fontWeight}
  ${padding}

  /* ${({ variant }) => jobItemVariations[variant || 'big']} */
`;

export default JobItem;
