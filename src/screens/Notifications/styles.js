import {StyleSheet, I18nManager} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  textInputStyle: {
    fontSize: 14,
    color: 'black',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  //   ################################ Render CSS #############

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  columnContainer: {
    // flexDirection: 'column',
    marginLeft: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginBottom: 30,
  },
  titleStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    textAlign: I18nManager.isRTL ? 'left' : 'left',
  },
  timeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 20,
  },
  desStyle: {
    color: '#7A857A',
    fontSize: 12,
    flexWrap: 'wrap',

    marginRight: 50,
  },
  timeStyle: {
    color: '#7A857A',
    fontSize: 12,
  },
});

export default styles;
