import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleContainer: {
    padding: 10,
    marginVertical: 12,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconsContainer: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  icon: {
    width: 100,
    height: 100,
    marginLeft: 16,
  },

  // ################################## travel CSS

  imageContainer: {
    marginBottom: 1,
    backgroundColor: 'white',
    borderRadius: 8,
  },

  homeImage: {
    width: screenWidth * 0.7,
    borderRadius: 12,
    borderColor: 'black',
    borderWidth: 1,
  },
  title: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 14,
    fontSize: 10,
    color: 'white',
    lineHeight: 14,
    fontWeight: '400',
  },
});

export default styles;
