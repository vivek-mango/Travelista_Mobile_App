import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HorizontalTabs from '../../../components/HorizontalTabs';
import styles from './styles';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import {getLatestPost} from '../../../utils/database';
import RenderHtml from 'react-native-render-html';
import Video from 'react-native-video';
import {useTheme} from '../../../Context/ThemeContext';

const PostPreview = () => {
  const {t, i18n} = useTranslation();
  const theme = useTheme();
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Post');
  const [postData, setPostData] = useState(null);

  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };
  const textDataStyle = {
    color: theme === 'dark' ? 'white' : ' #051B10',
  };

  useEffect(() => {
    const loadPost = async () => {
      try {
        const post = await getLatestPost();
        setPostData({
          ...post,
          images: JSON.parse(post.images),
          video: JSON.parse(post.video),
        });
      } catch (error) {
        console.error('Error loading post:', error);
      }
    };

    loadPost();
  }, []);

  const handleTabPress = (tabName, screenName) => {
    setActiveTab(tabName);
    if (tabName != 'Post') {
      navigation.navigate(screenName);
    }
  };
  console.log('PostDatatattata:>>>', postData);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <Header
          title={t('Post Preview')}
          showSettings={true}
          onBackPress={() => navigation.goBack()}
          onSettingsPress={() => navigation.navigate('SettingScreen')}
        />
        <View>
          <HorizontalTabs activeTab={activeTab} onTabPress={handleTabPress} />
        </View>
        <ScrollView
          style={{flex: 1, marginTop: 28}}
          showsVerticalScrollIndicator={false}>
          <View>
            <View style={{marginBottom: 20}}>
              <Text style={[styles.titleText, textStyle]}>
                {t('Post Title')}
              </Text>
              <Text
                style={[
                  {
                    fontWeight: 400,
                    fontSize: 12,
                    lineHeight: 14,
                    fontFamily: 'Inter',
                  },
                  textDataStyle,
                ]}>
                {/* Trip To Bali and 5 Days Stay! */}
                {postData?.title}
              </Text>
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={[styles.titleText, textStyle]}>
                {t('Post Description')}
              </Text>

              <RenderHtml
                source={{html: postData?.description || ''}}
                tagsStyles={{
                  body: {
                    fontFamily: 'Inter',
                    fontSize: 12,
                    lineHeight: 20,
                  },
                  textDataStyle,
                }}
              />
            </View>
            <View style={{marginBottom: 20}}>
              <Text style={[styles.titleText, textStyle]}>{t('Images')}</Text>
              <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 10}}>
                {postData?.images?.map((image, index) => (
                  <Image
                    key={index}
                    source={{uri: image.uri}}
                    style={{width: 160, height: 138, borderRadius: 8}}
                    resizeMode="cover"
                  />
                ))}
              </View>
            </View>

            {postData?.video && (
              <View style={{marginBottom: 20}}>
                <Text style={[styles.titleText, textStyle]}>{t('Video')}</Text>
                <View style={{borderRadius: 12}}>
                  <Video
                    source={{uri: postData.video.uri}}
                    style={{
                      width: '100%',
                      height: 200,
                      borderRadius: 12,
                    }}
                    controls={true}
                    resizeMode="cover"
                  />
                </View>
              </View>
            )}
          </View>

          <Button
            type={'green'}
            // onPress={onsubmit}
          >
            {t('Share')}
          </Button>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default PostPreview;
