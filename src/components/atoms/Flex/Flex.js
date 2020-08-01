import styled, { css } from 'styled-components';
import {
  layout, padding, color, space, background, border,
} from 'styled-system';

const flexVariations = {
  centered: css`
    justify-content: center;
    align-items: center;
  `,
};

const Flex = styled.div`
  ${layout}
  ${padding}
  ${color}
  ${space}
  ${background}
  ${border}
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection || 'row')} ;

  ${({ variant }) => flexVariations[variant]}
`;

export default Flex;
