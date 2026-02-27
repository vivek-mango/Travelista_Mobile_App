import {Image, Text, View} from 'react-native';
import {useTheme} from '../../Context/ThemeContext';
import styles from './styles';
import {Avatar} from 'react-native-paper';
const AdviceSummaryCard = ({Item}) => {
  const {advice, user} = Item;
  const theme = useTheme();
  const textStyle = {
    // color: theme === 'dark' ? 'white' : 'black',
  };

  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 8,
        elevation: 2,
        marginVertical: 8,
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
        <Image source={advice.image} style={{height: 40, width: 40}} />
        <View style={{flex: 1, marginLeft: 12}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
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
              {advice.name}
            </Text>
            <Text
              style={[
                {
                  fontWeight: 400,
                  fontSize: 10,
                  fontFamily: 'Inter',
                  color: '#8FA198',
                },
                textStyle,
              ]}>
              {advice.date}
            </Text>
          </View>
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
            {advice.description}
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#F9F9F9',
          borderRadius: 8,
          paddingVertical: 12,
          paddingHorizontal: 12,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 12,
          }}>
          <Text
            style={[
              {
                fontWeight: 400,
                fontSize: 10,
                fontFamily: 'Inter',
                color: '#8FA198',
              },
              textStyle,
            ]}>
            {user.date}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginRight: 12, paddingVertical: 3}}>
              <Text
                style={[
                  {
                    fontWeight: 600,
                    fontSize: 14,
                    fontFamily: 'Inter',
                    color: 'black',
                  },
                  textStyle,
                ]}>
                {user.name}
              </Text>
              <Text
                style={[
                  {
                    fontWeight: 500,
                    fontSize: 12,
                    fontFamily: 'Inter',
                    color: '#57675F',
                  },
                  textStyle,
                ]}>
                {user.subTitle}
              </Text>
            </View>

            <Avatar.Image source={user.image} size={40} />
          </View>
        </View>

        <View>
          <Text
            style={[
              {
                fontWeight: 400,
                fontSize: 14,
                lineHeight: 18,
                fontFamily: 'Inter',
                color: 'black',
                textAlign: 'right',
              },
              textStyle,
            ]}>
            {user.description}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default AdviceSummaryCard;
