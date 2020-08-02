import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  fontSize, fontWeight, padding, layout, space,
} from 'styled-system';

import Text from '../Text';
import Flex from '../Flex';

const avatarSizes = {
  default: css`
    height: 90px;
    width: 90px;
  `,
  small: css`
    height: 42px;
    width: 42px;
  `,
};

const AvatarStyled = styled.img`
  ${fontSize}
  ${fontWeight}
  ${padding}
  ${layout}
  ${space}

  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.backgroundAvatar}; 
  color: ${(props) => props.theme.colors.textDisabled};

  ${({ size }) => avatarSizes[size || 'default']}
`;

const FlexStyled = styled(Flex).attrs({
  variant: 'centered',
})`
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.backgroundAvatar}; 
  color: ${(props) => props.theme.colors.textDisabled};

  ${({ size }) => avatarSizes[size || 'default']}
`;

const Avatar = ({ src, ...props }) => {
  if (src) {
    return <AvatarStyled src={src} {...props} />;
  }

  return (
    <FlexStyled {...props}>
      {!src && (<Text variant="center" layout="100%">not found</Text>)}
    </FlexStyled>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
};

Avatar.defaultProps = {
  src: null,
};

export default Avatar;
