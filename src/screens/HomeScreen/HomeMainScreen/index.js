import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Appearance,
  Dimensions,
} from 'react-native';
// import Title from '../../../components/Title';
import styles from './styles';
import Sms from '../../../../assets/Icons/sms_black.svg';
import Smswhite from '../../../../assets/Icons/sms_white.svg';
import Notification from '../../../../assets/Icons/notification_black.svg';
import NotificationWhite from '../../../../assets/Icons/notification_white.svg';
import {HomeImage, PostData} from '../../../data';
import PostCard from '../../../components/PostCard';
import {useTheme} from '../../../Context/ThemeContext';
import Carousel from 'react-native-snap-carousel';
import {useTranslation} from 'react-i18next';
import Setting from '../../../../assets/ProfileImage/setting.svg';
import SettingWhite from '../../../../assets/ProfileImage/settingWhite.svg';
import Title from '../../../components/Title';

const HomeMainScreen = ({navigation}) => {
  const carouselRef = useRef(null);
  const {width: screenWidth} = Dimensions.get('window');
  const theme = useTheme();
  const {t, i18n} = useTranslation();
  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };
  const borderColor = {
    borderColor: theme === 'dark' ? 'white' : 'black',
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <View style={styles.titleRow}>
            <Title children={t('Travelista')} style={textStyle} />
            <View style={styles.iconsContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SettingScreen')}>
                {theme === 'dark' ? (
                  <SettingWhite style={styles.icon} />
                ) : (
                  <Setting style={styles.icon} />
                )}
              </TouchableOpacity>

              <TouchableOpacity>
                {theme === 'dark' ? (
                  <Smswhite style={styles.icon} />
                ) : (
                  <Sms style={styles.icon} />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Notifications')}>
                {theme === 'dark' ? (
                  <NotificationWhite style={styles.icon} />
                ) : (
                  <Notification style={styles.icon} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{marginHorizontal: 10}}>
          <Carousel
            loop
            ref={carouselRef}
            sliderWidth={screenWidth - 20}
            itemWidth={screenWidth * 0.7}
            data={HomeImage}
            renderItem={({item, index}, parallaxProps) => (
              <TouchableOpacity
                style={styles.container1}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('StoryView', {item})}>
                <View styles={styles.row}>
                  <Image
                    source={item?.url}
                    containerStyle={styles.imageContainer}
                    style={[styles.homeImage, borderColor]}
                    parallaxFactor={0.6}
                    {...parallaxProps}
                  />
                  <Text
                    numberOfLines={1}
                    style={[styles.title, styles.bottomLeftTitle]}>
                    {item?.title.substring(0, 12)}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            hasParallaxImages={true}
          />
        </View>

        <FlatList
          accessibilityElementsHidden
          style={{marginHorizontal: 10}}
          data={PostData}
          keyExtractor={item => String(item.id)}
          renderItem={({item, index}) => <PostCard Item={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default React.memo(HomeMainScreen);
