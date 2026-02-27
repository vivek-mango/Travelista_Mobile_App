import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  darkModeContainer: {
    backgroundColor: 'black',
  },
  scrollContainer: {
    paddingVertical: 20,
  },

  backContainerStyle: {
    marginVertical: 20,

    position: 'relative',
    width: 35,
    height: 35,
  },
  backContainer: {
    backgroundColor: colors.lightGray,
    width: 30,
    height: 30,
    margin: 2,
    borderRadius: 20,
  },
  backIcon: {width: 20, height: 20, marginVertical: 5, marginHorizontal: 5},
  passwordInput: {
    marginTop: 30,
  },

  nextButton: {
    marginBottom: 20,
  },
});

export default styles;
