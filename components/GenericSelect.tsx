import React, { useState } from 'react';
import DropDownPicker, { ValueType } from 'react-native-dropdown-picker';
import styles from '@/constants/Styles';
import {textStyles} from './Typography/TextStyles'

interface GenericSelectProps<T extends ValueType> {
  items: Array<{ label: string; value: T }>;
  value: T | null;
  onChange: (value: T) => void;
  placeholder?: string;
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
      items={items.map(item => ({ ...item, value: item.value as any }))}
      setOpen={setOpen}
      setValue={(callbackOrValue) => {
        const newValue = callbackOrValue instanceof Function
          ? callbackOrValue(value)
          : callbackOrValue;

        onChange(newValue as T);
      }}
      listMode={listMode}
      placeholder={placeholder}
      placeholderStyle={{ opacity: 0, position: 'absolute' }}
      style={styles.input}
      textStyle={textStyles.interactive}
      dropDownContainerStyle={styles.input}
      listItemLabelStyle={textStyles.interactive}
      selectedItemLabelStyle={{
        fontWeight: '700',
        color: '#B45100',
      }}
      showTickIcon={false}
    />
  );
}