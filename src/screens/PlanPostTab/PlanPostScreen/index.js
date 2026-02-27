import {SafeAreaView, ScrollView, Text} from 'react-native';
import {View} from 'react-native';
import styles from './styles';
import Header from '../../../components/Header';
import {useTranslation} from 'react-i18next';
import HorizontalTabs from '../../../components/HorizontalTabs';
import {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Input from '../../../components/Input';
import CalendarModal from '../../../components/CalendarModal';
import Button from '../../../components/Button';
import colors from '../../../constants/colors';
import RichTextEditor from '../../../components/RichTextEditor';
import {savePlanPost} from '../../../utils/database';

const PlanPostScreen = () => {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  const [title, setTitle] = useState('');
  const [activeTab, setActiveTab] = useState('Plan Post');
  const [showCalendar, setShowCalendar] = useState(false);
  const [selected, setSelected] = useState('');
  const [minDate, setMinDate] = useState('');
  const [selectedFromDate, setSelectedFromDate] = useState('');
  const [selectedToDate, setSelectedToDate] = useState('');
  const editorRef = useRef();
  const [description, setDescription] = useState('');

  const handleTabPress = (tabName, screenName) => {
    setActiveTab(tabName);
    navigation.navigate(screenName);
  };
  const openCalendarFor = dateType => {
    setShowCalendar(true);
    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];
    setMinDate(formattedToday);

    if (dateType === 'from') {
      setSelectedFromDate('');
    } else if (dateType === 'to') {
      setSelectedToDate('');
      setMinDate(selectedFromDate);
    }
  };

  const onDateSelect = day => {
    if (!selectedFromDate) {
      setSelectedFromDate(day.dateString);
      closeCalendar();
    } else if (!selectedToDate && day.dateString > selectedFromDate) {
      setSelectedToDate(day.dateString);
      closeCalendar();
    }
  };

  const closeCalendar = () => {
    setShowCalendar(false);
  };

  const handleSave = async () => {
    try {
      const planPostData = {
        title,
        description,
        startDate: selectedFromDate,
        endDate: selectedToDate,
      };

      await savePlanPost(planPostData);
      navigation.navigate('TripSummary');
    } catch (error) {
      console.error('Error saving plan post:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Header
          title={t('Plan Posts')}
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
          <View>
            <Input
              children={t('Post Plan Title')}
              placeholder={t(`Whats on Your Mind?`)}
              value={title}
              onChangeText={text => setTitle(text)}
            />

            <Text style={styles.titleText}>{t('Post Plan Description')}</Text>
            <RichTextEditor
              editorRef={editorRef}
              initialContent={description}
              onChangeContent={content => setDescription(content)}
              placeholder="Briefly explain the purpose of post!"
            />
            <View style={styles.inputContainer}>
              <Input
                type={'true'}
                children={t('Plan Start Date')}
                placeholder={t('Pick a Date')}
                isHalfWidth
                Image1={true}
                onPress={() => openCalendarFor('from')}
                value={selectedFromDate}
              />
              <Input
                type={'true'}
                children={t('Plan End Date')}
                placeholder={t('Pick a Date')}
                isHalfWidth
                Image1={true}
                onPress={() => openCalendarFor('to')}
                value={selectedToDate}
              />
            </View>
            <CalendarModal
              visible={showCalendar}
              onClose={closeCalendar}
              onDateSelect={onDateSelect}
              selected={selected}
              minDate={minDate}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <Button
                type={'green'}
                onPress={() => navigation.goBack()}
                style={{
                  width: 160,
                  backgroundColor: 'white',
                  borderColor: colors.green,
                  borderWidth: 1,
                }}>
                {t('Cancel')}
              </Button>
              <Button type={'green'} onPress={handleSave} style={{width: 160}}>
                {t('Save')}
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default PlanPostScreen;
