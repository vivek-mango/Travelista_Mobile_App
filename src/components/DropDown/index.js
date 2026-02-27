import {
  View,
  Text,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import styles from './styles';
import RightTickImage from '../../../assets/Icons/check.svg';
import {useTheme} from '../../Context/ThemeContext';
import React from 'react';
const DropDown = ({options, onSelect, selectedOption}) => {
  const theme = useTheme();
  const mainContainerStyle = [theme === 'dark' && styles.darkModeContainer];

  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };

  return (
    <View style={[styles.dropdownContainer, mainContainerStyle]}>
      <FlatList
        data={options}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[item === selectedOption ? styles.selectedOption : null]}
            onPress={() => onSelect(item)}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <Text
                style={[
                  styles.textStyle,
                  item === selectedOption ? styles.selectedText : null,
                ]}>
                {item}
              </Text>
              {item === selectedOption && <RightTickImage />}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default React.memo(DropDown);
