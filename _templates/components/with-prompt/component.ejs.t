---
to: src/components/<%= type %>/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.js
---
import React from 'react';
import styled, { css } from 'styled-components';
import {
  fontSize, fontWeight, padding,
} from 'styled-system';

const <%= h.changeCase.camel(name) %>Variations = {};

const <%= h.changeCase.pascalCase(name) %> = styled.button`
  ${fontSize}
  ${fontWeight}
  ${padding}

  /* ${({ variant }) => <%= h.changeCase.camel(name) %>Variations[variant || 'big']} */
`;

export default <%= h.changeCase.pascalCase(name) %>;