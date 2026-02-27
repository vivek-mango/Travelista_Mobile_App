import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: 20,
  },
  statusContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  column: {
    flex: 1,
  },
  boldText: {
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  normalText: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.normalColor,
  },
});

export default styles;
