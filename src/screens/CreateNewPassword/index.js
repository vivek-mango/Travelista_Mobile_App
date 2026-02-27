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
import ButtonComponent from '../../components/Button';
import BackIcon from '../../../assets/Icons/back.svg';
import {useTheme} from '../../Context/ThemeContext';

const CreateNewPassword = ({navigation}) => {
  const theme = useTheme();

  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleBack = () => {
    navigation.goBack();
  };

  const onsubmit = () => {
    if (!password || !confirmPassword) {
      Alert.alert('Please enter Password.');
    } else if (password !== confirmPassword) {
      Alert.alert('Enter Password do not match.');
    } else if (!agreed) {
      Alert.alert('You should agreed to the terms');
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
        <Title style={textStyle}>Create Password</Title>
        <View style={styles.passwordInput}>
          <Input
            autoFocus
            children="New Password"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />
          <Input
            children="Confirm Your New Password"
            secureTextEntry={true}
            onChangeText={text => setConfirmPassword(text)}
          />
        </View>
      </ScrollView>
      <View>
        <ButtonComponent
          style={styles.nextButton}
          type={'green'}
          onPress={onsubmit}>
          Continue
        </ButtonComponent>
      </View>
    </SafeAreaView>
  );
};
export default React.memo(CreateNewPassword);
