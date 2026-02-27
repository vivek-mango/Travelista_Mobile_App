import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  inputContent: {
    padding: 5,
    marginTop: 5,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    marginVertical: 60,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgray',
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
  },
});

export default styles;
