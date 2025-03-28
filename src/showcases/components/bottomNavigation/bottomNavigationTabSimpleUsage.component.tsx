import React from 'react';
import { BottomNavigationTab, Icon, IconElement } from '@ui-kitten-react-native/components';

const StarIcon = (props): IconElement => (
  <Icon
    {...props}
    name='star'
  />
);

export const BottomNavigationTabSimpleUsageShowcase = (): React.ReactElement => (
  <BottomNavigationTab
    title='USERS'
    icon={StarIcon}
  />
);
