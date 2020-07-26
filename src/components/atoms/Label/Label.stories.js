import React from 'react';
import { MdWork } from 'react-icons/md';
import Label from './Label';

export default {
  title: 'atoms/Label',
  component: Label,
};

export const Default = () => <Label>Github</Label>;

export const WithIcon = () => <Label icon={(<MdWork />)}>Github</Label>;
