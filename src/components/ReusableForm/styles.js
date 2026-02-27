import {I18nManager, StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  titleText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
    fontFamily: 'Inter',
    textAlign: I18nManager.isRTL ? 'left' : 'left',
  },
  input: {
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.selectColor,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderTopColor: colors.black,
    color: colors.black,
    marginVertical: 12,
  },
});

export default styles;
