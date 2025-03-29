import React from 'react';
import { ImageBackground } from 'react-native';
import { Avatar } from '@ui-kitten-react-native/components';

export const AvatarImageComponentShowcase = (): React.ReactElement => (
  <Avatar
    source={require('../../assets/icon.png')}
    ImageComponent={ImageBackground}
  />
);
