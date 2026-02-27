import {StyleSheet, I18nManager} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  inputContainer1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF1F0',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  textInputStyle1: {
    backgroundColor: '#EEF1F0',
    height: 40,
  },
});

export default styles;
