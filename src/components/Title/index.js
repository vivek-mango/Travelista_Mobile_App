import {Text, I18nManager} from 'react-native';
import styles from './styles';
import React from 'react';

const Title = ({children, style}) => {
  return (
    <Text
      style={[
        styles.title,
        style,
        {textAlign: I18nManager.isRTL ? 'left' : 'left'},
      ]}>
      {children}
    </Text>
  );
};
export default React.memo(Title);
