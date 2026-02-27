import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image} from 'react-native';
import Home from './screens/BottomTab/Home';
import AddTrip from './screens/BottomTab/AddTrip';
import Search from './screens/BottomTab/Search';
import Explore from './screens/BottomTab/Explore';
import Advice from './screens/BottomTab/Advice';
import HomeImage from '../assets/Icons/home.svg';
import HomeImageLight from '../assets/Icons/home_light.svg';
import AddTripImage from '../assets/Icons/add_circle.svg';
import AddTripImageLight from '../assets/Icons/add_circle_light.svg';
import SearchImage from '../assets/Icons/search_normal.svg';
import SearchImageLight from '../assets/Icons/search_normal_light.svg';
import ScanningImage from '../assets/Icons/scanning.svg';
import ScanningImageLight from '../assets/Icons/scanning_light.svg';
import AdviceImage from '../assets/Icons/webcam.svg';
import AdviceImageLight from '../assets/Icons/webcam_light.svg';
import {useIsFocused} from '@react-navigation/native';
import {useTheme} from './Context/ThemeContext';
import {createStackNavigator} from '@react-navigation/stack';
import {useTranslation} from 'react-i18next';
import PlanPost from './screens/PostTab/PostCreation';
import PlanPostStack from './screens/BottomTab/PlanPostStack';

const Tab = createBottomTabNavigator();

const Routes = () => {
  const theme = useTheme();
  const {t, i18n} = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'green',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? 'black' : 'white',
          borderTopColor: theme === 'dark' ? 'black' : 'white',
        },
      }}>
      <Tab.Screen
        name={t('Home')}
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <HomeImage /> : <HomeImageLight />,
        }}
      />
      <Tab.Screen
        name={t('AddTrip')}
        component={AddTrip}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <AddTripImage /> : <AddTripImageLight />,
        }}
      />
      <Tab.Screen
        name={t('Search')}
        component={Search}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <SearchImage /> : <SearchImageLight />,
        }}
      />
      {/* <Tab.Screen
        name={t('Explore')}
        component={Explore}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ScanningImage /> : <ScanningImageLight />,
        }}
      /> */}
      <Tab.Screen
        name={t('Plan Post')}
        component={PlanPostStack}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ScanningImage /> : <ScanningImageLight />,
        }}
      />
      <Tab.Screen
        name={t('Advice')}
        component={Advice}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <AdviceImage /> : <AdviceImageLight />,
        }}
      />
    </Tab.Navigator>
  );
};
export default Routes;
