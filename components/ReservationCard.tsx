import styles from "@/constants/Styles";
import { Text, TouchableOpacity, View } from "react-native";
import { Reservation } from "@/types/ReservationTypes";
import { Body, Caption, Subheading } from "./Typography/Typography";

interface CardColumnProps {
  reservation: Reservation;
  onPress: () => void;
}

function ReservationCard({ reservation, onPress }: CardColumnProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <Body children={reservation.guest} />
            </View>
            <Body children={reservation.startTime + ' - ' + reservation.endTime} />
        </View>
        <View style={{ flexDirection: 'row', gap: 8 }}>
            <Caption children={reservation.table} />
            <Caption children={reservation.partySize.toString() + ' ☻'} />
            {
                reservation.delayTime > 0 && <Caption children={reservation.delayTime.toString() + ' min late'} />
            }
        </View>
    </TouchableOpacity>
  );
}

export default ReservationCard