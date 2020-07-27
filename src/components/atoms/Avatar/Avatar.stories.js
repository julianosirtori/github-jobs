import React from 'react';
import Avatar from './Avatar';

export default {
  title: 'atoms/Avatar',
  component: Avatar,
};

export const Default = () => <Avatar height={90} width={90} />;

export const WithUrl = () => <Avatar height={90} width={90} src="https://seeklogo.com/images/G/github-logo-45146A3FBE-seeklogo.com.png" alt="Github" />;
