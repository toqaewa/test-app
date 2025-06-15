import styles from "@/constants/Styles";
import { Text, TouchableOpacity } from "react-native";
import { Reservation, STATUS_CONFIG } from "@/types/ReservationTypes";

interface CardColumnProps {
  reservation: Reservation;
  onPress: () => void;
}

function ReservationCard({ reservation, onPress }: CardColumnProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <Text>{reservation.guest}</Text>
        <Text>{reservation.table}</Text>
        <Text>{reservation.partySize} 👤</Text>
        <Text>{reservation.startTime} - {reservation.endTime}</Text>
        {reservation.delayTime > 0 && <Text>{reservation.delayTime} min late</Text>}
    </TouchableOpacity>
  );
}

export default ReservationCard