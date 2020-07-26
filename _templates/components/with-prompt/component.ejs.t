---
to: src/components/<%= type %>/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.js
---
import React from 'react';
import {
  color, fontSize, fontWeight,
} from 'styled-system';


function <%= h.changeCase.pascalCase(name) %>({ children }) {
  return <div>{children}</div>;
}

export default <%= h.changeCase.pascalCase(name) %>;
