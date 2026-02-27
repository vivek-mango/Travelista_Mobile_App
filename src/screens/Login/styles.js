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
    position: 'relative',
    width: 35,
    height: 35,
    marginVertical: 20,
  },
  backContainer: {
    backgroundColor: colors.lightGray,
    width: 30,
    height: 30,
    margin: 2,
    borderRadius: 20,
  },
  backIcon: {width: 20, height: 20, marginVertical: 5, marginHorizontal: 5},

  loginInput: {
    marginTop: 30,
  },
  scrollContainer: {
    paddingVertical: 20,
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
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.lightBlack,
  },
  separatorText: {
    textAlign: 'center',
    marginHorizontal: 10,
    fontWeight: '400',
    fontSize: 16,
    color: colors.lightBlack2,
  },

  nextButton: {
  
    marginVertical: 20,
  },
});

export default styles;
