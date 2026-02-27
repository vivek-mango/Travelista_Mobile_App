import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useTheme} from '../../Context/ThemeContext';
import Calendar from '../../../assets/Icons/calendar.svg';
import Location from '../../../assets/Icons/location.svg';
import DownArrow from '../../../assets/Icons/dropdown.svg';

const Input = ({
  style,
  type,
  placeholder,
  Image1,
  Image2,
  Image3,
  children,
  onPress,
  isHalfWidth,
  multiline,
  ...props
}) => {
  const theme = useTheme();

  const mainContainerStyle = [theme === 'dark' && styles.darkModeContainer];

  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };

  return (
    <View style={[isHalfWidth && styles.halfWidthContainer]}>
      <Text style={[styles.titleText, textStyle]}>{children}</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View style={[styles.input, style, mainContainerStyle]}>
          <TextInput
            editable={!type}
            placeholder={placeholder}
            placeholderTextColor={theme === 'dark' ? 'black' : '#7A857A'}
            style={styles.textInput}
            multiline={multiline}
            {...props}
          />
          {Image1 && <Calendar style={styles.icon} />}
          {Image2 && <Location style={styles.icon} />}
          {Image3 && <DownArrow style={styles.icon} />}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Input);
