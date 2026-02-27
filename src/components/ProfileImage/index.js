import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {Image} from 'react-native-svg';
import ProfileImg from '../../../assets/Icons/ProfileImage.svg';
import styles from './styles';
import {useTheme} from '../../Context/ThemeContext';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

const ProfileImage = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const {t, i18n} = useTranslation();
  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <ProfileImg width={130} height={110} />
        </View>
        <View style={styles.statusContainer}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={[styles.boldText, textStyle]}>66.5K</Text>
              <Text style={[styles.normalText, textStyle]}>
                {t('Followers')}
              </Text>
            </View>
            <View style={styles.column}>
              <Text style={[styles.boldText, textStyle]}>2238</Text>
              <Text style={[styles.normalText, textStyle]}>
                {t('Following')}
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={[styles.boldText, textStyle]}>1508</Text>
              <Text style={[styles.normalText, textStyle]}>
                {t('Trips/Travels')}
              </Text>
            </View>
            <View style={styles.column}>
              <Text style={[styles.boldText, textStyle]}>238</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('AdviceActivity')}>
                <Text style={[styles.normalText, textStyle]}>
                  {t('Advice')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default React.memo(ProfileImage);
