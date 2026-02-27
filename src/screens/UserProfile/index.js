import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Edit from '../../../assets/ProfileImage/edit_icon.svg';
import EditWhite from '../../../assets/ProfileImage/edit_iconWhite.svg';
import Delete from '../../../assets/ProfileImage/delete.svg';
import ButtonComponent from '../../components/Button';
import {useTranslation} from 'react-i18next';
import {Avatar, Divider, IconButton, Text} from 'react-native-paper';
import styles from './styles';
import ProfileImage from '../../../assets/ProfileImage/profile_image.png';
import {useTheme} from '../../Context/ThemeContext';
import {Button} from '@rneui/themed';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Header from '../../components/Header';
import {useState} from 'react';
import Modal from 'react-native-modal';

const UserProfile = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const theme = useTheme();

  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [username, setUsername] = useState('somesocialtokenuser_');
  const [email, setEmail] = useState('somesocialtokenuser@gmail.com');
  const [password, setPassword] = useState('************************');

  const handleUsernameEdit = () => {
    setIsEditingUsername(true);
  };

  const handleEmailEdit = () => {
    setIsEditingEmail(true);
  };

  const handlePasswordEdit = () => {
    setIsEditingPassword(true);
  };

  const titleStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };
  const subTitleStyle = {
    color: theme === 'dark' ? 'white' : '#8E8E8E',
  };

  const handleImageUpload = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        return;
      }
      if (response.assets && response.assets[0]) {
        const selectedImage = response.assets[0];
        console.log('Selected image:', selectedImage);
      }
    });
  };

  const [imageUri, setImageUri] = useState(null);

  const selectImage = source => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
    };

    if (source === 'camera') {
      launchCamera(options, response => {
        if (response.didCancel) {
          setIsModalVisible(!isModalVisible);
          return;
        }
        if (response.assets && response.assets[0]) {
          const selectedImage = response.assets[0].uri;
          setIsModalVisible(!isModalVisible);
          console.log('Selected image:', selectedImage);
        }
      });
    } else if (source === 'gallery') {
      launchImageLibrary(options, response => {
        if (response.didCancel) {
          setIsModalVisible(!isModalVisible);
          return;
        }
        if (response.errorCode) {
          console.log('ImagePicker Error:', response.errorMessage);
          return;
        }
        if (response.assets && response.assets[0]) {
          const selectedImage = response.assets[0];
          console.log('Selected image:', selectedImage);
          setIsModalVisible(!isModalVisible);
        }
      });
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={t('Edit Profile')}
        onBackPress={() => navigation.goBack()}
        showSettings={true}
        onSettingsPress={() => navigation.navigate('SettingScreen')}
      />

      <View style={styles.profileContent}>
        <View style={styles.profileContainer}>
          <View>
            <Text style={[styles.title, titleStyle]}>{t('Username')}</Text>

            {isEditingUsername ? (
              <TextInput
                value={username}
                onChangeText={setUsername}
                style={[styles.subTitle, subTitleStyle]}
                autoFocus
                onBlur={() => setIsEditingUsername(false)}
              />
            ) : (
              <Text style={[styles.subTitle, subTitleStyle]}>{username}</Text>
            )}
          </View>

          <TouchableOpacity activeOpacity={0.7} onPress={handleUsernameEdit}>
            {theme === 'dark' ? <EditWhite /> : <Edit />}
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <View>
            <Text style={[styles.title, titleStyle]}>{t('Email Address')}</Text>
            {isEditingEmail ? (
              <TextInput
                value={email}
                onChangeText={setEmail}
                style={[styles.subTitle, subTitleStyle]}
                autoFocus
                keyboardType="email-address"
                onBlur={() => setIsEditingEmail(false)}
              />
            ) : (
              <Text style={[styles.subTitle, subTitleStyle]}>{email}</Text>
            )}
          </View>

          <TouchableOpacity activeOpacity={0.7} onPress={handleEmailEdit}>
            {theme === 'dark' ? <EditWhite /> : <Edit />}
          </TouchableOpacity>
        </View>
        <View style={styles.profileContainer}>
          <View>
            <Text style={[styles.title, titleStyle]}>
              {t('Change Password')}
            </Text>
            {isEditingPassword ? (
              <TextInput
                value={password}
                onChangeText={setPassword}
                style={[styles.subTitle, subTitleStyle]}
                autoFocus
                secureTextEntry
                onBlur={() => setIsEditingPassword(false)}
              />
            ) : (
              <Text style={[styles.subTitle, subTitleStyle]}>{password}</Text>
            )}
          </View>

          <TouchableOpacity activeOpacity={0.7} onPress={handlePasswordEdit}>
            {theme === 'dark' ? <EditWhite /> : <Edit />}
          </TouchableOpacity>
        </View>

        <Divider
          style={{
            borderWidth: 1,
            borderColor: theme === 'dark' ? 'white' : '#8E8E8E',
          }}
        />

        <View style={{paddingHorizontal: 12, paddingVertical: 8}}>
          <Text style={{paddingTop: 14, paddingBottom: 8}}>Profile Image</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <Image source={ProfileImage} style={styles.image} />
              <View
                style={{
                  flexDirection: 'column',
                  maxWidth: 140,
                  marginLeft: 10,
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: '#8E8E8E',
                    fontSize: 14,
                    fontWeight: '400',
                    lineHeight: 17,
                  }}>
                  filename_userforprofile.png
                </Text>
                <Button
                  title={t('Upload New')}
                  type="outline"
                  size="sm"
                  onPress={toggleModal}
                  buttonStyle={{
                    backgroundColor: 'white',
                    borderColor: 'black',
                    borderRadius: 8,
                    borderWidth: 1,
                    paddingVertical: 10,
                    paddingHorizontal: 24,
                  }}
                  titleStyle={{color: 'black'}}
                />
              </View>
            </View>
            <View>
              <TouchableOpacity activeOpacity={0.7}>
                <Delete />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <ButtonComponent
          type={'green'}
          // onPress={onsubmit}
          style={{marginTop: 32}}>
          {t('Update Profile')}
        </ButtonComponent>
      </View>

      <Modal
        style={{margin: 0}}
        onBackdropPress={() => setIsModalVisible(false)}
        backdropColor="black"
        isVisible={isModalVisible}
        animationIn={'slideInUp'}
        hasBackdrop={true}
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}>
        <View style={{flex: 1, justifyContent: 'flex-end', margin: 0}}>
          <View
            style={{
              backgroundColor: 'white',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 10,
              height: '20%',
              width: '100%',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  textAlign: 'right',
                  fontWeight: '500',
                  fontSize: 18,
                  width: '70%',
                  marginTop: 10,
                }}>
                Profile Photo
              </Text>
              <IconButton
                icon="close"
                size={20}
                onPress={() => setIsModalVisible(!isModalVisible)}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View style={{alignContent: 'center', marginLeft: 20}}>
                <View
                  style={{
                    borderRadius: 30,
                    borderColor: 'black',
                    borderWidth: 1,
                  }}>
                  <IconButton
                    icon="camera"
                    size={20}
                    iconColor="#27D97F"
                    onPress={() => selectImage('camera')}
                  />
                </View>
                <Text style={{fontSize: 14, fontWeight: 500}}>Camera</Text>
              </View>
              <View style={{alignContent: 'center', marginLeft: 20}}>
                <View
                  style={{
                    borderRadius: 30,
                    borderColor: 'black',
                    borderWidth: 1,
                  }}>
                  <IconButton
                    icon="image-outline"
                    size={20}
                    iconColor="#27D97F"
                    onPress={() => selectImage('gallery')}
                  />
                </View>
                <Text style={{fontSize: 14, fontWeight: 500}}>Gallary</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
export default UserProfile;
