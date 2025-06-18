import { StyleSheet } from "react-native";

export const dataEntryStyles = StyleSheet.create({
  container: {
    fontFamily: "Jura",
    borderWidth: 1,
    borderColor: "#DDD",
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 12,
    fontSize: 16,
    minHeight: 50,
    justifyContent: "center"
  },
  input: {
    fontFamily: "Jura",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    color: "#000",
  },
  multilineInput: {
    fontFamily: "Jura",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    color: "#000",
    minHeight: 80,
    textAlignVertical: "top",
  },
});