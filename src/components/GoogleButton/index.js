import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import React from 'react';
const GoogleButton = ({onPress, style, children}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      activeOpacity={0.7}>
      <Image
        source={require('../../../assets/google_logo.png')}
        style={styles.googleIcon}
      />
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};
export default React.memo(GoogleButton);
