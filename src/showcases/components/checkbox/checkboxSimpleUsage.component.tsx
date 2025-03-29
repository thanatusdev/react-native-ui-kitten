import React from 'react';
import { CheckBox } from '@ui-kitten-react-native/components';

export const CheckboxSimpleUsageShowcase = (): React.ReactElement => {

  const [checked, setChecked] = React.useState(false);

  return (
    <CheckBox
      checked={checked}
      onChange={nextChecked => setChecked(nextChecked)}
    >
      {`Checked: ${checked}`}
    </CheckBox>
  );
};
