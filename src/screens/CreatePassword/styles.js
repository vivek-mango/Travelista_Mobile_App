import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
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
    backgroundColor: '#F9FAFA',
    width: 30,
    height: 30,
    margin: 2,
    borderRadius: 20,
  },
  backIcon: {width: 20, height: 20, marginVertical: 5, marginHorizontal: 5},
  passwordInput: {
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  agreeText: {
    color: '#565656',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
    marginHorizontal: 16,
  },
  link: {
    color: '#22BE6F',
  },
  nextButton: {
    marginBottom: 20,
  },
});

export default styles;
