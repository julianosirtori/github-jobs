import styled, { css } from 'styled-components';
import { layout, padding } from 'styled-system';

const flexVariations = {
  centered: css`
    justify-content: center;
    align-items: center;
  `,
};

const Flex = styled.div`
  ${layout}
  ${padding}
  display: flex;
  flex-direction: column;

  ${({ variant }) => flexVariations[variant]}
`;

export default Flex;
