import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import styles from './styles';
import Profile from '../Profile';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SpacingCard from '../SpacingCard';
import MoreIcon from '../../../assets/Icons/more.svg';
import ArrowIcon from '../../../assets/Icons/arrow.svg';
import ArrowIconWhite from '../../../assets/Icons/arrow_white.svg';
import HeartIcon from '../../../assets/Icons/heart.svg';
import HeartIconWhite from '../../../assets/Icons/heart_white.svg';
import MessageIcon from '../../../assets/Icons/message.svg';
import MessageIconWhite from '../../../assets/Icons/message_white.svg';
import {useTheme} from '../../Context/ThemeContext';
import React from 'react';
const PostCard = ({Item}) => {
  const theme = useTheme();
  const desStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };
  const {postDesc, postImage} = Item;
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Profile Item={Item} />
        <View style={styles.captionContainer}>
          <View style={styles.descContainer}>
            <Text style={[styles.descTitle, desStyle]}>{`"${postDesc}"`}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={postImage} style={styles.postImage} />
            <MoreIcon style={styles.moreIcon} />

            <View style={styles.commentNav}>
              <View style={styles.navContainer}>
                <TouchableOpacity>
                  {theme === 'dark' ? <ArrowIconWhite /> : <ArrowIcon />}
                </TouchableOpacity>
                <Text style={[styles.commentText, desStyle]}>2K</Text>
              </View>

              <View style={styles.navContainer}>
                <TouchableOpacity>
                  {theme === 'dark' ? <HeartIconWhite /> : <HeartIcon />}
                </TouchableOpacity>

                <Text style={[styles.commentText, desStyle]}>2K</Text>
              </View>
              <View style={styles.navContainer}>
                <TouchableOpacity>
                  {theme === 'dark' ? <MessageIconWhite /> : <MessageIcon />}
                </TouchableOpacity>
                <Text style={[styles.commentText, desStyle]}>2K</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <View>
        <SpacingCard Item={Item} />
      </View>
    </>
  );
};
export default React.memo(PostCard);
