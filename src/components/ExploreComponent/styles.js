import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constants/colors';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    marginVertical: 10,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.white,
    overflow: 'hidden',
  },
  backgroundWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  spaceContainer: {
    padding: 12,
    justifyContent: 'space-between',
  },
  background: {
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  moreIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 22,
    height: 22,
    tintColor: 'black',
  },
  columnContainer: {
    marginLeft: 10,
  },
  nameStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
  },
  countryStyle: {
    fontSize: 12,
    color: colors.white,
    marginBottom: 5,
  },
  timeStyle: {
    color: colors.white,
    fontSize: 10,
  },
  spaceDesc: {
    marginTop: 34,
  },
  spaceDescStyle: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Inter',
    opacity: 0.1,
  },
});

export default styles;
