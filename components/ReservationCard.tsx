import styles from "@/constants/Styles";
import { Text, TouchableOpacity } from "react-native";

function ReservationCard({ reservation, onPress }: any) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text>Start: {reservation.startTime}</Text>
      <Text>Duration: {reservation.duration} min</Text>
    </TouchableOpacity>
  );
}

export default ReservationCard