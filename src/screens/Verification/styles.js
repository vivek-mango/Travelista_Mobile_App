import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../constants/colors';
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  codeContainer: {
    marginVertical: 10,
  },
  inputStyle: {
    
    marginVertical: 12,
  },
  codeInput: {
    width: 44,
    height: 60,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#BCC7C1',
   
    fontSize: 18,
    marginTop: 30,
    marginRight: 10,
    padding: 10,
    color: 'yellow',
  },
  footerText: {
    color: colors.black,
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    fontFamily: 'Inter',
    marginVertical: 10,
  },
  footerLink: {
    color: colors.black,
    fontWeight: '600',
  },
  nextButton: {
    marginBottom: 20,
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
});
export default styles;
