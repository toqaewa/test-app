import styles from "@/constants/Styles";
import React, { useState } from 'react';
import { TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker"
import { Caption, Interactive } from "./Typography/Typography";

interface DateTimePickerProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  mode: "time" | "date";
  placeholder: string;
}

export default function GenericDateTimePicker({ selectedDate, onDateChange, mode, placeholder }: DateTimePickerProps) {
    const [isPickerVisible, setPickerVisible] = useState(false);

  const showPicker = () => setPickerVisible(true);
  const hidePicker = () => setPickerVisible(false);

  const handleConfirm = (date: Date) => {
    onDateChange(date);
    hidePicker();
  };

  return (
    <>
      <TouchableOpacity style={styles.datePicker} onPress={showPicker}>
        <Caption children={placeholder} />
        <Interactive
          children={
            mode === 'date'
              ? selectedDate.toDateString()
              : selectedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        />
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isPickerVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hidePicker}
        date={selectedDate}
      />
    </>
  );
}