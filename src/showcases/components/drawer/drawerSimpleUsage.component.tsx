import React from 'react';
import { Drawer, DrawerItem, IndexPath } from '@ui-kitten-react-native/components';

export const DrawerSimpleUsageShowcase = (): React.ReactElement => {

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  return (
    <Drawer
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
    >
      <DrawerItem title='Users' />
      <DrawerItem title='Orders' />
      <DrawerItem title='Transactions' />
      <DrawerItem title='Settings' />
    </Drawer>
  );
};
