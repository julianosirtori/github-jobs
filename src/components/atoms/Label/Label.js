import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  fontSize, fontWeight, padding, space,
} from 'styled-system';

import Text from '../Text';

const LabelContainer = styled.div`
  ${fontSize}
  ${fontWeight}
  ${padding}
  ${space}

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.color};
  padding: 4px 8px;
  border: 1px solid ${(props) => props.color};
  border-radius: ${(props) => props.theme.borderRadius[0]}px;
  width: max-content;
`;

const Label = ({ children, color, ...props }) => (
  <LabelContainer color={color} {...props}>
    <Text fontWeight="bold" color="white">{children}</Text>
  </LabelContainer>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Label.defaultProps = {
  color: '#334680',
};

export default Label;
