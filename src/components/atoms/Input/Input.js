import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  layout, fontSize, fontWeight, space, color,
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
  ${space}
  ${layout}
  ${color}

  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius[0]}px;
  display: flex;
  max-height: 55px;
  flex-direction: row;
  align-items: center;
  color:  ${(props) => props.theme.colors.textLight};
  font-size:  ${(props) => props.theme.fontSizes.small};

  ${({ variant }) => inputVariations[variant || 'small']}

  input{
    border: none;
    flex: 1;
    margin-left: 10px;
  }
`;

const Input = ({
  sufix, maxWidth, prefix, ...props
}) => {
  if (sufix && prefix) {
    return (
      <ContainerStyled maxWidth={maxWidth} {...props}>
        {sufix}
        <input {...props} />
        {prefix}
      </ContainerStyled>
    );
  }

  if (sufix) {
    return (
      <ContainerStyled {...props}>
        {sufix}
        <input {...props} />
      </ContainerStyled>
    );
  }

  if (prefix) {
    return (
      <ContainerStyled {...props}>
        <input {...props} />
        {prefix}
      </ContainerStyled>
    );
  }

  return (
    <ContainerStyled {...props}>
      <input {...props} />
    </ContainerStyled>
  );
};

Input.propTypes = {
  sufix: PropTypes.any,
  prefix: PropTypes.any,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Input.defaultProps = {
  sufix: null,
  prefix: null,
  maxWidth: 'auto',
};

export default Input;
