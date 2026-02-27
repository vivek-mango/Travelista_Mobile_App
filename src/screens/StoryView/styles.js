import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
   
    color: 'white',
  },
  countryStyle: {
    fontSize: 14,
    color: 'white',
  },
  timeStyle: {
    fontSize: 12,
    color: 'white',
  },
  imageContainer: {
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginBottom: 20,
  },
  icon: {
    height: 20,
  },
  secondImage: {
    marginLeft: 15,
  },
});

export default styles;
