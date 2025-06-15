import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    gap: 32,
    backgroundColor: '#fff',
  },
  column: {
    width: 300,
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 16,
  },
  columnHeader: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  card: {
    padding: 8,
    backgroundColor: '#F4F2FF',
    borderRadius: 12,
  },
  datePicker: {},
  modalContainer: {
    marginTop: 64,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 4,
    borderRadius: 4,
  },
});

export default styles