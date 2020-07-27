import styled, { css } from 'styled-components';
import { layout } from 'styled-system';

const flexVariations = {
  centered: css`
    justify-content: center;
    align-items: center;
  `,
};

const Flex = styled.div`
  ${layout}
  display: flex;
  flex-direction: column;

  ${({ variant }) => flexVariations[variant]}
`;

export default Flex;
