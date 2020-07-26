import styled, { css } from 'styled-components';
import {
  fontSize, fontWeight, padding,
} from 'styled-system';

const buttonVariations = {
  big: css`
    font-size: ${(props) => props.theme.fontSizes[2]}px;
    padding: 14px 48px;
  `,
  small: css`
    font-size: ${(props) => props.theme.fontSizes[0]}px;
    padding: 11px 14px;
  `,
};

const Button = styled.button`
  ${fontSize}
  ${fontWeight}
  ${padding}

  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  ${({ variant }) => buttonVariations[variant || 'big']}
`;

export default Button;
