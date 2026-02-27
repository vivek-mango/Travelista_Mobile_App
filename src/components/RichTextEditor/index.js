import React from 'react';
import {View} from 'react-native';
import {RichEditor, RichToolbar, actions} from 'react-native-pell-rich-editor';
import styles from './styles';

const RichTextEditor = ({
  editorRef,
  initialContent,
  onChangeContent,
  placeholder,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <RichToolbar
        editor={editorRef}
        actions={[
          actions.setBold,
          actions.setItalic,
          actions.setUnderline,
          actions.insertBulletsList,
          actions.insertOrderedList,
          actions.alignLeft,
          actions.alignCenter,
          actions.alignRight,
          actions.foreColor,
          actions.heading1,
        ]}
        iconSize={12}
        iconTint="#333"
        selectedIconTint="#0d9488"
        selectedButtonStyle={{backgroundColor: 'transparent'}}
        style={styles.toolbarStyle}
      />
      <RichEditor
        ref={editorRef}
        placeholder={placeholder}
        initialContentHTML={initialContent}
        onChange={onChangeContent}
        editorStyle={styles.editorStyle}
        style={styles.textStyle}
      />
    </View>
  );
};

export default RichTextEditor;
