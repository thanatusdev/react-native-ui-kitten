/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import { styled } from '../../theme';
import {
  BaseDatepickerComponent,
  BaseDatepickerProps,
} from './baseDatepicker.component';
import {
  RangeCalendar,
  RangeCalendarElement,
  RangeCalendarProps,
} from '../calendar/rangeCalendar.component';
import { RenderProp } from '@ui-kitten-react-native/components/devsupport';
import { TextProps } from '@ui-kitten-react-native/components';

export type RangeDatepickerProps<D = Date> = BaseDatepickerProps<D> & RangeCalendarProps<D>;
export type RangeDatepickerElement<D = Date> = React.ReactElement<RangeDatepickerProps<D>>;

/**
 * Range date picker provides a simple way to select a date range within a picker displayed in modal.
 *
 * @method {() => void} focus - Focuses Datepicker and sets it visible.
 *
 * @method {() => void} blur - Removes focus from Datepicker and sets it invisible.
 *
 * @method {() => boolean} isFocused - Returns true if the Datepicker is currently focused and visible.
 *
 * @method {() => void} clear - Removes all text from the Datepicker.
 *
 * @method {() => void} scrollToToday - Show the current date in the picker, the picker should be visible.
 *
 * @method {(date: D) => void} scrollToDate - Show the specific date in the picker, the picker should be visible.
 *
 * @property {CalendarRange<D>} range - Date range which is currently selected.
 * CalendarRange `startDate?: D, endDate?: D` - Object with start and end dates for date range.
 * A range may contain only a startDate or both startDate and endDate properties meaning completeness of picked value.
 *
 * @property {D} initialVisibleDate - Specific date that should be shown on load.
 * If it is not set, the selected date or today's date will be displayed.
 * Clear initialVisibleDate to stop showing it when the datepicker is opened.
 *
 * @property {(CalendarRange) => void} onSelect - Called when day cell is pressed.
 *
 * @property {D} min - Minimal date that is able to be selected.
 *
 * @property {D} max - Maximum date that is able to be selected.
 *
 * @property {DateService<D>} dateService - Date service that is able to work with a date objects.
 * Defaults to Native Date service that works with JS Date.
 * Allows using different types of date like Moment.js or date-fns.
 * Moment.js service can be provided by installing `@ui-kitten-react-native/moment` package.
 * date-fns service can be provided by installing `@ui-kitten-react-native/date-fns` package.
 *
 * @property {boolean} boundingMonth - Whether previous and next months in the current month view should be rendered.
 *
 * @property {D, NamedStyles) => ReactElement} renderDay - Function component
 * to render instead of default day cell.
 * Called with a date for this cell and styles provided by Eva.
 *
 * @property {(D, NamedStyles) => ReactElement} renderMonth - Function component
 * to render instead of default month cell.
 * Called with a date for this cell and styles provided by Eva.
 *
 * @property {(D, NamedStyles) => ReactElement} renderYear - Function component
 * to render instead of default year cell.
 * Called with a date for this cell and styles provided by Eva.
 *
 * @property {CalendarViewMode} startView - Defines starting view for calendar.
 * Can be `CalendarViewModes.DATE`, `CalendarViewModes.MONTH` or `CalendarViewModes.YEAR`.
 * Defaults to *CalendarViewModes.DATE*.
 *
 * @property {(D, D, CalendarViewMode) => string} title - A function to transform visible date to a string displayed
 * in header for the specific view mode: first date is date picker, second date is year and month picker.
 *
 * @property {(D) => boolean} filter - A function to determine whether particular date cells should be disabled.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *basic*.
 * Useful for giving user a hint on the input validity.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {string} size - Size of the component.
 * Can be `small`, `medium` or `large`.
 * Defaults to *medium*.
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} placeholder - String, number or a function
 * component to render when input field is empty.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} label - String, number or a function component
 * to render to top of the input field.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the text.
 * Expected to return an Image.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryRight - Function component
 * to render to end of the text.
 * Expected to return an Image.
 *
 * @property {ReactElement | ReactText | (TextProps) => ReactElement} caption - Function component to render below
 * Input view.
 * Expected to return View.
 *
 * @property {() => void} onFocus - Called when picker becomes visible.
 *
 * @property {() => void} onBlur - Called when picker becomes invisible.
 *
 * @property {string | PopoverPlacement} placement - Position of the picker relative to the input field.
 * Can be `left`, `top`, `right`, `bottom`, `left start`, `left end`, `top start`, `top end`, `right start`,
 * `right end`, `bottom start` or `bottom end`.
 * Defaults to *bottom*.
 *
 * @property {StyleProp<ViewStyle>} backdropStyle - Style of backdrop.
 *
 * @property {ComponentType | null} renderArrowLeft - Custom component which will be used
 * to render left arrow inside header instead of default one. Custom component must invoke onPress method from
 * props to keep calendar navigation functionality.
 *
 * @property {ComponentType | null} renderArrowRight - Custom component which will be used
 * to render right arrow inside header instead of default one. Custom component must invoke onPress method from
 * props to keep calendar navigation functionality.
 *
 * @property {(D, CalendarViewMode) => void} onVisibleDateChange - Called when navigating to the previous or next
 * month / year. viewMode returns string with current calendar view ("YEAR", "MONTH", "DATE").
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example RangeDatepickerSimpleUsage
 * Ranged picker works with special range object - CalendarRange: `{ startDate: Date, endDate: Date }`.
 * For incomplete ranges, there is only a `startDate` property.
 */
@styled('Datepicker')
export class RangeDatepicker<D = Date> extends BaseDatepickerComponent<RangeDatepickerProps<D>, D> {

  static styledComponentName = 'Datepicker';

  constructor(props: RangeDatepickerProps<D>) {
    super(props);
    this.clear = this.clear.bind(this);
  }

  private get calendarProps(): RangeCalendarProps<D> {
    return {
      min: this.props.min,
      max: this.props.max,
      range: this.props.range,
      initialVisibleDate: this.props.initialVisibleDate,
      dateService: this.props.dateService,
      boundingMonth: this.props.boundingMonth,
      startView: this.props.startView,
      filter: this.props.filter,
      title: this.props.title,
      onSelect: this.props.onSelect,
      renderDay: this.props.renderDay,
      renderMonth: this.props.renderMonth,
      renderYear: this.props.renderYear,
      renderFooter: this.props.renderFooter,
      renderArrowRight: this.props.renderArrowRight,
      renderArrowLeft: this.props.renderArrowLeft,
      onVisibleDateChange: this.props.onVisibleDateChange,
    };
  }

  public clear = (): void => {
    this.props.onSelect?.({});
  };

  // BaseDatepickerComponent

  protected getComponentTitle(): RenderProp<TextProps> | React.ReactText {
    const { startDate, endDate } = this.props.range;

    if (startDate || endDate) {
      const start: string = startDate ? this.props.dateService.format(startDate, null) : '';
      const end: string = endDate ? this.props.dateService.format(endDate, null) : '';

      return `${start} - ${end}`;
    } else {
      return this.props.placeholder;
    }
  }

  protected renderCalendar(): RangeCalendarElement<D> {
    return (
      <RangeCalendar
        ref={this.calendarRef}
        {...this.calendarProps}
      />
    );
  }
}
