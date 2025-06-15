import React, { useState } from 'react';
import DropDownPicker, { ValueType } from 'react-native-dropdown-picker';

interface GenericSelectProps<T extends ValueType> {
  items: Array<{ label: string; value: T }>;
  value: T | null;
  onChange: (value: T) => void;
  placeholder?: string;
  dropDownStyle?: object;
  listMode?: 'SCROLLVIEW' | 'MODAL' | 'FLATLIST';
}

export default function GenericSelect<T extends ValueType>({
  items,
  value,
  onChange,
  placeholder = 'Select',
  listMode = 'SCROLLVIEW',
}: GenericSelectProps<T>) {
  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items.map(item => ({ ...item, value: item.value as any }))} // кастуем для совместимости
      setOpen={setOpen}
      setValue={(callbackOrValue) => {
        const newValue = callbackOrValue instanceof Function
          ? callbackOrValue(value)
          : callbackOrValue;

        onChange(newValue as T);
      }}
      listMode={listMode}
      placeholder={placeholder}
      style={{ borderColor: '#ccc', borderRadius: 12 }}
      dropDownContainerStyle={{ borderColor: '#ccc' }}
    />
  );
}