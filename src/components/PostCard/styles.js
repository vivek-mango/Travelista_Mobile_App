import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  captionContainer: {},
  descContainer: {
    marginVertical: 14,
  },
  descTitle: {
    color: colors.black,
    fontSize: 12,
    fontWeight: 'normal',
    fontFamily: 'Inter',
  },

  postImage: {
    width: '100%',
    borderRadius: 12,
    position: 'relative',
  },
  moreIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 22,
    height: 22,
    tintColor: 'black',
  },
  commentNav: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  commentText: {
    marginLeft: 2,
    fontSize: 16,
    color: colors.black,
    fontWeight: 'bold',
  },
});

export default styles;
