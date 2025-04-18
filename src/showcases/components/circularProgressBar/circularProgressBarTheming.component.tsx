import React from 'react';
import { CircularProgressBar } from '@ui-kitten-react-native/components';
import { useProgress } from '../../helpers/progress.hook';

export const CircularProgressBarThemingShowcase = (): React.ReactElement => {
  const progress = useProgress();
  return (
    <CircularProgressBar progress={progress} />
  );
};
