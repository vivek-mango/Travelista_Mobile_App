import {
  View,
  Text,
  SafeAreaView,
  Image,
  Alert,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Title from '../../components/Title';
import Input from '../../components/Input';
import React, {useEffect, useState} from 'react';
import ButtonComponent from '../../components/Button';
import GoogleButton from '../../components/GoogleButton';
import BackIcon from '../../../assets/Icons/back.svg';
import {Svg} from 'react-native-svg';
import {useTheme} from '../../Context/ThemeContext';
import {useTranslation} from 'react-i18next';

const Signup = ({navigation}) => {
  const theme = useTheme();
  const {t, i18n} = useTranslation();
  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };

  const [values, setValues] = useState({});
  const [isContinueDisabled, setIsContinueDisabled] = useState(true);

  const handleBack = () => {
    navigation.goBack();
  };

  const onChange = (value, key) => {
    setValues(val => ({
      ...val,
      [key]: value,
    }));
  };

  useEffect(() => {
    const allFieldsFilled =
      values.first_name ||
      values.last_name ||
      values.email ||
      values.phone_number;

    setIsContinueDisabled(!allFieldsFilled);
  }, [values]);

  const onsubmit = () => {
    if (!values.first_name || !values.last_name) {
      Alert.alert(t('Please enter the first name and last name'));
      return;
    } else if (!values.email) {
      Alert.alert(t('Please Enter email'));
    } else if (!values.phone_number) {
      Alert.alert(t('Please Enter Phone Number'));
    } else {
      navigation.navigate('Verification');
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
        style={styles.scrollContainer}
        contentContainerStyle={{flexGrow: 1}}>
        <Title style={textStyle}>{t('Sign up')}</Title>
        <View style={styles.inputContainer}>
          <Input
            children={t('First Name')}
            onChangeText={val => onChange(val, 'first_name')}
            isHalfWidth
          />
          <Input
            children={t('Last Name')}
            onChangeText={val => onChange(val, 'last_name')}
            isHalfWidth
          />
        </View>

        <Input
          children={t('Email')}
          onChangeText={val => onChange(val, 'email')}
          keyboardType="email-address"
        />
        <Input
          children={t('Phone Number')}
          onChangeText={val => onChange(val, 'phone_number')}
          keyboardType="numeric"
        />

        <View style={{marginVertical: 10}}>
          <Text style={[styles.footerText, textStyle]}>
            {t('Already have an account?')}
            <Text
              style={[styles.footerLink, textStyle]}
              onPress={() => navigation.navigate('Login')}>
              {t('Login')}
            </Text>
          </Text>
        </View>

        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine}></View>
          <Text style={styles.separatorText}>{t('or')}</Text>
          <View style={styles.separatorLine}></View>
        </View>

        <GoogleButton>{t('Continue With Google')}</GoogleButton>
      </ScrollView>
      <View style={styles.buttonContent}>
        <ButtonComponent
          type={'green'}
          disabled={isContinueDisabled}
          onPress={onsubmit}>
          {t('Continue')}
        </ButtonComponent>
      </View>
    </SafeAreaView>
  );
};
export default React.memo(Signup);
