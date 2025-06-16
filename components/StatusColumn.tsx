import styles from "@/constants/Styles";
import { Status, Reservation, STATUS_CONFIG } from "@/types/ReservationTypes";
import React from "react";
import {Text, View, ScrollView } from "react-native";
import ReservationCard from "./ReservationCard";
import { Subheading } from "./Typography/Typography";

interface StatusColumnProps {
  status: Status;
  reservations: Reservation[];
  onReservationPress: (reservation: Reservation) => void;
}

function StatusColumn({ status, reservations, onReservationPress }: StatusColumnProps) {
  const sortedReservations = [...reservations].sort((a, b) => {
    const aEnd = new Date(`2000-01-01T${a.startTime}` as any).getTime() + a.duration * 60000;
    const bEnd = new Date(`2000-01-01T${b.startTime}` as any).getTime() + b.duration * 60000;
    return aEnd - bEnd;
  });

  return (
    <View style={[styles.column, { backgroundColor: STATUS_CONFIG[status].color + "80" }]}>
      <Subheading children={STATUS_CONFIG[status].label} color={STATUS_CONFIG[status].color} />
      <ScrollView contentContainerStyle={{ gap: 8 }}>
        {sortedReservations.map((reservation: Reservation) => (
          <ReservationCard key={reservation.id} reservation={reservation} onPress={() => onReservationPress(reservation)} />
        ))}
      </ScrollView>
    </View>
  );
}

export default StatusColumn