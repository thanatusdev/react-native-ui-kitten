/**
 * IMPORTANT: To use Moment make sure to install Moment Date Service
 * npm i @ui-kitten-react-native/moment
 */

import React from 'react';
import { Calendar } from '@ui-kitten-react-native/components';
import { MomentDateService } from '@ui-kitten-react-native/moment';
import moment from 'moment';

const dateService = new MomentDateService();

export const CalendarMomentShowcase = (): React.ReactElement => {

  const [date, setDate] = React.useState(moment());

  return (
    <Calendar
      dateService={dateService}
      date={date}
      onSelect={nextDate => setDate(nextDate)}
    />
  );
};
