import {View, Text, ImageBackground, SafeAreaView, Image} from 'react-native';
import styles from './styles';
import MoreIcon from '../../../assets/Icons/more.svg';
import React from 'react';
const SpacingCard = ({Item}) => {
  const {spaceBack, spaceImage, spaceTime, spaceCity, spaceName, spaceDesc} =
    Item;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundWrapper}>
        <ImageBackground source={spaceBack} style={styles.background}>
          <View style={styles.spaceContainer}>
            <View style={styles.rowContainer}>
              <Image source={spaceImage} style={styles.imageStyle} />
              <MoreIcon style={styles.moreIcon} />

              <View style={styles.columnContainer}>
                <Text style={styles.nameStyle}>{spaceName}</Text>
                <Text style={styles.countryStyle}>{spaceCity}</Text>
                <Text style={styles.timeStyle}>{spaceTime}</Text>
              </View>
            </View>
            <View style={styles.spaceDesc}>
              <Text style={styles.spaceDescStyle}>{`"${spaceDesc}"`}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
export default React.memo(SpacingCard);
