import {Dimensions, I18nManager, Platform, StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
    fontFamily: 'Inter',
    textAlign: I18nManager.isRTL ? 'left' : 'left',
    marginBottom: 8,
  },
});

export default styles;
