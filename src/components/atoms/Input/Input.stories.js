import React from 'react';
import { MdWork } from 'react-icons/md';

import Input from './Input';
import Button from '../Button';

export default {
  title: 'atoms/Input',
  component: Input,
};

export const Default = () => <Input placeholder="Design System" />;

export const sufix = () => <Input sufix={(<MdWork />)} placeholder="Design System" />;

export const prefix = () => <Input prefix={(<Button>Search</Button>)} placeholder="Design System" />;

export const big = () => <Input placeholder="Design System" />;

export const small = () => <Input placeholder="Design System" />;
