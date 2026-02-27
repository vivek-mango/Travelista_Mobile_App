import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../../components/Header';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import ReusableForm from '../../../components/ReusableForm';
import {useTranslation} from 'react-i18next';
import Button from '../../../components/Button';
import colors from '../../../constants/colors';
import HorizontalTabs from '../../../components/HorizontalTabs';
import {savePost} from '../../../utils/database';

const PostCreation = () => {
  const [formData, setFormData] = useState(null);
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Post');

  const handleTabPress = (tabName, screenName) => {
    setActiveTab(tabName);
    navigation.navigate(screenName);
  };

  const handleFormDataChange = data => {
    setFormData(data);
  };

  const handlePreview = async () => {
    try {
      await savePost(formData);
      navigation.navigate('PostPreview');
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  const handleShare = () => {
    console.log('hdkjgfjd');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Header
          title={t('Post Creation')}
          showSettings={true}
          onBackPress={() => navigation.goBack()}
          onSettingsPress={() => navigation.navigate('SettingScreen')}
        />

        <View>
          <HorizontalTabs activeTab={activeTab} onTabPress={handleTabPress} />
        </View>

        <ScrollView
          style={{flex: 1, marginTop: 28}}
          showsVerticalScrollIndicator={false}>
          <ReusableForm
            onDataChange={handleFormDataChange}
            onPreview={handlePreview}
            onShare={handleShare}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default React.memo(PostCreation);
