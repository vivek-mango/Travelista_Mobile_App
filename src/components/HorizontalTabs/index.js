import React from 'react';
import {ScrollView, TouchableOpacity, View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../Context/ThemeContext';

const tabs = [
  {id: 1, name: 'Post', screen: 'Post'},
  {id: 2, name: 'Plan Post', screen: 'PlanPost'},
];

const HorizontalTabs = ({activeTab, onTabPress}) => {
  const {t} = useTranslation();
  const theme = useTheme();

  return (
    <ScrollView
      stickyHeaderHiddenOnScroll
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.id}
          onPress={() => onTabPress(tab.name, tab.screen)}>
          <View
            style={[
              {
                borderRadius: 8,
                paddingHorizontal: 12,
                paddingVertical: 10,
                marginRight: 17,
                width: 115,
              },
              activeTab === tab.name
                ? {backgroundColor: '#27D97F'}
                : {backgroundColor: 'white'},
            ]}>
            <Text
              style={{
                fontWeight: 600,
                fontSize: 14,
                fontFamily: 'Inter',
                textAlign: 'center',
                color: 'black',
              }}>
              {t(`${tab.name}`)}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default HorizontalTabs;
