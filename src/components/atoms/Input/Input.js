import React from 'react';
import styled, { css } from 'styled-components';
import {
  fontSize, fontWeight, padding,
} from 'styled-system';

const inputVariations = {
  big: css`
   padding: 19px 17px;
  `,
  small: css`
    padding: 17px 14px;
  `,
};

const ContainerStyled = styled.div`
  ${fontSize}
  ${fontWeight}
  ${padding}

  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius[0]}px;
  display: flex;
  max-height: 55px;
  flex-direction: row;
  align-items: center;
  color:  ${(props) => props.theme.colors.textLight};
  font-size:  ${(props) => props.theme.fontSizes[0]};

  ${({ variant }) => inputVariations[variant || 'small']}

  input{
    border: none;
    flex: 1;
    margin-left: 10px;
  }
`;

const Input = ({ sufix, prefix, ...props }) => {
  if (sufix) {
    return (
      <ContainerStyled>
        {sufix}
        <input {...props} />
      </ContainerStyled>
    );
  }

  if (prefix) {
    return (
      <ContainerStyled>
        <input {...props} />
        {prefix}
      </ContainerStyled>
    );
  }

  return (
    <ContainerStyled>
      <input {...props} />
    </ContainerStyled>
  );
};

export default Input;
