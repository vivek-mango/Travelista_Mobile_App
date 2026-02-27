import React from 'react';
import {View, Pressable, TouchableOpacity} from 'react-native';
import {Avatar, Text} from 'react-native-paper';
import BackArrow from '../../../assets/Icons/down_line.svg';
import BackArrowWhite from '../../../assets/Icons/down_line_white.svg';
import Setting from '../../../assets/ProfileImage/setting.svg';
import SettingWhite from '../../../assets/ProfileImage/settingWhite.svg';
import {useTheme} from '../../Context/ThemeContext';
import styles from './styles';
import More from '../../../assets/Icons/more.svg';
import MoreWhite from '../../../assets/Icons/more_white.svg';

const Header = ({
  title,
  onBackPress,
  showSettings = false,
  showIcon = false,
  avatarSource,
  onSettingsPress,
  customStyles = {},
}) => {
  const theme = useTheme();

  const titleStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <Pressable hitSlop={10} onPress={onBackPress}>
          {theme === 'dark' ? <BackArrowWhite /> : <BackArrow />}
        </Pressable>
        <Text style={[styles.textInputStyle, titleStyle]}>{title}</Text>
      </View>
      {showSettings && (
        <View style={styles.headerContainer}>
          <TouchableOpacity activeOpacity={0.7} onPress={onSettingsPress}>
            {theme === 'dark' ? (
              <SettingWhite style={styles.icon} />
            ) : (
              <Setting style={styles.icon} />
            )}
          </TouchableOpacity>

          <Avatar.Image
            source={
              avatarSource || require('../../../assets/ProfileImage/avatar.png')
            }
            size={40}
          />
        </View>
      )}
      {showIcon && (
        <View style={styles.headerContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            {theme === 'dark' ? (
              <MoreWhite style={styles.icon} />
            ) : (
              <More style={styles.icon} />
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default React.memo(Header);
