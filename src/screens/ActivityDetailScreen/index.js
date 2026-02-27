import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Timer from '../../../assets/ActivityDetailImage/timer_sand.svg';
import Flight from '../../../assets/ActivityDetailImage/flight.svg';
import Duration from '../../../assets/ActivityDetailImage/duration.svg';
import Departure from '../../../assets/ActivityDetailImage/deprature.svg';

import styles from './styles';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../Context/ThemeContext';
import DetailImage from '../../../assets/ActivityDetailImage/image.svg';
import DetailImage1 from '../../../assets/ActivityDetailImage/DetailImage.svg';
import {Dimensions} from 'react-native';
import {Divider, Icon} from 'react-native-paper';
import ButtonComponent from '../../components/Button';
import Header from '../../components/Header';

const screenWidth = Dimensions.get('window').width;
const imageWidth = screenWidth - 32;

const ActivityDetail = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const theme = useTheme();

  const titleStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header
        title={t('Activity Feed Detail')}
        onBackPress={() => navigation.goBack()}
      />

      <View>
        <View style={styles.detailContainer}>
          <View style={styles.detailHeader}>
            <DetailImage />
            <Text style={[styles.headerTitle, titleStyle]}>
              Booked a Flight To Paris
            </Text>
          </View>

          <View>
            <DetailImage1 width={imageWidth} />
          </View>

          <View style={{marginTop: 16}}>
            <View style={styles.detailRow}>
              <Flight />
              <Text style={[styles.detailTitle, titleStyle]}>Flight#:</Text>
              <Text style={[styles.detailSubTitle, titleStyle]}>
                France AF1234
              </Text>
            </View>
            <View style={styles.detailRow}>
              <Departure />
              <Text style={[styles.detailTitle, titleStyle]}>Departure:</Text>
              <Text style={[styles.detailSubTitle, titleStyle]}>
                JFK International Airport, New York
              </Text>
            </View>
            <View style={styles.detailRow}>
              <Duration />
              <Text style={[styles.detailTitle, titleStyle]}>Date&Time:</Text>
              <Text style={[styles.detailSubTitle, titleStyle]}>
                Oct 25, 2024, 10:00AM
              </Text>
            </View>
            <View style={styles.detailRow}>
              <Timer />
              <Text style={[styles.detailTitle, titleStyle]}>Duration:</Text>
              <Text style={[styles.detailSubTitle, titleStyle]}>
                7h 30 mins
              </Text>
            </View>
          </View>
        </View>

        <Divider
          style={{
            borderWidth: 1,
            borderColor: theme === 'dark' ? 'white' : '#8E8E8E',
          }}
        />
      </View>

      <View style={{marginTop: 40}}>
        <View>
          <Text style={[styles.detailTitle, titleStyle, {marginLeft: 0}]}>
            {t('Flight Itinerary')}
          </Text>
          <Text style={[styles.detailSubTitle2, titleStyle]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
        <ButtonComponent
          type={'green'}
          // onPress={onsubmit}
          style={styles.buttonStyle}>
          {t('Share With Friends')}
        </ButtonComponent>
      </View>
    </ScrollView>
  );
};
export default ActivityDetail;
