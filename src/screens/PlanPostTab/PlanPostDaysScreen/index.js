import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import React, {useEffect, useState} from 'react';
import {getLatestPlanPost} from '../../../utils/database';
import Header from '../../../components/Header';
import HorizontalTabs from '../../../components/HorizontalTabs';
import {Avatar} from 'react-native-paper';
import AvatarImage from '../../../../assets/AdviceSummaryImage/Avatar1.svg';
import LocationIcon from '../../../../assets/activity/locationIcon.svg';
import moment from 'moment';
import DownArrow from '../../../../assets/Icons/dropdown.svg';
import {ActivityDaysData} from '../../../AdviceActivityData';
import ActivityDay from '../../../components/ActivityDayList';
import {Dimensions} from 'react-native';

import Svg, {Path, Circle, Text as SvgText} from 'react-native-svg';

const days = [
  {
    date: 'Monday - Nov 11, 2024',
    day: 'Day 1',
    description: '<div>hfyuuj</div>',
    id: 1,
    location: 'Ankara, Turkey',
  },
];
const {width, height} = Dimensions.get('window');
const circleRadius = 30;
const padding = 10;
const maxAttempts = 100;

const BubbleChart = ({data}) => {
  const [showactivity, setShowActivity] = useState(false);
  const fixedWidth = width - 40;
  const fixedHeight = Math.max(
    300,
    Math.ceil(data.length / 3) * (circleRadius * 6),
  );

  const generatePositions = () => {
    const positions = [];
    const verticalSpacing = circleRadius * 3;

    data.forEach((item, index) => {
      let x, y;

      switch (index % 3) {
        case 0:
          x = circleRadius * 2;
          y = Math.floor(index / 3) * verticalSpacing * 2 + circleRadius * 2;
          break;
        case 1:
          x = fixedWidth / 2;
          y = Math.floor(index / 3) * verticalSpacing * 2 + verticalSpacing;
          break;
        case 2:
          x = fixedWidth - circleRadius * 2;
          y = Math.floor(index / 3) * verticalSpacing * 2 + circleRadius * 2;
          break;
      }

      positions.push({x, y, label: item});
    });

    return positions;
  };

  const generatePath = (start, end) => {
    const controlPoint1X = (start.x + end.x) / 2;
    const controlPoint1Y = start.y;
    const controlPoint2X = (start.x + end.x) / 2;
    const controlPoint2Y = end.y;

    return `M ${start.x} ${start.y} C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${end.x} ${end.y}`;
  };

  const positions = generatePositions();

  return (
    <View
      style={{
        alignItems: 'center',
        marginVertical: 20,
        height: 300, // Fixed container height
        overflow: 'hidden',
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        contentContainerStyle={{
          minHeight: fixedHeight,
        }}>
        <Svg style={{height: fixedHeight, minHeight: 200}} width={fixedWidth}>
          {positions.map((pos, index) => {
            if (index < positions.length - 1) {
              return (
                <Path
                  key={`path-${index}`}
                  d={generatePath(pos, positions[index + 1])}
                  stroke="#27D97F"
                  strokeWidth="2"
                  fill="none"
                />
              );
            }
          })}

          {positions.map((pos, index) => (
            <React.Fragment key={`bubble-${index}`}>
              <Circle
                cx={pos.x}
                cy={pos.y}
                r={circleRadius}
                fill="#27D97F"
                onPress={() => setShowActivity(!showactivity)}
              />
              <SvgText
                x={pos.x}
                y={pos.y + 5}
                textAnchor="middle"
                fill="white"
                fontSize="14"
                onPress={() => setShowActivity(!showactivity)}>
                {pos.label}
              </SvgText>
            </React.Fragment>
          ))}
        </Svg>
      </ScrollView>
    </View>
  );
};

const PlanPostDaysScreen = () => {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Plan Post');
  const [dayLabels, setDayLabels] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  const handleTabPress = (tabName, screenName) => {
    setActiveTab(tabName);
    if (tabName != 'PlanPost') {
      navigation.navigate(screenName);
    }
  };

  const handlePress = dayId => {
    setExpandedId(expandedId === dayId ? null : dayId);
  };

  useEffect(() => {
    const loadPost = async () => {
      try {
        const post = await getLatestPlanPost();
        generateDayLabels(post.start_date, post.end_date);
      } catch (error) {
        console.error('Error loading post:', error);
      }
    };

    loadPost();
  }, []);

  const generateDayLabels = (startDate, endDate) => {
    const start = moment(startDate);
    const end = moment(endDate);
    const daysCount = end.diff(start, 'days') + 1;
    const labels = [];

    for (let i = 1; i <= daysCount; i++) {
      labels.push(`Day ${i}`);
    }

    setDayLabels(labels);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Header
          title={t('Days Activities')}
          showSettings={true}
          onBackPress={() => navigation.goBack()}
          onSettingsPress={() => navigation.navigate('SettingScreen')}
        />

        <View>
          <HorizontalTabs activeTab={activeTab} onTabPress={handleTabPress} />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 20,
          }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 8,
              elevation: 2,
              marginVertical: 8,
              paddingHorizontal: 12,
              paddingVertical: 12,
            }}>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Avatar.Image source={AvatarImage} size={40} />
                <View style={{marginLeft: 14}}>
                  <Text
                    style={{
                      fontWeight: 600,
                      fontSize: 14,
                      fontFamily: 'Inter',
                      color: '#000000',
                    }}>
                    John Doe
                  </Text>
                  <View style={{flexDirection: 'row', marginTop: 8}}>
                    <LocationIcon style={{marginRight: 8}} />
                    <Text
                      style={{
                        fontWeight: 500,
                        fontSize: 12,
                        fontFamily: 'Inter',
                        color: '#57675F',
                      }}>
                      Anarka Turkey
                    </Text>
                  </View>
                </View>
              </View>

              <BubbleChart data={dayLabels} />
            </View>

            <View>
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: 14,
                  lineHeight: 17,
                  color: 'black',
                }}>
                About
              </Text>
              <Text
                style={{
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: 20,
                  color: '#051B10',
                }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </View>

            <View>
              {days.map((day, index) => (
                <ActivityDay
                  key={index}
                  showAddActivity={false}
                  day={day}
                  index={index}
                  ActivityData={ActivityDaysData}
                  expandedId={expandedId}
                  handlePress={handlePress}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default PlanPostDaysScreen;
