import {StyleSheet, I18nManager} from 'react-native';
import colors from '../../../constants/colors';
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    color: 'black',
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  inputContent: {
    padding: 10,
    marginTop: 10,
  },
  textInputStyle: {
    marginLeft: 10,
    flex: 1,
    height: 40,
    color: colors.black,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
});
export default styles;
