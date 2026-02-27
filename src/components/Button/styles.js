import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 8,
    borderColor: colors.green,
    padding: 14,
    marginVertical: 8,
  },
  text: {
    color: colors.black,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: 'Inter',
  },
  disabledBg: {
    backgroundColor: colors.disableGreen,
    opacity: 0.5,
  },
  enableBg: {
    backgroundColor: colors.white,
  },
  greenBg: {
    backgroundColor: colors.green,
    borderColor: colors.green,
  },
});

export default styles;
