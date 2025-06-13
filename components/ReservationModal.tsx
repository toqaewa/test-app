import styles from "@/constants/Styles";
import { Reservation, STATUS_CONFIG } from "@/types/ReservationTypes";
import React, { useState } from "react";
import { Text, Modal, View, TextInput, Button, } from "react-native";
import { Picker } from '@react-native-picker/picker';
import 'react-native-get-random-values';
import UUID from 'react-native-uuid';

interface ReservationModalProps {
  visible: boolean;
  reservation?: Partial<Reservation>;
  onClose: () => void;
  onSave: (reservation: Reservation) => void;
}

function ReservationModal({ visible, reservation, onClose, onSave }: ReservationModalProps) {
    const today = new Date().toISOString().split('T')[0];

    const [formData, setFormData] = useState<any>({
        id: reservation?.id || UUID.v4(),
        guest: reservation?.guest || '',
        table: reservation?.table || '',
        startTime: reservation?.startTime || '09:00',
        duration: reservation?.duration || 30,
        partySize: reservation?.partySize || 1,
        comment: reservation?.comment || '',
        status: reservation?.status || 'notConfirmed',
        date: reservation?.date || today,
  });

  const handleChange = (key: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [key]: value }));
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text>Title: {formData.title}</Text>

        <TextInput
          placeholder="Guest"
          value={formData.guest}
          onChangeText={(text) => handleChange('guest', text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Table"
          value={formData.table}
          onChangeText={(text) => handleChange('table', text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Start Time (HH:mm)"
          value={formData.startTime}
          onChangeText={(text) => handleChange('startTime', text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Duration (min)"
          keyboardType="numeric"
          value={String(formData.duration)}
          onChangeText={(text) => handleChange('duration', parseInt(text))}
          style={styles.input}
        />

        <TextInput
          placeholder="Party Size"
          keyboardType="numeric"
          value={String(formData.partySize)}
          onChangeText={(text) => handleChange('partySize', parseInt(text))}
          style={styles.input}
        />

        <TextInput
          placeholder="Comment"
          multiline
          value={formData.comment}
          onChangeText={(text) => handleChange('comment', text)}
          style={styles.input}
        />

        <Picker
          selectedValue={formData.status}
          onValueChange={(value) => handleChange('status', value)}>
          {Object.entries(STATUS_CONFIG).map(([key, val]) => (
            <Picker.Item key={key} label={val.label} value={key} />
          ))}
        </Picker>

        <Button title="Save" onPress={() => onSave(formData)} />
        <Button title="Cancel" onPress={onClose} />
      </View>
    </Modal>
  );
}

export default ReservationModal