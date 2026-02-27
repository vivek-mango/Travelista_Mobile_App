import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Animated,
  Easing,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import BackArrow from '../../../../assets/Icons/down_line.svg';
import BackArrowWhite from '../../../../assets/Icons/down_line_white.svg';
import Menu from '../../../../assets/Icons/menu.svg';
import SearchImage from '../../../../assets/Icons/search_normal_light.svg';
import {ExploreData} from '../../../ExploreData';
import ExploreComponent from '../../../components/ExploreComponent';
import {useTheme} from '../../../Context/ThemeContext';
import DrawerComponent from '../../../components/DrawerComponent';
import Modal from 'react-native-modal';
import LocationImage from '../../../../assets/Icons/location.svg';
import {useTranslation} from 'react-i18next';

const Explore = ({navigation}) => {
  const theme = useTheme();
  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };
  const {t, i18n} = useTranslation();
  const [pans] = useState(
    Array.from({length: ExploreData.length}, () => new Animated.ValueXY()),
  );

  const [dragX] = useState(
    Array.from({length: ExploreData.length}, () => new Animated.ValueXY()),
  );

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [displayedCards, setDisplayedCards] = useState(ExploreData);
  const {width, height} = Dimensions.get('screen');
  const handleBack = () => {
    navigation.goBack();
  };

  const [imgOpacityArr] = useState(
    Array.from({length: ExploreData.length}, () => new Animated.Value(0)),
  );
  useEffect(() => {
    const viewsCount = displayedCards.length;
    const animations = Array.from({length: viewsCount}, (_, index) =>
      Animated.timing(imgOpacityArr[index], {
        toValue: 1,
        duration: index <= 2 ? 10 : 3000,
        delay:
          index > 2
            ? index % 3 == 0
              ? (index - 3) * 3000
              : (index - (index % 3) - 3) * 3000
            : 10,
        easing: Easing.out(Easing.sin),
        useNativeDriver: true,
      }),
    );

    Animated.parallel(animations).start();
  }, []);

  const toggleDrawer = () => {
    setIsModalVisible(!isModalVisible);
  };

  const moveCard = index => {
    const direction = Math.random() >= 0.5 ? 'left' : 'right';
    const moveValue =
      direction === 'left' ? -Math.abs(width / 4) : Math.abs(width / 4);

    Animated.timing(pans[index].x, {
      toValue: moveValue,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      moveCard(index);
    });
  };

  useEffect(() => {
    displayedCards.forEach((item, index) => {
      moveCard(index);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBack}>
          {theme === 'dark' ? <BackArrowWhite /> : <BackArrow />}
        </TouchableOpacity>
        <Text style={[styles.textStyle, textStyle]}>{t('Home')}</Text>
      </View>
      <View style={styles.navContainer}>
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={toggleDrawer}>
            <Menu />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer1}>
          <SearchImage style={{width: 20, height: 20, marginRight: 10}} />
          <TextInput
            style={[styles.textInputStyle1, textStyle]}
            placeholder={t('Home')}
          />
        </View>
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
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            paddingTop: 10,
            margin: 0,
          }}>
          <View style={styles.inputContent}>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.inputContainer}>
                <LocationImage />
                <View style={styles.inputStyle}>
                  <TextInput
                    editable={false}
                    style={styles.textInputStyle}
                    placeholder={t('Terms')}
                    placeholderTextColor="black"
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.inputContainer}>
                <LocationImage />
                <View style={styles.inputStyle}>
                  <TextInput
                    editable={false}
                    style={styles.textInputStyle}
                    placeholder={t('Activity')}
                    placeholderTextColor="black"
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.inputContainer}>
                <LocationImage />
                <View style={styles.inputStyle}>
                  <TextInput
                    editable={false}
                    style={styles.textInputStyle}
                    placeholder={t('Length of the trip')}
                    placeholderTextColor="black"
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.inputContainer}>
                <LocationImage />
                <View style={styles.inputStyle}>
                  <TextInput
                    editable={false}
                    style={styles.textInputStyle}
                    placeholder={t('Keywords')}
                    placeholderTextColor="black"
                  />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.inputContainer}>
                <LocationImage />
                <View style={styles.inputStyle}>
                  <TextInput
                    editable={false}
                    style={styles.textInputStyle}
                    placeholder={t('Random Sentences')}
                    placeholderTextColor="black"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={{display: 'flex', position: 'relative'}}>
        {displayedCards.map((item, index) => {
          const randPosition = Math.random() >= 0.5 ? 'left' : 'right';

          return (
            <Animated.View
              key={index}
              style={[
                {
                  opacity: imgOpacityArr[index],
                  zIndex: parseInt(index),
                  position: 'absolute',

                  top:
                    index == 0
                      ? 0
                      : parseInt(Math.floor(Math.random() * (540 - 1 + 1) + 1)),
                  left:
                    randPosition === 'left'
                      ? parseInt(Math.floor(Math.random() * (60 - 1 + 1) + 1))
                      : -parseInt(Math.floor(Math.random() * (60 - 1 + 1) + 1)),
                  transform: [
                    {
                      translateX: pans[index].x,
                    },
                  ],
                },
              ]}>
              <ExploreComponent
                Item={item}
                drag={dragX[index]}
                cardPosition={randPosition === 'left' ? '10' : '60'}
                cardAnimatePos={randPosition}
              />
            </Animated.View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Explore);
