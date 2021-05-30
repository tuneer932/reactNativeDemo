import {StyleSheet, Dimensions, Platform} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  homeMainView: {
    // flex: 1,
    // justifyContent: 'center',
    // alignSelf: "center",
    // marginTop: 200
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: "center",
    minHeight: screenHeight
  },
  homePageInput: {
    borderWidth: 1,
    minWidth: '60%',
    height: 50
  }
});
