import { dataEntryStyles } from "./DataEntryStyles";
import { TouchableOpacity, TextInput } from "react-native";
import { Caption } from "../Typography/Typography";

interface InputProps {
  value: string | undefined;
  placeholder: string;
  onChange: (text: string) => void;
  multiline?: boolean;
}

export default function Input({ value, placeholder, onChange, multiline }: InputProps) {
  const handleChange = (text: string) => {
    onChange(text);
  };

  return (
    <TouchableOpacity style={dataEntryStyles.container}>
      {value && <Caption children={placeholder} />}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={handleChange}
        style={ !multiline ? dataEntryStyles.input : dataEntryStyles.multilineInput}
        placeholderTextColor="#999"
        multiline={multiline}
        numberOfLines={3}
      />
    </TouchableOpacity>
  );
}
