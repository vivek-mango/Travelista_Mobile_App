import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PostCreation from '../../PostTab/PostCreation';
import PostPreview from '../../PostTab/PostPreview';
import PlanPostScreen from '../../PlanPostTab/PlanPostScreen';
import TripSummary from '../../PlanPostTab/TripSummary';
import PlanPostDaysScreen from '../../PlanPostTab/PlanPostDaysScreen';
import SettingScreen from '../../HomeScreen/SettingScreen';

const Stack = createStackNavigator();

const PlanPostStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Post" component={PostCreation} />
      <Stack.Screen name="PostPreview" component={PostPreview} />
      <Stack.Screen name="PlanPost" component={PlanPostScreen} />
      <Stack.Screen name="TripSummary" component={TripSummary} />
      <Stack.Screen name="PlanPostDays" component={PlanPostDaysScreen} />
    </Stack.Navigator>
  );
};

export default PlanPostStack;
