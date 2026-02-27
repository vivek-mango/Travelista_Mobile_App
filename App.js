import React, {useEffect} from 'react';
import {Alert, PermissionsAndroid, useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from './src/screens/Signup';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Verification from './src/screens/Verification';
import ResetPassword from './src/screens/ResetPassword';
import CreatePassword from './src/screens/CreatePassword';
import Routes from './src/Routes';
import StoryView from './src/screens/StoryView';
import TravelType from './src/screens/TravelType';
import Details from './src/screens/Details';
import CreateNewPassword from './src/screens/CreateNewPassword';
import Notifications from './src/screens/Notifications';
import Profile from './src/screens/Profile';
import {ThemeProvider} from './src/Context/ThemeContext';
import CategoriesScreen from './src/screens/CategoriesScreen';
import './src/i18n';
import UserProfile from './src/screens/UserProfile';
import ActivityDetail from './src/screens/ActivityDetailScreen';
import AdviceSummary from './src/screens/AdviceSummary';
import AdviceActivity from './src/screens/AdviceActivityScreen';
import {initDatabase} from './src/utils/database';
import MemoryCreationScreen from './src/screens/MemoryCreation';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    initDatabase();
    requestCameraPermission();
  }, []);
  const scheme = useColorScheme();

  const appTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFFFFF',
    },
  };
  const forFade = ({current}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });


  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "Camera Permission",
            message:
              "This app needs access to your camera to take photos or videos.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Camera permission granted");
        } else {
          console.log("Camera permission denied");
          Alert.alert(
            "Permission Denied",
            "You need to enable camera access in settings to use this feature."
          );
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      // For iOS
      const result = await request(PERMISSIONS.IOS.CAMERA);
      if (result === RESULTS.GRANTED) {
        console.log("Camera permission granted");
      } else {
        Alert.alert(
          "Permission Required",
          "Camera access is needed to use this feature."
        );
      }
    }
  };

  return (
    <ThemeProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : appTheme}>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: forFade,
          }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="CreatePassword" component={CreatePassword} />
          <Stack.Screen
            name="CreateNewPassword"
            component={CreateNewPassword}
          />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="StoryView" component={StoryView} />
          <Stack.Screen name="TravelType" component={TravelType} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Notifications" component={Notifications} />
          {/* <Stack.Screen name="Profile" component={Profile} /> */}
          {/* <Stack.Screen name="UserProfile" component={UserProfile} /> */}
          <Stack.Screen name="ActivityDetail" component={ActivityDetail} />
          <Stack.Screen name="AdviceSummary" component={AdviceSummary} />
          <Stack.Screen name="AdviceActivity" component={AdviceActivity} />
          <Stack.Screen
            name="MemoryCreation"
            component={MemoryCreationScreen}
          />

          <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />

          <Stack.Screen name="Routes" component={Routes} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
