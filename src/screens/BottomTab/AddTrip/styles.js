import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkModeContainer: {
    backgroundColor: 'black',
  },

  inputContent: {
    marginVertical: 10,
  },
  scrollContainer: {
    paddingVertical: 10,
    marginHorizontal: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    padding: 10,
    marginVertical: 12,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  iconsContainer: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  icon: {
    marginLeft: 16,
  },
});
export default styles;
