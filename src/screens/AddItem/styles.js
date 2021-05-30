import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainView: {
        justifyContent: 'space-evenly',
    },
    subView: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 10
    },
    textInputStyle: {
        flex: 1,
        alignSelf: 'center',
        borderWidth: 1,
        // backgroundColor: 'red'
    },
    textStyle: {
        flex: 1,
        // backgroundColor: 'red'
    }
  });