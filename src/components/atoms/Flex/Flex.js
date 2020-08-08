import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
  layout, padding, color, space, background, border, flex,
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
  ${flex}

  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection || 'row')} ;
  justify-content: ${({ justifyContent }) => (justifyContent || 'flex-start')} ;
  align-items:  ${({ alignItems }) => (alignItems || 'flex-start')} ;

  ${({ variant }) => flexVariations[variant]}
`;

Flex.propTypes = {
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  variant: PropTypes.string,
  alignItems: PropTypes.string,
};

export default Flex;
