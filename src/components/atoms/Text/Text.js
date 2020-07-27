import styled, { css } from 'styled-components';
import {
  color, fontSize, fontWeight,
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

  ${({ variant }) => textVariations[variant]}
`;

export default Text;
