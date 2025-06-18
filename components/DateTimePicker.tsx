import styles from "@/constants/Styles";
import React, { useState } from 'react';
import { TouchableOpacity, View } from "react-native";
import DatePicker from 'react-native-date-picker';
import { Caption, Interactive } from "./Typography/Typography";

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
      <Caption children={placeholder} />
      <Interactive children={ mode === 'date' ? selectedDate.toDateString() : selectedDate.toTimeString() } />
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