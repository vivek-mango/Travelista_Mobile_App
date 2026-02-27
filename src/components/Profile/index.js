import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import ShareIcon from '../../../assets/Icons/share.svg';
import ShareIconWhite from '../../../assets/Icons/share_white.svg';
import ArchiveIcon from '../../../assets/Icons/archive_add.svg';
import ArchiveIconWhite from '../../../assets/Icons/archive_add_white.svg';
import {useTheme} from '../../Context/ThemeContext';
import React from 'react';
const Profile = ({Item}) => {
  const theme = useTheme();
  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };
  const {profileImage, Name, country, postTime} = Item;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={{}}>
          <Image source={profileImage} style={styles.image} />
        </View>

        <View style={styles.columnContainer}>
          <Text style={[styles.nameStyle, textStyle]}>{Name}</Text>
          <Text style={[styles.countryStyle, textStyle]}>{country}</Text>
          <Text style={[styles.timeStyle, textStyle]}>{postTime}</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity>
            {theme === 'dark' ? (
              <ShareIconWhite style={styles.icon} />
            ) : (
              <ShareIcon style={styles.icon} />
            )}
          </TouchableOpacity>

          <TouchableOpacity>
            {/* <ArchiveIcon style={[styles.secondImage, styles.icon]} /> */}
            {theme === 'dark' ? (
              <ArchiveIconWhite style={[styles.secondImage, styles.icon]} />
            ) : (
              <ArchiveIcon style={[styles.secondImage, styles.icon]} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default React.memo(Profile);
