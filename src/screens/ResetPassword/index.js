import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Input from '../../components/Input';
import Title from '../../components/Title';
import ButtonComponent from '../../components/Button';
import {useTranslation} from 'react-i18next';
import BackIcon from '../../../assets/Icons/back.svg';
import {useTheme} from '../../Context/ThemeContext';
const ResetPassword = ({navigation}) => {
  const theme = useTheme();
  const {t, i18n} = useTranslation();
  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };

  const [isContinueDisabled, setIsContinueDisabled] = useState(true);
  const [email, setEmail] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };
  useEffect(() => {
    if (email.trim() !== '') {
      setIsContinueDisabled(false);
    } else {
      setIsContinueDisabled(true);
    }
  }, [email]);
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
        <Title style={textStyle}>{t('Reset Password')}</Title>
        <View style={styles.resetInput}>
          <Input
            autoFocus
            children={t('Email')}
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
          />
        </View>
      </ScrollView>
      <ButtonComponent
        type={'green'}
        disabled={isContinueDisabled}
        style={styles.nextButton}
        onPress={() => navigation.navigate('Verification')}>
        {t('Reset')}
      </ButtonComponent>
    </SafeAreaView>
  );
};
export default React.memo(ResetPassword);
