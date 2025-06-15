import styles from "@/constants/Styles";
import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from "react-native";
import DatePicker from 'react-native-date-picker';

interface DateTimePickerProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  mode: "time" | "date";
  placeholder: string;
}


export default function DateTimePicker({ selectedDate, onDateChange, mode, placeholder }: DateTimePickerProps) {
  const [open, setOpen] = useState(false);

  const handleConfirm = (date: Date) => {
    onDateChange(date);
    setOpen(false);
  };

  return (
    <TouchableOpacity style={styles.datePicker} onPress={() => setOpen(true)}>
      <Text style={styles.datePickerPlaceholder}>{placeholder}</Text>
      {
        mode === 'date' ? <Text style={styles.datePickerDate}>{selectedDate.toDateString()}</Text> : <Text style={styles.datePickerDate}>{selectedDate.toTimeString()}</Text>
      }
      <DatePicker 
        modal
        mode={mode}
        open={open}
        date={selectedDate}
        onConfirm={handleConfirm}
        onCancel={() => {setOpen(false)}}
      />
    </TouchableOpacity>
  );
}