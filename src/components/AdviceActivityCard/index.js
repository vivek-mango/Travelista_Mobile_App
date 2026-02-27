import {Image, Text, View} from 'react-native';
import {useTheme} from '../../Context/ThemeContext';
import AdviceImage from '../../../assets/AdviceActivityImage/adviceIcon.svg';
import RatingImage from '../../../assets/AdviceActivityImage/ratingImage.svg';
import {Divider} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

const AdviceActivityCard = ({Item}) => {
  const theme = useTheme();
  const {t, i18n} = useTranslation();
  const {museum, advice, rating} = Item;
  const textStyle = {
    // color: theme === 'dark' ? 'white' : 'black',
  };
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 8,
        elevation: 2,
        marginVertical: 16,
        paddingHorizontal: 12,
        paddingVertical: 12,
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
          width: '100%',
          maxWidth: 334,
        }}>
        <museum.image style={{height: 40, width: 40}} />
        <View style={{flex: 1, marginLeft: 12}}>
          <Text
            style={[
              {
                fontWeight: 600,
                fontSize: 14,
                fontFamily: 'Inter',
                color: 'black',
                marginBottom: 8,
              },
              textStyle,
            ]}>
            {museum.name}
          </Text>

          <Text
            style={[
              {
                fontWeight: 400,
                fontSize: 14,
                lineHeight: 18,
                fontFamily: 'Inter',
                color: 'black',
              },
              textStyle,
            ]}>
            {museum.description}
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#F4FDF9',
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              alignItems: 'center',
              borderRightWidth: 1,
              borderColor: '#0000001A',
              paddingHorizontal: 18,
            }}>
            <AdviceImage style={{marginVertical: 8}} />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 12,
                fontFamily: 'Inter',
                lineHeight: 14,
                color: 'black',
              }}>
              {t('Total Advices')}
            </Text>
            <Text
              style={{
                marginVertical: 8,
                fontWeight: 400,
                fontSize: 14,
                fontFamily: 'Inter',
                lineHeight: 18,
                color: 'black',
              }}>
              {advice.totalAdvice} Advices
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              paddingHorizontal: 18,
            }}>
            <RatingImage style={{marginVertical: 8}} />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 12,
                fontFamily: 'Inter',
                lineHeight: 14,
                color: 'black',
              }}>
              {t('Activity Rating')}
            </Text>
            <Text
              style={{
                marginVertical: 8,
                fontWeight: 400,
                fontSize: 14,
                fontFamily: 'Inter',
                lineHeight: 18,
                color: 'black',
              }}>
              {rating.totalRating}/5
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default AdviceActivityCard;
