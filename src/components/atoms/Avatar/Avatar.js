import React from 'react';
import styled from 'styled-components';
import {
  fontSize, fontWeight, padding, layout,
} from 'styled-system';

import Text from '../Text';
import Flex from '../Flex';

const AvatarStyled = styled.img`
  ${fontSize}
  ${fontWeight}
  ${padding}
  ${layout}

  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.backgroundAvatar}; 
  color: ${(props) => props.theme.colors.textDisabled};
`;

const FlexStyled = styled(Flex)`
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.backgroundAvatar}; 
  color: ${(props) => props.theme.colors.textDisabled};
`;

export const Avatar = ({ src, ...props }) => {
  if (src) {
    return <AvatarStyled src={src} {...props} />;
  }

  return (
    <FlexStyled variant="centered" {...props}>
      {!src && (<Text variant="center" layout="100%">not found</Text>)}
    </FlexStyled>
  );
};

export default Avatar;
