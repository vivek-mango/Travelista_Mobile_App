import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import {useTheme} from '../../Context/ThemeContext';
import React from 'react';
const DetailInput = ({
  label,
  value,
  onChangeText,
  editable,
  isHalfWidth,
  style,
}) => {
  const theme = useTheme();

  const mainContainerStyle = [theme === 'dark' && styles.darkModeContainer];

  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };

  return (
    <View style={[isHalfWidth && styles.halfWidthContainer, styles.container]}>
      <Text style={textStyle}>{label}</Text>
      <TextInput
        style={[styles.textInput, textStyle]}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        multiline={true}
        
      />
      <View style={[styles.lineStyle, mainContainerStyle]} />
    </View>
  );
};
export default React.memo(DetailInput);
