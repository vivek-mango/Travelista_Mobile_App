import {View, Text, SafeAreaView, FlatList, Pressable} from 'react-native';
import BackArrow from '../../../assets/Icons/down_line.svg';
import BackArrowWhite from '../../../assets/Icons/down_line_white.svg';
import styles from './styles';
import React from 'react';
import CommentICon from '../../../assets/Icons/commenticon.svg';
import TrendingIcon from '../../../assets/Icons/trending_icon.svg';
import LikedIcon from '../../../assets/Icons/liked_icon.svg';
import AdviceIcon from '../../../assets/Icons/advice_icon.svg';
import NewFollowIcon from '../../../assets/Icons/newfollow_icon.svg';
import {useTheme} from '../../Context/ThemeContext';
import {notifications} from '../../data';
import {useTranslation} from 'react-i18next';

const Notifications = ({navigation}) => {
  const theme = useTheme();
  const {t, i18n} = useTranslation();
  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };
  const handlePress = () => {
    navigation.goBack();
  };

  const renderItem = ({item}) => {
    const IconComponent = item.image;
    return (
      <View>
        <View style={styles.rowContainer}>
          <IconComponent />
          <View style={styles.columnContainer}>
            <Text style={styles.titleStyle}>{item?.title}</Text>
            <Text style={styles.desStyle}>{item?.des}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Text style={styles.timeStyle}>{item?.time}</Text>
          </View>
        </View>
      </View>
    );
  };
  const keyExtractor = item => item.id.toString();
  const groupedNotifications = notifications.reduce((grouped, notification) => {
    const groupKey = notification.timeTitle;
    if (!grouped[groupKey]) {
      grouped[groupKey] = [];
    }
    grouped[groupKey].push(notification);
    return grouped;
  }, {});

  const groupedData = Object.keys(groupedNotifications).reduce((data, key) => {
    data.push({title: key, data: groupedNotifications[key]});
    return data;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable hitSlop={10} onPress={handlePress}>
          {theme === 'dark' ? <BackArrowWhite /> : <BackArrow />}
        </Pressable>
        <Text style={[styles.textInputStyle, textStyle]}>
          {t('Notification')}
        </Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={groupedData}
        renderItem={({item}) => (
          <>
            <Text style={[styles.timeTitle, textStyle]}>{item.title}</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={item.data}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
            />
          </>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};
export default React.memo(Notifications);
