import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftColumn: {
    width: screenWidth * 0.46,
    marginRight: 4,
  },
  leftColumnSpace: {
    marginBottom: 6,
  },
  rightColumn: {
    width: screenWidth * 0.46,
    marginLeft: 4,
  },
  rightColumnSpace: {
    marginBottom: 6,
  },
  imageStyle: {
    width: '100%',
    borderRadius: 12,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default styles;
