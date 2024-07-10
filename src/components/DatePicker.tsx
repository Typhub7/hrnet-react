import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

/** Component for rendering a date picker using react-datepicker.
 * @param {DatePickerComponentProps} props - Props for DatePickerComponent component.
 * @returns {JSX.Element} JSX representation of the DatePickerComponent component.
 */

interface DatePickerComponentProps {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
}

const DatePickerComponent = ({ selectedDate, onChange }: DatePickerComponentProps) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={date => onChange(date)}
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      dateFormat="MM/dd/yyyy"
    />
  );
};

export default DatePickerComponent;