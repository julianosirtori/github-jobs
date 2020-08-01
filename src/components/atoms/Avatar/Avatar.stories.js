import React from 'react';
import Avatar from './Avatar';

export default {
  title: 'atoms/Avatar',
  component: Avatar,
};

export const Default = () => <Avatar />;

export const WithUrl = () => <Avatar src="https://seeklogo.com/images/G/github-logo-45146A3FBE-seeklogo.com.png" alt="Github" />;

export const small = () => <Avatar size="small" src="https://seeklogo.com/images/G/github-logo-45146A3FBE-seeklogo.com.png" alt="Github" />;
