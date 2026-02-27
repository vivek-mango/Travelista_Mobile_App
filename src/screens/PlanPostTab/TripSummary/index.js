import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import Header from '../../../components/Header';
import {Button, List} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import {
  getActivitiesForDay,
  getLatestPlanPost,
  saveActivityForDay,
} from '../../../utils/database';
import HorizontalTabs from '../../../components/HorizontalTabs';
import moment from 'moment';
import DownArrow from '../../../../assets/Icons/dropdown.svg';
import RenderHTML from 'react-native-render-html';
import {ActivityData, ActivityDaysData} from '../../../AdviceActivityData';
import LocationIcon from '../../../../assets/activity/locationIcon.svg';
import {Portal, Dialog} from 'react-native-paper';
import {Provider as PaperProvider} from 'react-native-paper';
import DeleteConfirmationModal from '../../../components/DeleteConfirmationModal';
import ReusableForm from '../../../components/ReusableForm';
import ButtonComponent from '../../../components/Button';
import colors from '../../../constants/colors';
import {useTranslation} from 'react-i18next';
import ActivityDay from '../../../components/ActivityDayList';

const TripSummary = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const [planData, setPlanData] = useState(null);
  const [activeTab, setActiveTab] = useState('Plan Post');
  const [days, setDays] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedItemToDelete, setSelectedItemToDelete] = useState(null);
  const [showActivityForm, setShowActivityForm] = useState(false);
  const [selectedDayId, setSelectedDayId] = useState(null);
  const [dayActivities, setDayActivities] = useState({});
  const [formData, setFormData] = useState(null);

  const handleFormDataChange = data => {
    setFormData(data);
  };

  const handleDeleteActivity = itemIndex => {
    setSelectedItemToDelete(itemIndex);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    setShowDeleteDialog(false);
    setSelectedItemToDelete(null);
  };

  const handlePress = dayId => {
    setExpandedId(expandedId === dayId ? null : dayId);
  };

  const handleTabPress = (tabName, screenName) => {
    setActiveTab(tabName);
    if (screenName != 'PlanPost') {
      navigation.navigate(screenName);
    }
  };
  useEffect(() => {
    loadPlanData();
  }, []);

  const loadPlanData = async () => {
    try {
      const data = await getLatestPlanPost();
      setPlanData(data);
      if (data && data.start_date && data.end_date) {
        generateDaysList(data.start_date, data.end_date);
      }
    } catch (error) {
      console.error('Error loading plan post:', error);
    }
  };

  const generateDaysList = (startDate, endDate) => {
    const start = moment(startDate);
    const end = moment(endDate);
    const dayList = [];

    let current = start;
    let dayIndex = 0;

    while (current <= end) {
      dayList.push({
        id: dayIndex + 1,
        day: `Day ${dayIndex + 1}`,
        date: current.format('dddd - MMM DD, YYYY'),
        location: 'Ankara, Turkey',
        description: planData?.description, // Assuming each day has the same description; adjust if needed
      });
      current = current.add(1, 'days');
      dayIndex++;
    }

    setDays(dayList);
  };

  const loadActivitiesForDay = async dayId => {
    try {
      const activities = await getActivitiesForDay(dayId);
      setDayActivities(prev => ({
        ...prev,
        [dayId]: activities,
      }));
    } catch (error) {
      console.error('Error loading activities:', error);
    }
  };

  const handlePreview = () => {};

  const handleShare = async formData => {
    console.log('selectedDayId:>>>>>', selectedDayId);
    try {
      await saveActivityForDay(selectedDayId, formData);
      await loadActivitiesForDay(selectedDayId);
      setShowActivityForm(false);
    } catch (error) {
      console.error('Error saving activity:', error);
    }
  };

  const handleAddActivity = dayId => {
    setSelectedDayId(dayId);
    setShowActivityForm(true);
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}>
          <Header
            title={t('Trip Summary')}
            showSettings={true}
            onBackPress={() => navigation.goBack()}
            onSettingsPress={() => navigation.navigate('SettingScreen')}
          />

          <View>
            <HorizontalTabs activeTab={activeTab} onTabPress={handleTabPress} />
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {showActivityForm ? (
              <ReusableForm
                onDataChange={handleFormDataChange}
                onPreview={handlePreview}
                onShare={handleShare}
              />
            ) : (
              <View>
                {days.map((day, index) => (
                  <ActivityDay
                    key={index}
                    day={day}
                    index={index}
                    ActivityData={ActivityData}
                    expandedId={expandedId}
                    handlePress={handlePress}
                    handleAddActivity={handleAddActivity}
                    handleDeleteActivity={handleDeleteActivity}
                  />
                ))}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <ButtonComponent
                    type={'green'}
                    onPress={() => navigation.navigate('PlanPostDays')}
                    style={{
                      width: 160,
                      backgroundColor: 'white',
                      borderColor: colors.green,
                      borderWidth: 1,
                    }}>
                    {t('Preview')}
                  </ButtonComponent>
                  <ButtonComponent
                    type={'green'}
                    // onPress={onShare}
                    style={{width: 160}}>
                    {t('Share')}
                  </ButtonComponent>
                </View>
              </View>
            )}
          </ScrollView>
          <DeleteConfirmationModal
            visible={showDeleteDialog}
            onDismiss={() => setShowDeleteDialog(false)}
            onConfirm={confirmDelete}
            title="Delete Activity"
            message="Are you sure you want to delete an activity?"
          />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};
export default TripSummary;
