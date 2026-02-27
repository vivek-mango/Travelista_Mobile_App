import React from 'react';
import {Text} from 'react-native';
import {Portal, Dialog, Button} from 'react-native-paper';

const DeleteConfirmationModal = ({
  visible,
  onDismiss,
  onConfirm,
  title,
  message,
}) => {
  return (
    <Portal style={{backgroundColor: 'white'}}>
      <Dialog
        visible={visible}
        onDismiss={onDismiss}
        style={{backgroundColor: 'white', height: 160, borderRadius: 12}}>
        <Dialog.Title
          style={{fontSize: 19, fontWeight: 600, fontFamily: 'Inter'}}>
          {title || 'Delete Activity'}
        </Dialog.Title>

        <Dialog.Content style={{paddingRight: 0}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
              fontFamily: 'Inter',
              color: '#747474',
            }}>
            {message || 'Are you sure you want to delete this activity?'}
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button
            onPress={onDismiss}
            style={{
              width: '100%',
              maxWidth: 130,
              borderWidth: 1,
              borderColor: '#D0D5DD',
              borderRadius: 8,
            }}>
            Cancel
          </Button>
          <Button
            style={{
              width: '100%',
              maxWidth: 130,
              borderWidth: 1,
              backgroundColor: '#F04438',
              borderRadius: 8,
            }}
            onPress={onConfirm}
            textColor="white">
            Delete
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DeleteConfirmationModal;
