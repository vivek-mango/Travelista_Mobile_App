import {
  View,
  Text,
  ImageBackground,
  Image,
  Animated,
  PanResponder,
  Dimensions,
} from 'react-native';
import styles from './styles';
import MoreIcon from '../../../assets/Icons/more.svg';
import React, {useRef, useState} from 'react';

const ExploreComponent = ({Item, drag}) => {
  const {
    profBackground,
    profileImage,
    profileName,
    profileCountry,
    profileTime,
    profileDesc,
  } = Item;
  const [swiping, setSwiping] = useState(false);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      setSwiping(true);
    },
    onPanResponderMove: Animated.event([null, {dx: drag.x, dy: drag.y}], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (_, gestureState) => {
      if (Math.abs(gestureState.dx) > Dimensions.get('window').width / 4) {
        const direction = gestureState.dx > 0 ? 1 : -1;

        // Swiped right
        Animated.timing(drag, {
          toValue: {x: direction * Dimensions.get('window').width, y: 0},
          duration: 200,
          useNativeDriver: false,
        }).start();
      } else {
        Animated.spring(drag, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start(() => {
          setSwiping(false);
        });
      }
    },
  });

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.container,
        {transform: [{translateX: drag.x}, {translateY: drag.y}]},
      ]}>
      <View style={styles.backgroundWrapper}>
        <ImageBackground source={profBackground} style={styles.background}>
          <View style={styles.spaceContainer}>
            <View style={styles.rowContainer}>
              <Image source={profileImage} style={styles.imageStyle} />
              <MoreIcon style={styles.moreIcon} />

              <View style={styles.columnContainer}>
                <Text style={styles.nameStyle}>{profileName}</Text>
                <Text style={styles.countryStyle}>{profileCountry}</Text>
                <Text style={styles.timeStyle}>{profileTime}</Text>
              </View>
            </View>

            <View style={styles.spaceDesc}>
              <Text style={styles.spaceDescStyle}>{`"${profileDesc}"`}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Animated.View>
  );
};
export default React.memo(ExploreComponent);
