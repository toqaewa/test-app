import React, { useState } from 'react';
import { Button, Text } from "react-native";
import DatePicker from 'react-native-date-picker';

interface DatePickerOpenerProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}


export default function DatePickerOpener({ selectedDate, onDateChange }: DatePickerOpenerProps) {
  const [open, setOpen] = useState(false);

  const handleConfirm = (date: Date) => {
    onDateChange(date);
    setOpen(false);
  };

  return (
    <>
      <Button title="Date" onPress={() => setOpen(true)} />
      <Text>Выбрать дату: {selectedDate.toDateString()}</Text>
      <DatePicker 
        modal
        open={open}
        date={selectedDate}
        onConfirm={handleConfirm}
        onCancel={() => {setOpen(false)}}
      />
    </>
  );
}