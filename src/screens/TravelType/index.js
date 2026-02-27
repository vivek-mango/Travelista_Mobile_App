import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import Input from '../../components/Input';
import styles from './styles';
import Title from '../../components/Title';
import More from '../../../assets/Icons/more.svg';
import Close from '../../../assets/Icons/close_black.svg';
import MoreWhite from '../../../assets/Icons/more_white.svg';
import CloseWhite from '../../../assets/Icons/close_white.svg';
import React, {useState} from 'react';
import DropDown from '../../components/DropDown';
import Button from '../../components/Button';
import {useTheme} from '../../Context/ThemeContext';
// import {TravelData} from '../../data';
import {useTranslation} from 'react-i18next';
const TravelType = ({navigation}) => {
  const theme = useTheme();
  const {t, i18n} = useTranslation();
  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };
  const TravelData = [
    {
      key: 'adventures',
      label: t('Adventures'),
      placeholder: t('Choose Adventures'),
      options: [t('Cycling'), t('Canoe'), t('Biking'), t('Skiing')],
    },
    {
      key: 'activities',
      label: t('Activities'),
      placeholder: t('Choose Activities'),
      options: [
        t('Activity 1'),
        t('Activity 2'),
        t('Activity 3'),
        t('Activity 4'),
      ],
    },
    {
      key: 'typeOfTravel',
      label: t('Type of Travel'),
      placeholder: t('Choose Type of Travel'),
      options: [t('Local'), t('Global')],
    },
    {
      key: 'travelPrivacy',
      label: t('Travel Privacy'),
      placeholder: t('Who can see your travel?'),
      options: [t('Only me'), t('Others')],
    },
  ];

  const [dropdownVisible, setDropdownVisible] = useState({
    adventures: false,
    activities: false,
    typeOfTravel: false,
    travelPrivacy: false,
  });
  const [selectedOptions, setSelectedOptions] = useState({
    adventures: '',
    activities: '',
    typeOfTravel: '',
    travelPrivacy: '',
  });
  const [tickVisible, setTickVisible] = useState({
    adventures: false,
    activities: false,
    typeOfTravel: false,
    travelPrivacy: false,
  });
  const handleBack = () => {
    navigation.goBack();
  };
  const handleOptionSelect = (dropdownType, selectedOption) => {
    setSelectedOptions(prevSelected => ({
      ...prevSelected,
      [dropdownType]: selectedOption,
    }));

    setTickVisible(prevVisible => ({
      ...prevVisible,
      [dropdownType]: true,
    }));

    toggleDropdown(dropdownType);
  };

  const toggleDropdown = dropdownType => {
    setDropdownVisible(prevVisible => ({
      ...prevVisible,
      [dropdownType]: !prevVisible[dropdownType],
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleRow}>
          <Title style={textStyle} children={t('Choose')} />
          <View style={styles.iconsContainer}>
            <TouchableOpacity>
              {theme === 'dark' ? (
                <MoreWhite style={styles.icon} />
              ) : (
                <More style={styles.icon} />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={handleBack}>
              {theme === 'dark' ? (
                <CloseWhite style={styles.icon} />
              ) : (
                <Close style={styles.icon} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <Title style={textStyle} children={t('Travel Type')} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <FlatList
          style={styles.inputContainer}
          data={TravelData}
          renderItem={({item}) => (
            <View>
              <Input
                type={'true'}
                children={item.label}
                placeholder={item.placeholder}
                value={selectedOptions[item.key]}
                Image3={true}
                onPress={() => toggleDropdown(item.key)}
              />
              {dropdownVisible[item.key] && (
                <DropDown
                  options={item.options}
                  onSelect={selectedOption =>
                    handleOptionSelect(item.key, selectedOption)
                  }
                  selectedOption={selectedOptions[item.key]}
                />
              )}
            </View>
          )}
          keyExtractor={item => item.key}
        />
      </ScrollView>
      <View style={{marginHorizontal: 15, marginBottom: 10}}>
        <Button type={'green'} onPress={() => navigation.navigate('Details')}>
          {t('Next')}
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default React.memo(TravelType);
