import styles from "@/constants/Styles";
import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from "react-native";
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
    <TouchableOpacity style={styles.datePicker} onPress={() => setOpen(true)}>
      <Text style={styles.datePickerPlaceholder}>Date</Text>
      <Text style={styles.datePickerDate}>{selectedDate.toDateString()}</Text>
      <DatePicker 
        modal
        mode="date"
        open={open}
        date={selectedDate}
        onConfirm={handleConfirm}
        onCancel={() => {setOpen(false)}}
      />
    </TouchableOpacity>
  );
}