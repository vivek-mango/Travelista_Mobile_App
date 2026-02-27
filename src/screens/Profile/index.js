import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import SendIcon from '../../../assets/Icons/send.svg';
import SendIconWhite from '../../../assets/Icons/send_white.svg';
import GroupIcon from '../../../assets/Icons/Group.svg';
import GroupIconWhite from '../../../assets/Icons/Group_white.svg';
import ProfileImage from '../../components/ProfileImage';
import ImageContainer from '../../components/ImageContainer';
import LoopImageContainer from '../../components/LoopImageContainer';
import {useTheme} from '../../Context/ThemeContext';
import React from 'react';
import Edit from '../../../assets/ProfileImage/edit_icon.svg';
import EditWhite from '../../../assets/ProfileImage/edit_iconWhite.svg';
const Profile = ({navigation}) => {
  const theme = useTheme();

  const textInputStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.titleRow}>
            <Title style={textInputStyle} children="Robert Fox" />
            <View style={styles.iconsContainer}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{marginRight: 16}}
                onPress={() => navigation.navigate('UserProfile')}>
                {theme === 'dark' ? <EditWhite /> : <Edit />}
              </TouchableOpacity>

              <TouchableOpacity style={{marginRight: 16}}>
                {theme === 'dark' ? <SendIconWhite /> : <SendIcon />}
              </TouchableOpacity>
              <TouchableOpacity style={{marginTop: 4}} activeOpacity={0.7}>
                {theme === 'dark' ? <GroupIconWhite /> : <GroupIcon />}
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <ProfileImage />

        <ImageContainer />

        <LoopImageContainer />
      </ScrollView>
    </SafeAreaView>
  );
};
export default React.memo(Profile);
