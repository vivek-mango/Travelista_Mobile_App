import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkModeContainer: {
    backgroundColor: 'black',
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
    marginLeft: 16,
  },

  // ######################## Modal Css #####################
  modalContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    marginVertical: 60,
  },
  modalContent: {
    marginBottom: 20,
  },
  modalText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
  },
  modalIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  modalIconContainer: {
    backgroundColor: 'lightgray',
    borderRadius: 35,
    padding: 15,
    marginHorizontal: 10,
  },
  modalIcon: {
    width: 20,
    height: 20,
  },
  CheckIcon: {
    marginBottom: 10,
  },
});

export default styles;
