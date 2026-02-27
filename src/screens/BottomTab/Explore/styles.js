import {Dimensions, StyleSheet, I18nManager} from 'react-native';
import colors from '../../../constants/colors';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  textStyle: {
    fontSize: 14,
    color: 'black',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  menuContainer: {
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  inputContainer1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  textInputStyle1: {
    // flex: 1,
    height: 40,
    color: 'black',
  },

  // ########### Modal Css  ############## \\
  inputContent: {
    padding: 5,
    marginTop: 5,

    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    marginVertical: 60,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  inputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
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
