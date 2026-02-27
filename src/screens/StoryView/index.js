import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import ProfileImage from '../../../assets/HomeImage/storyProImage.png';
import Profile from '../../components/Profile';
import MoreIcon from '../../../assets/Icons/more_white.svg';
import CloseIcon from '../../../assets/Icons/close_white.svg';
import React from 'react';
const StoryView = ({navigation}) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require('../../../assets/HomeImage/Image.png')}
      style={styles.background}>
      <SafeAreaView style={styles.container}>
        <View style={styles.rowContainer}>
          <Image source={ProfileImage} style={styles.image} />

          <View style={styles.columnContainer}>
            <Text style={styles.nameStyle}>Jane Cooper</Text>
            <Text style={styles.countryStyle}>Copenhagen, Denmark</Text>
            <Text style={styles.timeStyle}>5 Days ago</Text>
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity activeOpacity={0.7}>
              <MoreIcon style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleBack} activeOpacity={0.7}>
              <CloseIcon style={[styles.secondImage, styles.icon]} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default React.memo(StoryView);
