import {View, Text, SafeAreaView, Dimensions, Image} from 'react-native';
import styles from './styles';
import Left1 from '../../../assets/leftRightImage/Rectangle_left1.png';
import Left2 from '../../../assets/leftRightImage/Rectangle_left2.png';
import Left3 from '../../../assets/leftRightImage/Rectangle_left3.png';
import Right1 from '../../../assets/leftRightImage/Rectangle_right1.png';
import Right2 from '../../../assets/leftRightImage/Rectangle_right2.png';
import Right3 from '../../../assets/leftRightImage/Rectangle_right3.png';
import {useTheme} from '../../Context/ThemeContext';
import React from 'react';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const LoopImageContainer = () => {
  const theme = useTheme();

  const borderColor = {
    borderColor: theme === 'dark' ? 'white' : 'black',
  };
  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <View style={styles.leftColumnSpace}>
          <Image style={[styles.imageStyle, borderColor]} source={Left1} />
        </View>
        <View style={styles.leftColumnSpace}>
          <Image style={[styles.imageStyle, borderColor]} source={Left2} />
        </View>
        <View style={styles.leftColumnSpace}>
          <Image style={[styles.imageStyle, borderColor]} source={Left3} />
        </View>
      </View>
      <View style={styles.rightColumn}>
        <View style={styles.rightColumnSpace}>
          <Image style={[styles.imageStyle, borderColor]} source={Right1} />
        </View>
        <View style={styles.rightColumnSpace}>
          <Image style={[styles.imageStyle, borderColor]} source={Right2} />
        </View>
        <View style={styles.rightColumnSpace}>
          <Image style={[styles.imageStyle, borderColor]} source={Right3} />
        </View>
      </View>
    </View>
  );
};
export default React.memo(LoopImageContainer);
