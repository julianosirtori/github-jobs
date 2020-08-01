import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../Text';

const TextStyled = styled(Text)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: max-content;

  i,svg{
    margin-right: 8px;
  }

`;

const Label = ({ children, icon, ...props }) => (
  <TextStyled color="textLight" fontSize="small" {...props}>
    {icon && icon}
    {children}

  </TextStyled>
);

Label.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.any,
};

Label.defaultProps = {
  children: null,
  icon: null,
};

export default Label;
