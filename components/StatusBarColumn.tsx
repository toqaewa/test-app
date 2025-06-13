import styles from "@/constants/Styles";
import { Status, Reservation, STATUS_CONFIG } from "@/types/ReservationTypes";
import React from "react";
import {Text, View, ScrollView } from "react-native";
import ReservationCard from "./ReservationCard";

interface StatusBarColumnProps {
  status: Status;
  reservations: Reservation[];
  onReservationPress: (reservation: Reservation) => void;
}

function StatusBarColumn({ status, reservations, onReservationPress }: StatusBarColumnProps) {
  const sortedReservations = [...reservations].sort((a, b) => {
    const aEnd = new Date(`2000-01-01T${a.startTime}` as any).getTime() + a.duration * 60000;
    const bEnd = new Date(`2000-01-01T${b.startTime}` as any).getTime() + b.duration * 60000;
    return aEnd - bEnd;
  });

  return (
    <View style={[styles.column, { borderColor: STATUS_CONFIG[status].color }]}>
      <Text style={styles.columnHeader}>{STATUS_CONFIG[status].label}</Text>
      <ScrollView style={styles.list}>
        {sortedReservations.map((reservation: Reservation) => (
          <ReservationCard key={reservation.id} reservation={reservation} onPress={() => onReservationPress(reservation)} />
        ))}
      </ScrollView>
    </View>
  );
}

export default StatusBarColumn