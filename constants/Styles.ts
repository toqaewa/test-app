import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    gap: 32,
    backgroundColor: "#fff",
  },
  column: {
    width: 300,
    padding: 8,
    gap: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
  },
  card: {
    padding: 8,
    backgroundColor: "#F4F2FF",
    borderRadius: 12,
  },
  datePicker: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#DDD",
    backgroundColor: "#fff",
    padding: 12,
  },
  input: {
    fontFamily: "Jura",
    borderWidth: 1,
    borderColor: "#DDD",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    fontSize: 16,
  },
  multilineInput: {
    fontFamily: "Jura",
    minHeight: 80,
    textAlignVertical: "top",
  },
});

export default styles;
