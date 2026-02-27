import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnContainer: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  nameStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
  },
  countryStyle: {
    color: colors.black,
    fontSize: 12,
    marginBottom: 5,
  },
  timeStyle: {
    color: colors.black,
    fontSize: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginBottom: 30,
  },

  secondImage: {
    marginLeft: 15,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 12,
  },
});
export default styles;
