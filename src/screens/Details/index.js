import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import Close from '../../../assets/Icons/close_black.svg';
import CloseWhite from '../../../assets/Icons/close_white.svg';
import EditPen from '../../../assets/Icons/editpen.svg';
import EditPenWhite from '../../../assets/Icons/editpen_white.svg';
import ShareIcon from '../../../assets/Icons/share.svg';
import ArchiveAdd from '../../../assets/Icons/archive_add.svg';
import CheckImage from '../../../assets/Icons/check-verified.svg';
import React, {useState} from 'react';
import DetailInput from '../../components/DetailInput/Index';
import Button from '../../components/Button';
import Modal from 'react-native-modal';
import {useTheme} from '../../Context/ThemeContext';
import {useTranslation} from 'react-i18next';

const Details = ({navigation}) => {
  const theme = useTheme();
  const {t, i18n} = useTranslation();
  const mainContainerStyle = [theme === 'dark' && styles.darkModeContainer];

  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };

  const [isEditing, setIsEditing] = useState(false);
  const [tripName, setTripName] = useState('Visiting Canada');
  const [fromDate, setFromDate] = useState('28 Dec 2023');
  const [toDate, setToDate] = useState('31 Dec 2023');
  const [location, setLocation] = useState('Niagara Falls');
  const [typeOfTravel, setTypeOfTravel] = useState('Local');
  const [travelPrivacy, setTravelPrivacy] = useState('Only me');
  const [details, setDetails] = useState(
    `• Figuring out your travel budget and destination\n• Deciding on your travel style and partner(s)\n• Booking flights and accommodation\n• Researching every aspect of your trip, such as visa requirements, transportation options, activities, and attractions\n`,
  );
  const [adventures, setAdventures] = useState('cycling', 'Biking');
  const [activity, setActivity] = useState('cycling', 'Biking');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleEditPress = () => {
    setIsEditing(!isEditing);
    console.log(isEditing);
  };

  const handleBack = () => {
    navigation.goBack();
  };
  const handleConfirm = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={[styles.container, mainContainerStyle]}>
      <View style={styles.titleContainer}>
        <View style={styles.titleRow}>
          <Title style={textStyle} children={t('View Details')} />
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={handleEditPress}>
              {/* <EditPen style={styles.icon} /> */}
              {theme === 'dark' ? (
                <EditPenWhite style={styles.icon} />
              ) : (
                <EditPen style={styles.icon} />
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
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginHorizontal: 15}}>
        <DetailInput
          label={t('Trip Name')}
          value={tripName}
          onChangeText={text => setTripName(text)}
          editable={isEditing}
        />

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <DetailInput
            label={t('From')}
            editable={isEditing}
            isHalfWidth
            value={fromDate}
            onChangeText={text => setFromDate(text)}
          />
          <DetailInput
            label={t('To')}
            editable={isEditing}
            isHalfWidth
            value={toDate}
            onChangeText={text => setToDate(text)}
          />
        </View>
        <DetailInput
          label={t('Location')}
          editable={isEditing}
          value={location}
          onChangeText={text => setLocation(text)}
        />
        <DetailInput
          label={t('Details')}
          editable={isEditing}
          value={details}
          onChangeText={text => setDetails(text)}
        />
        <DetailInput
          label={t('Adventures')}
          editable={isEditing}
          value={adventures}
          onChangeText={text => setAdventures(text)}
        />
        <DetailInput
          label={t('Activities')}
          editable={isEditing}
          value={activity}
          onChangeText={text => setActivity(text)}
        />

        <DetailInput
          label={t('Type of Travel')}
          editable={isEditing}
          value={typeOfTravel}
          onChangeText={text => setTypeOfTravel(text)}
        />
        <DetailInput
          label={t('Travel Privacy')}
          editable={isEditing}
          value={travelPrivacy}
          onChangeText={text => setTravelPrivacy(text)}
        />
      </ScrollView>
      <View style={{marginHorizontal: 15, marginBottom: 10}}>
        <Button type={'green'} onPress={handleConfirm}>
          {t('Confirm')}
        </Button>
      </View>

      <Modal
        onBackdropPress={() => setIsModalVisible(false)}
        hasBackdrop={true}
        backdropColor="black"
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        isVisible={isModalVisible}
        animationIn={'slideInUp'}
        animationInTiming={300}
        animationOutTiming={300}>
        <View style={{flex: 1, justifyContent: 'flex-end', margin: 0}}>
          <View style={[styles.modalContainer, mainContainerStyle]}>
            <View>
              <CheckImage style={styles.CheckIcon} />
            </View>
            <View style={styles.modalContent}>
              <Text style={[styles.modalText, textStyle]}>
                {t('Hooray! You have successfully planned your trip')}
              </Text>
            </View>
            <View style={styles.modalIconsContainer}>
              <TouchableOpacity>
                <View style={styles.modalIconContainer}>
                  <ShareIcon style={styles.modalIcon} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View style={styles.modalIconContainer}>
                  <ArchiveAdd style={styles.modalIcon} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
export default React.memo(Details);
