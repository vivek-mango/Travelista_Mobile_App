import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  darkModeContainer: {
    borderColor: 'white',
  },
  darkModeSquare: {
    backgroundColor: 'white',
  },
  container: {
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 4,
    height: 14,
    width: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
  },
  innerSquare: {
    width: 8,
    height: 8,
    backgroundColor: colors.black,
  },
  checkedBox: {
    borderWidth: 2,
  },
});

export default styles;
