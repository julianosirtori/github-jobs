import styled, { css } from 'styled-components';
import {
  color, fontSize, fontWeight, space,
} from 'styled-system';

const textVariations = {
  center: css`
     text-align: center;
  `,
};

const Text = styled.span`
  ${color}
  ${fontSize}
  ${fontWeight}
  ${space}

  ${({ variant }) => textVariations[variant]}
`;

export default Text;
