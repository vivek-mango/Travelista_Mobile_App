import {useTranslation} from 'react-i18next';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import {useTheme} from '../../../Context/ThemeContext';
import styles from './styles';
import BackArrow from '../../../../assets/Icons/down_line.svg';
import BackArrowWhite from '../../../../assets/Icons/down_line_white.svg';
import ProfileIcon from '../../../../assets/Icons/user_icon.svg';
import RightLine from '../../../../assets/Icons/right_line.svg';
import AccountSetting from '../../../../assets/Icons/settings.svg';
import PrivacyIcon from '../../../../assets/Icons/lock.svg';
import SavedIcon from '../../../../assets/Icons/archive.svg';
import TermsIcon from '../../../../assets/Icons/list-box.svg';
import PaymentIcon from '../../../../assets/Icons/payment_icon.svg';
import React from 'react';

const SettingScreen = ({navigation}) => {
  const theme = useTheme();
  const {t, i18n} = useTranslation();
  const textInputStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };
  const handlePress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable hitSlop={10} onPress={handlePress}>
          {theme === 'dark' ? <BackArrowWhite /> : <BackArrow />}
        </Pressable>
        <Text style={[styles.textStyle, textInputStyle]}>{t('Settings')}</Text>
      </View>

      <View style={styles.inputContent}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Profile')}>
          <View style={styles.inputContainer}>
            <ProfileIcon />
            <View style={styles.inputStyle}>
              <TextInput
                editable={false}
                style={styles.textInputStyle}
                placeholder={t('Profile')}
                placeholderTextColor="black"
              />
              <RightLine />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.push('CategoriesScreen')}>
          <View style={styles.inputContainer}>
            <PaymentIcon />
            <View style={styles.inputStyle}>
              <TextInput
                editable={false}
                style={styles.textInputStyle}
                placeholder={t('Preferences')}
                placeholderTextColor="black"
              />
              <RightLine />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('UserProfile')}>
          <View style={styles.inputContainer}>
            <AccountSetting />
            <View style={styles.inputStyle}>
              <TextInput
                editable={false}
                style={styles.textInputStyle}
                placeholder={t('Account Settings')}
                placeholderTextColor="black"
              />
              <RightLine />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.inputContainer}>
            <PrivacyIcon />
            <View style={styles.inputStyle}>
              <TextInput
                editable={false}
                style={styles.textInputStyle}
                placeholder={t('Privacy')}
                placeholderTextColor="black"
              />
              <RightLine />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.inputContainer}>
            <SavedIcon />
            <View style={styles.inputStyle}>
              <TextInput
                editable={false}
                style={styles.textInputStyle}
                placeholder={t('Saved')}
                placeholderTextColor="black"
              />
              <RightLine />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.inputContainer}>
            <TermsIcon />
            <View style={styles.inputStyle}>
              <TextInput
                editable={false}
                style={styles.textInputStyle}
                placeholder={t('Terms')}
                placeholderTextColor="black"
              />
              <RightLine />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.inputContainer}>
            <PaymentIcon />
            <View style={styles.inputStyle}>
              <TextInput
                editable={false}
                style={styles.textInputStyle}
                placeholder={t('Payment')}
                placeholderTextColor="black"
              />
              <RightLine />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('ActivityDetail')}>
          <View style={styles.inputContainer}>
            <PaymentIcon />
            <View style={styles.inputStyle}>
              <TextInput
                editable={false}
                style={styles.textInputStyle}
                placeholder={t('Activity Detail')}
                placeholderTextColor="black"
              />
              <RightLine />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default React.memo(SettingScreen);
