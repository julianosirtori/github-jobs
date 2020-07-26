import React from 'react';
import Button from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
};

export const Default = () => <Button>Github</Button>;

export const Big = () => <Button variant="big">Github</Button>;

export const Small = () => <Button variant="small">Github</Button>;
