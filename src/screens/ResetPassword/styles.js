import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
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
  scrollContainer: {
    paddingVertical: 20,
  },
  resetInput: {
    marginVertical: 40,
  },
  nextButton: {
    marginBottom: 30,
  },
});

export default styles;
