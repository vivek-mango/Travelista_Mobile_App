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
  backContainerStyle: {
    marginVertical: 20,
    position: 'relative',
    width: 35,
    height: 35,
  },
  backContainer: {
    backgroundColor: '#F9FAFA',
    width: 30,
    height: 30,
    margin: 2,
    borderRadius: 20,
  },
  backIcon: {
    width: 20,
    height: 20,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  scrollContainer: {
    paddingVertical: 20,
  },

  inputContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    color: colors.black,
    fontSize: 14,
    textAlign: 'right',
  },
  footerLink: {
    color: colors.black,

    fontWeight: 'bold',
  },
  nextButton: {
    marginVertical: 50,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDE3E0',
  },
  separatorText: {
    marginHorizontal: 10,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 16,
    color: '#7A9085',
  },

  buttonContent: {
    marginBottom: 20,
  },
});
export default styles;
