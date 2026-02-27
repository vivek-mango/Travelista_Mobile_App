import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightBlack,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
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
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default styles;
