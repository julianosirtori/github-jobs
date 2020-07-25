---
to: src/components/<%= type %>/<%= h.changeCase.pascalCase(name) %>/index.js
---
export { default } from './<%= h.changeCase.pascalCase(name) %>';
