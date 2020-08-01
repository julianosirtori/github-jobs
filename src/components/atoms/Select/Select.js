import styled from 'styled-components';
import {
  fontSize, fontWeight, padding,
} from 'styled-system';

const selectVariations = {};

const Select = styled.select`
  ${fontSize}
  ${fontWeight}
  ${padding}

  /* ${({ variant }) => selectVariations[variant || 'big']} */
`;

export default Select;
