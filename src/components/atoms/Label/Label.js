import React from 'react';
import styled from 'styled-components';
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
  <TextStyled color="textLight" fontSize={0} {...props}>
    {icon && icon}
    {children}

  </TextStyled>
);

export default Label;
