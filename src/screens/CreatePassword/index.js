import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import Input from '../../components/Input';
import CheckBoxComponent from '../../components/CheckBox';
import ButtonComponent from '../../components/Button';
import BackIcon from '../../../assets/Icons/back.svg';
import {useTheme} from '../../Context/ThemeContext';
import {useTranslation} from 'react-i18next';
const CreatePassword = ({navigation}) => {
  const theme = useTheme();
  const {t, i18n} = useTranslation();
  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };
  const [agreed, setAgreed] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };

  const onCheckboxPress = () => {
    setAgreed(value => !value);
  };
  const onsubmit = () => {
    if (!password || !confirmPassword) {
      Alert.alert(t('Please enter Password.'));
    } else if (password !== confirmPassword) {
      Alert.alert(t('Enter Password do not match.'));
    } else if (!agreed) {
      Alert.alert(t('You should agreed to the terms'));
    } else {
      navigation.navigate('Login');
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
        <Title style={textStyle}>{t('Create Password')}</Title>
        <View style={styles.passwordInput}>
          <Input
            autoFocus
            children={t('Password')}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
          <Input
            children={t('Confirm Your Password')}
            secureTextEntry={true}
            onChangeText={text => setConfirmPassword(text)}
          />
        </View>

        <View style={styles.row}>
          <CheckBoxComponent checked={agreed} onPress={onCheckboxPress} />
          <View style={{marginHorizontal: 10}}>
            <Text styles={styles.agreeText}>
              {t('I accept to the')}
              <Text style={styles.link}> {t('Inventra terms')}</Text> and
              <Text style={styles.link}> {t('Conditions')} </Text>
              {t('and the')}
              <Text style={styles.link}> {t('privacy policy')}. </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
      <View>
        <ButtonComponent
          style={styles.nextButton}
          type={'green'}
          onPress={onsubmit}>
          {t('Continue')}
        </ButtonComponent>
      </View>
    </SafeAreaView>
  );
};
export default React.memo(CreatePassword);
