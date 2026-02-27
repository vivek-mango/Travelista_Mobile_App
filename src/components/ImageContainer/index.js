import {View, Text, SafeAreaView, Image, Dimensions} from 'react-native';
import styles from './styles';
import Swiper from 'react-native-swiper';
import CoverImage from '../../../assets/Icons/Cover.svg';
import CoverImage1 from '../../../assets/Icons/Cover1.svg';
import {useTheme} from '../../Context/ThemeContext';
import React from 'react';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
const ImageContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.parentdiv}>
        <View style={styles.bioContainer}>
          <Text style={styles.bioText}>
            🌍✈️ Adventure seeker exploring the globe, one destination at a
            time.
          </Text>
          <Text style={styles.bioText}>
            📸 Capturing the world's wonders through my lens.
          </Text>
          <Text style={styles.bioText}>
            Embracing cultures, chasing sunsets, and creating memories that last
            a lifetime.
          </Text>
        </View>

        <View style={styles.imageContainer}>
          <Swiper
            style={styles.wrapper}
            showsButtons={true}
            buttonWrapperStyle={{
              width: '85%',
              backgroundColor: 'transparent',
              position: 'absolute',
              left: 1,
            }}
            showsPagination={false}>
            <View style={styles.slide1}>
              <CoverImage width={'100%'} height={'100%'} />
            </View>
            <View style={styles.slide1}>
              <CoverImage1 width={'100%'} height={'100%'} />
            </View>
          </Swiper>
        </View>
      </View>
    </View>
  );
};
export default React.memo(ImageContainer);
