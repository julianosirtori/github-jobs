import React from 'react';
import Text from './Text';

export default {
  title: 'atoms/Text',
  component: Text,
};

export const Default = () => <Text>Github</Text>;

export const FontSize = () => <Text fontSize={4}>Github</Text>;

export const FontWeight = () => <Text fontWeight="bold">Github</Text>;

export const Color = () => <Text color="secondary">Github</Text>;
