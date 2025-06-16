import styles from "@/constants/Styles";
import ReservationModalStyles from "./Styles/ReservationModalStyles";
import { Reservation, Status } from "@/types/ReservationTypes";
import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Animated,
  PanResponder,
  ScrollView
} from "react-native";
import DateTimePicker from "./DateTimePicker";
import { calculateEndTime, parseTime } from "@/utils/timeUtils";
import GenericSelect from "./GenericSelect";

interface ReservationModalProps {
  visible: boolean;
  reservation?: Partial<Reservation>;
  onClose: () => void;
  onSave: (reservation: Reservation) => void;
}

function ReservationModal({
  visible,
  reservation,
  onClose,
  onSave,
}: ReservationModalProps) {
  const [formData, setFormData] = useState<Partial<Reservation>>({
    startTime: "09:00",
    duration: 30,
    date: new Date().toISOString().split("T")[0],
    ...reservation,
  });

  const [date, setDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState<Date>(new Date());
  const panY = useRef(new Animated.Value(0)).current;
  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        panY.setValue(gestureState.dy > 0 ? gestureState.dy : 0);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          onClose();
        } else {
          Animated.spring(panY, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  useEffect(() => {
    if (reservation) {
      const parsedDate = reservation.date
        ? new Date(reservation.date)
        : new Date();
      const parsedStartTime = reservation.startTime
        ? parseTime(reservation.startTime)
        : new Date();

      setDate(parsedDate);
      setStartTime(parsedStartTime);

      setFormData({
        ...reservation,
        date: parsedDate.toISOString().split("T")[0],
        startTime: reservation.startTime || "09:00",
        duration: reservation.duration || 30,
      });
    }
  }, [reservation]);

  const handleChange = <K extends keyof Reservation>(
    key: K,
    value: Reservation[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = () => {
    const computedData = {
      ...formData,
      endTime: calculateEndTime(formData.startTime!, formData.duration!),
      delayTime: 0,
    };

    onSave(computedData as Reservation);
    onClose();
  };

  if (!visible) return null;

  return (
    <Modal
      transparent={false}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
      backdropColor={'rgba(0,0,0,0.5)'}
      presentationStyle="overFullScreen"
    >
      <View style={ReservationModalStyles.modalOverlay}>
        <View
          style={ReservationModalStyles.bottomSheet}
          {...panResponders.panHandlers}
        >
          <View style={ReservationModalStyles.dragHandle} />
          
          <ScrollView 
            style={ReservationModalStyles.bottomSheetContent}
            contentContainerStyle={{ gap: 16 }}
          >

            <TextInput
              placeholder="Guest"
              value={formData.guest}
              onChangeText={(text) => handleChange("guest", text)}
              style={styles.input}
              placeholderTextColor="#999"
            />

            <TextInput
              placeholder="Table"
              value={formData.table}
              onChangeText={(text) => handleChange("table", text)}
              style={styles.input}
              placeholderTextColor="#999"
            />

            <DateTimePicker
              selectedDate={date}
              onDateChange={(date) => {
                setDate(date);
                handleChange("date", date.toISOString().split("T")[0]);
              }}
              mode="date"
              placeholder="Date"
            />

            <DateTimePicker
              selectedDate={parseTime(formData.startTime || "09:00")}
              onDateChange={(time) => {
                setStartTime(time);
                handleChange("startTime", time.toTimeString().slice(0, 5));
              }}
              mode="time"
              placeholder="Start Time"
            />

            <TextInput
              placeholder="Duration (minutes)"
              keyboardType="numeric"
              value={String(formData.duration)}
              onChangeText={(text) => handleChange("duration", parseInt(text) || 0)}
              style={styles.input}
              placeholderTextColor="#999"
            />

            <TextInput
              placeholder="Party Size"
              keyboardType="numeric"
              value={String(formData.partySize)}
              onChangeText={(text) =>
                handleChange("partySize", parseInt(text) || 0)
              }
              style={styles.input}
              placeholderTextColor="#999"
            />

            <TextInput
              placeholder="Comment"
              multiline
              numberOfLines={3}
              value={formData.comment}
              onChangeText={(text) => handleChange("comment", text)}
              style={[styles.input, styles.multilineInput]}
              placeholderTextColor="#999"
            />

            <GenericSelect<Status>
              items={[
                { label: 'Not Confirmed', value: 'notConfirmed' },
                { label: 'Confirmed', value: 'confirmed' },
                { label: 'Started', value: 'started' },
              ]}
              value={formData.status || 'notConfirmed'}
              onChange={(status) => handleChange('status', status)}
            />

            <View style={ReservationModalStyles.buttonsContainer}>
              <TouchableOpacity
                style={[ReservationModalStyles.button, ReservationModalStyles.cancelButton]}
                onPress={onClose}
              >
                <Text style={ReservationModalStyles.buttonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[ReservationModalStyles.button, ReservationModalStyles.saveButton]}
                onPress={handleSave}
              >
                <Text style={ReservationModalStyles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

export default ReservationModal;