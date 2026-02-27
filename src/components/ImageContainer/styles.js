import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  parentdiv: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  bioContainer: {
    backgroundColor: colors.bioColorLight,
    padding: 10,
    borderRadius: 10,
    width: width * 0.44,
    height: height * 0.18,
  },
  bioText: {
    color: 'black',
    fontSize: 10,
    marginVertical: 2,
  },
  imageContainer: {
    width: width * 0.6,
    height: height * 0.18,
  },
  wrapper: {
    marginHorizontal: 5,
  },
  image: {},
  slide1: {
    width: width * 0.5,
    height: height * 0.18,
    borderRadius: 20,
  },
});

export default styles;
