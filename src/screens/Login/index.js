import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
  Alert,
  I18nManager,
  Platform,
} from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import Input from '../../components/Input';
import ButtonComponent from '../../components/Button';
import React, {useEffect, useState} from 'react';
import GoogleButton from '../../components/GoogleButton';
import BackIcon from '../../../assets/Icons/back.svg';
import {useTheme} from '../../Context/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useTranslation} from 'react-i18next';

const Login = ({navigation}) => {
  const {t, i18n} = useTranslation();

  const [isContinueDisabled, setIsContinueDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const theme = useTheme();

  const mainContainerStyle = [theme === 'dark' && styles.darkModeContainer];

  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };
  const iconStyle = {
    tintColor: theme === 'dark' ? 'white' : 'black',
  };

  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (email.trim() !== '' && password.trim() !== '') {
      setIsContinueDisabled(false);
    } else {
      setIsContinueDisabled(true);
    }
  }, [email, password]);

  const onsubmit = () => {
    if (!isContinueDisabled) {
      navigation.navigate('CategoriesScreen');
    } else {
      Alert.alert(t('Please fill in all fields'));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backContainerStyle}>
        <Pressable
          hitSlop={8}
          style={styles.backContainer}
          onPress={handleBack}>
          <BackIcon style={styles.backIcon} />
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <Title style={textStyle}>{t('Welcome Back')}</Title>
        <Title style={textStyle}>{t('Traveller')}</Title>

        <View style={styles.loginInput}>
          <Input
            children={t('Email')}
            keyboardType={t('email-address')}
            onChangeText={text => setEmail(text)}
            style={{textAlign: I18nManager.isRTL ? 'right' : 'left'}}
          />
          <Input
            children={t('Password')}
            secureTextEntry
            onChangeText={text => setPassword(text)}
          />
        </View>

        <View style={{marginVertical: 10}}>
          <Text style={[styles.footerText, textStyle]}>
            {t('Forget Password?')}{' '}
            <Text
              style={[styles.footerLink, textStyle]}
              onPress={() => navigation.navigate('ResetPassword')}>
              {t('Reset It')}
            </Text>
          </Text>
        </View>

        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine}></View>
          <Text style={styles.separatorText}>{t('or')}</Text>
          <View style={styles.separatorLine}></View>
        </View>

        <GoogleButton>{t('Login With Google')}</GoogleButton>
      </ScrollView>

      <View style={{marginBottom: 20}}>
        <ButtonComponent
          style={styles.nextButton}
          type={'green'}
          children={t('Login')}
          onPress={onsubmit}
          disabled={isContinueDisabled}
        />

        <Text style={[styles.footerText, textStyle, {textAlign: 'center'}]}>
          {t("Don't have an Account?")}
          <Text
            style={[styles.footerLink, textStyle]}
            onPress={() => navigation.navigate('Signup')}>
            {' '}
            {t('Sign up')}
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default React.memo(Login);
