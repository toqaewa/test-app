import { StyleSheet } from 'react-native';

const ReservationModalStyles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    bottomSheet: {
        backgroundColor: 'white',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        padding: 16,
        marginHorizontal: 8,
        maxHeight: '90%',
    },
    dragHandle: {
        width: 40,
        height: 4,
        backgroundColor: '#ccc',
        borderRadius: 99,
        alignSelf: 'center',
        marginBottom: 16,
    },
    bottomSheetContent: {
        paddingBottom: 30,
    },
    buttonsContainer: {
        flexDirection: 'row',
        gap: 16,
        justifyContent: 'space-evenly',
        marginTop: 52,
    },
    button: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
        marginHorizontal: 4,
    },
    saveButton: {
        backgroundColor: '#4CAF50',
    },
    cancelButton: {
        backgroundColor: '#999',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ReservationModalStyles