import React from 'react';
import styled from 'styled-components';
import {
  fontSize, fontWeight, padding,
} from 'styled-system';

import Text from '../Text';

const BadgeContainer = styled.div`
  ${fontSize}
  ${fontWeight}
  ${padding}

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius[0]}px;
  width: max-content;

`;

const Badge = ({ children, props }) => (
  <BadgeContainer {...props}>
    <Text fontWeight="bold" color="primary">{children}</Text>
  </BadgeContainer>
);

export default Badge;
