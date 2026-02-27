import React from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import {Calendar} from 'react-native-calendars';

const CalendarModal = ({visible, onClose, onDateSelect, selected, minDate}) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}>
      <TouchableOpacity style={{flex: 1}} onPress={onClose}>
        <View>
          <Calendar
            onDayPress={onDateSelect}
            markedDates={{
              [selected]: {
                selected: true,
                selectedColor: '#27D97F',
              },
            }}
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              marginHorizontal: 50,
              marginVertical: 275,
              width: '75%',
            }}
            minDate={minDate}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default CalendarModal;
