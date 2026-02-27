import {StyleSheet, I18nManager} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginVertical: 14,
  },
  darkModeContainer: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  halfWidthContainer: {
    flex: 0.48,
  },
  textInput: {
    flex: 1,
    color: colors.black,
    fontSize: 14,
    fontWeight: '700',
    padding: -30,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  lineStyle: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    width: '100%',
  },
});

export default styles;
