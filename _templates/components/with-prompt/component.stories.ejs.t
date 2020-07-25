---
to: src/components/<%= type %>/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.stories.js
---
import React from 'react';
import <%= h.changeCase.pascalCase(name)%> from './<%= h.changeCase.pascalCase(name)%>';

export default {
  title: '<%= type%>/<%= h.changeCase.pascalCase(name)%>',
  component: <%= h.changeCase.pascalCase(name)%>,
};

export const Default = () => < <%= h.changeCase.pascalCase(name)%> />;
