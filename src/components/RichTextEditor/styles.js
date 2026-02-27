import {I18nManager, StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F6F8',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
  },
  editorStyle: {
    backgroundColor: '#F4F6F8',
    color: '#333',
    placeholderColor: '#A3A3A3',
    padding: 10,
  },
  textStyle: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  toolbarStyle: {
    backgroundColor: '#F4F6F8',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});

export default styles;
