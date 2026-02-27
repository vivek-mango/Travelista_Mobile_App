import Modal from 'react-native-modal';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';
import LocationImage from '../../../assets/Icons/location.svg';
import React from 'react';
const DrawerComponent = ({isVisible, onclose}) => {
  return (
    <Modal
      visible={isVisible}
      hasBackdrop={true}
      backdropColor="red"
      backdropTransitionInTiming={300}
      backdropTransitionOutTiming={300}
      animationIn={'slideInUp'}
      animationInTiming={300}
      animationOutTiming={300}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          margin: 0,
        }}>
        <View style={styles.inputContent}>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.inputContainer}>
              <LocationImage />
              <View style={styles.inputStyle}>
                <TextInput
                  editable={false}
                  style={styles.textInputStyle}
                  placeholder="Terms"
                  placeholderTextColor="black"
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.inputContainer}>
              <LocationImage />
              <View style={styles.inputStyle}>
                <TextInput
                  editable={false}
                  style={styles.textInputStyle}
                  placeholder="Activity"
                  placeholderTextColor="black"
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.inputContainer}>
              <LocationImage />
              <View style={styles.inputStyle}>
                <TextInput
                  editable={false}
                  style={styles.textInputStyle}
                  placeholder="Length of the trip"
                  placeholderTextColor="black"
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.inputContainer}>
              <LocationImage />
              <View style={styles.inputStyle}>
                <TextInput
                  editable={false}
                  style={styles.textInputStyle}
                  placeholder="Keywords"
                  placeholderTextColor="black"
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.inputContainer}>
              <LocationImage />
              <View style={styles.inputStyle}>
                <TextInput
                  editable={false}
                  style={styles.textInputStyle}
                  placeholder="Random Sentences"
                  placeholderTextColor="black"
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={onclose}>
            <Text>Close Drawer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default React.memo(DrawerComponent);
