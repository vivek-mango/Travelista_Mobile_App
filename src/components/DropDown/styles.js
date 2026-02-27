import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  darkModeContainer: {
    backgroundColor: 'black',
  },
  dropdownContainer: {
    flex: 1,
    backgroundColor: colors.drpDownColor,
    width: '100%',
    height: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.drpDownColor,
  },

  selectedOption: {
    backgroundColor: colors.selectColor,
    marginVertical: 10,
  },
  selectedText: {
    color: colors.black,
  },
  textStyle: {
    margin: 10,
  },
});

export default styles;
