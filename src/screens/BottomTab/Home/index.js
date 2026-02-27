import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeMainScreen from '../../HomeScreen/HomeMainScreen';
import SettingScreen from '../../HomeScreen/SettingScreen';
import Profile from '../../Profile';
import CategoriesScreen from '../../CategoriesScreen';
import UserProfile from '../../UserProfile';

const Stack = createStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeMainScreen" component={HomeMainScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
    </Stack.Navigator>
  );
};

export default React.memo(Home);
