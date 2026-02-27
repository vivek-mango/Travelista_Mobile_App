import {StyleSheet, I18nManager} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
  },

  profileContent: {
    margin: 16,
  },
  profileContainer: {
    marginTop: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  subTitle: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Inter',
    lineHeight: 14,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 12,
  },

  // ###################### Modal Css #####################
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
});

export default styles;
