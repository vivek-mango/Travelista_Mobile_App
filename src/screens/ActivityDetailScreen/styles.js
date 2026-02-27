import {StyleSheet, I18nManager} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  detailContainer: {
    marginVertical: 28,
  },
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontWeight: 700,
    fontSize: 23,
    color: 'black',
    fontFamily: 'Inter',
    marginLeft: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  detailTitle: {
    fontWeight: 600,
    fontSize: 16,
    color: 'black',
    fontFamily: 'Inter',
    marginLeft: 8,
  },
  detailSubTitle: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17,
    color: 'black',
    marginLeft: 8,
  },
  detailSubTitle2: {
    fontSize: 12,
    fontWeight: 400,
    fontFamily: 'Inter',
    lineHeight: 20,
    color: 'black',
    marginTop: 12,
  },
  buttonStyle: {width: 177, marginVertical: 26},
});

export default styles;
