import React, { useState } from "react";
import { View, ScrollView, Button } from "react-native";
import { Reservation } from "@/types/ReservationTypes";
import StatusColumn from "@/components/StatusColumn";
import styles from "@/constants/Styles";
import ReservationModal from "@/components/ReservationModal";
import UUID from 'react-native-uuid';
import DatePickerOpener from "@/components/DatePickerOpener";

export default function MainScreen() {
  const [date, setDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [currentReservation, setCurrentReservation] = useState<Partial<Reservation>>({});
  const [reservations, setReservations] = useState<Reservation[]>([
    {
      id: '1',
      guest: 'Alexander Rusakov',
      table: 'VIP1',
      startTime: '10:00',
      duration: 60,
      partySize: 3,
      comment: 'Wine Lover',
      status: 'notConfirmed',
      date: formatDate(new Date()),
    },
    {
      id: '2',
      guest: 'Denis Kharlamov',
      table: 'VIP2',
      startTime: '12:00',
      duration: 120,
      partySize: 2,
      comment: 'Blacklist',
      status: 'confirmed',
      date: formatDate(new Date()),
    },
    {
      id: '3',
      guest: 'Ivan Petrov',
      table: 'VIP4',
      startTime: '12:00',
      duration: 120,
      partySize: 8,
      comment: 'comment',
      status: 'notConfirmed',
      date: formatDate(new Date()),
    },
  ]);

  const today = formatDate(date);

  const filteredReservations = reservations.filter((t) => t.date === today);

  const groupedReservations = {
    notConfirmed: filteredReservations.filter((t) => t.status === 'notConfirmed'),
    confirmed: filteredReservations.filter((t) => t.status === 'confirmed'),
    started: filteredReservations.filter((t) => t.status === 'started'),
  };

  function formatDate(d: Date): string {
    return d.toISOString().split('T')[0];
  }

  const handleCreateReservation = () => {
    setCurrentReservation({
        id: UUID.v4(),
        date: today,
        status: 'notConfirmed',
        guest: '',
        table: '',
        startTime: '09:00',
        duration: 30,
        partySize: 1,
        comment: '',
    });
    setModalVisible(true);
  };

  const handleEditReservation = (reservation: Reservation) => {
    setCurrentReservation(reservation);
    setModalVisible(true);
  };

  const handleSaveReservation = (reservation: Reservation) => {
    if (!reservation.id) return;

    setReservations((prev) =>
      prev.some((t) => t.id === reservation.id)
        ? prev.map((t) => (t.id === reservation.id ? reservation : t))
        : [...prev, reservation]
    );
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
        <DatePickerOpener selectedDate={date} onDateChange={setDate} />
        <ScrollView contentContainerStyle={{ gap: 24 }} horizontal showsHorizontalScrollIndicator={false}>
            <StatusColumn
            status="notConfirmed"
            reservations={groupedReservations.notConfirmed}
            onReservationPress={handleEditReservation}
            />
            <StatusColumn
            status="confirmed"
            reservations={groupedReservations.confirmed}
            onReservationPress={handleEditReservation}
            />
            <StatusColumn
            status="started"
            reservations={groupedReservations.started}
            onReservationPress={handleEditReservation}
            />
        </ScrollView>
        <Button title="Add Reservation" onPress={handleCreateReservation} />
        <ReservationModal
            visible={modalVisible}
            reservation={currentReservation}
            onClose={() => setModalVisible(false)}
            onSave={handleSaveReservation}
        />
    </View>
  );
}