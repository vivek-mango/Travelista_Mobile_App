import {useTranslation} from 'react-i18next';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Input from '../Input';
import {useEffect, useRef, useState} from 'react';
import styles from './styles';
import ImageUpdate from '../../../assets/Icons/imageupdate.svg';
import VideoUpdate from '../../../assets/Icons/videoIcon.svg';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Video from 'react-native-video';
import {useTheme} from '../../Context/ThemeContext';
import RichTextEditor from '../RichTextEditor';
import Button from '../../components/Button';
import colors from '../../constants/colors';
import CloseWhite from '../../../assets/Icons/close_white.svg';
import {Icon, IconButton} from 'react-native-paper';
import Modal from 'react-native-modal';

const ReusableForm = ({onDataChange, onPreview, onShare}) => {
  const theme = useTheme();
  const {t, i18n} = useTranslation();
  const [title, setTile] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const MAX_FILE_SIZE = 20 * 1024 * 1024;
  const editorRef = useRef();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [mediaType, setMediaType] = useState(null); // 'image' or 'video'

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    onDataChange({
      title,
      description,
      images: selectedImages,
      video: selectedVideo,
    });
  }, [title, description, selectedImages, selectedVideo]);

  const handleImagePicker = source => {
    const options = {
      mediaType: 'photo',
      selectionLimit: 0,
      quality: 1,
    };

    if (source === 'camera') {
      launchCamera(options, response => {
        if (response.didCancel) {
          setIsModalVisible(!isModalVisible);
          return;
        }
        if (response.assets) {
          const validImages = response.assets.filter(image => {
            if (image.fileSize > MAX_FILE_SIZE) {
              Alert.alert(
                'File Too Large',
                `Image "${image.fileName}" exceeds 20MB limit`,
                [{text: 'OK'}],
              );
              return false;
            }
            setIsModalVisible(!isModalVisible);
            return true;
          });
          setIsModalVisible(!isModalVisible);
          setSelectedImages([...selectedImages, ...validImages]);
          setIsModalVisible(!isModalVisible);
        }
      });
    } else if (source === 'gallery') {
      launchImageLibrary(options, response => {
        if (response.didCancel) {
          setIsModalVisible(!isModalVisible);
          return;
        }

        if (response.assets) {
          const validImages = response.assets.filter(image => {
            if (image.fileSize > MAX_FILE_SIZE) {
              Alert.alert(
                'File Too Large',
                `Image "${image.fileName}" exceeds 20MB limit`,
                [{text: 'OK'}],
              );
              return false;
            }
            setIsModalVisible(!isModalVisible);
            return true;
          });
          setIsModalVisible(!isModalVisible);
          setSelectedImages([...selectedImages, ...validImages]);
          setIsModalVisible(!isModalVisible);
        }
      });
    }
  };

  const removeImage = indexToRemove => {
    setSelectedImages(
      selectedImages.filter((_, index) => index !== indexToRemove),
    );
  };

  const handleVideoPicker = source => {
    const options = {
      mediaType: 'video',
      selectionLimit: 1,
      quality: 1,
    };

    if (source === 'camera') {
      launchCamera(options, response => {
        if (response.didCancel) {
          setIsModalVisible(!isModalVisible);
          return;
        }
        if (response.assets) {
          const file = response.assets[0];
          if (file.fileSize > MAX_FILE_SIZE) {
            Alert.alert(
              'File Too Large',
              `Image "${file.fileName}" exceeds 20MB limit`,
              [{text: 'OK'}],
            );
            return;
          }
          setIsModalVisible(!isModalVisible);
          setSelectedVideo(file);
          setIsModalVisible(!isModalVisible);
          simulateUpload();
        }
      });
    } else if (source === 'gallery') {
      launchImageLibrary(options, response => {
        if (response.didCancel) return;

        if (response.assets && response.assets[0]) {
          const file = response.assets[0];
          if (file.fileSize > MAX_FILE_SIZE) {
            Alert.alert(
              'File Too Large',
              `Video "${file.fileName}" exceeds 20MB limit`,
              [{text: 'OK'}],
            );
            return;
          }
          setIsModalVisible(!isModalVisible);
          setSelectedVideo(file);
          setIsModalVisible(!isModalVisible);
          simulateUpload();
        }
      });
    }
  };
  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const removeVideo = () => {
    setSelectedVideo(null);
    setUploadProgress(0);
  };

  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };

  return (
    <View>
      <Input
        children={t('Post Title')}
        placeholder={t(`Whats on Your Mind`)}
        value={title}
        onChangeText={text => setTile(text)}
      />

      <Text style={[styles.titleText, textStyle]}>{t('Post Description')}</Text>

      <RichTextEditor
        editorRef={editorRef}
        initialContent={description}
        onChangeContent={content => setDescription(content)}
        placeholder={t('Briefly explain the purpose of post!')}
      />

      <View style={{marginBottom: 10}}>
        <Text style={[styles.titleText, textStyle]}>{t('Upload Images')}</Text>
        <TouchableOpacity
          onPress={() => toggleModal('image')}
          style={styles.input}>
          <View style={{alignItems: 'center', paddingVertical: 20}}>
            <ImageUpdate />
            <Text style={{fontSize: 12, fontWeight: 600, color: '#32475C61'}}>
              {t('Drag and drop or Browser your files')}
            </Text>
            <Text style={{fontSize: 12, fontWeight: 400, color: '#32475C61'}}>
              {t('Max File Size: 20MB')}
            </Text>
          </View>
        </TouchableOpacity>

        {selectedImages.length > 0 && <Text>{t('Preview')}:</Text>}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10}}>
          {selectedImages.map((image, index) => (
            <View key={index} style={{position: 'relative'}}>
              <Image
                source={{uri: image.uri}}
                style={{
                  width: 60,
                  height: 60,
                  marginRight: 10,
                  borderRadius: 12,
                }}
              />
              <TouchableOpacity
                onPress={() => removeImage(index)}
                style={{
                  position: 'absolute',
                  right: 6,
                  top: -6,
                  margin: 8,
                }}>
                <CloseWhite />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      <View>
        <Text style={[styles.titleText, textStyle]}>{t('Upload Video')}</Text>
        <TouchableOpacity
          disabled={selectedVideo !== null}
          style={styles.input}
          onPress={() => toggleModal('video')}>
          <View style={{alignItems: 'center', paddingVertical: 20}}>
            <VideoUpdate />
            <Text style={{fontSize: 12, fontWeight: 600, color: '#32475C61'}}>
              {t('Drag and drop or Browser your files')}
            </Text>
          </View>
        </TouchableOpacity>

        {selectedVideo !== null && <Text>{t('Uploading')}:</Text>}

        {selectedVideo && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
            }}>
            {/* Video Thumbnail */}
            <Video
              source={{uri: selectedVideo.uri}}
              style={{
                width: 60,
                height: 60,
                borderRadius: 12,
              }}
              resizeMode="cover"
              paused={true}
            />

            {/* Progress Section */}
            <View style={{flex: 1}}>
              <Text numberOfLines={1} style={{marginBottom: 4}}>
                {selectedVideo.fileName}
              </Text>
              <View
                style={{
                  height: 4,
                  backgroundColor: '#e0e0e0',
                  borderRadius: 2,
                }}>
                <View
                  style={{
                    width: `${uploadProgress}%`,
                    height: '100%',
                    backgroundColor: '#4CAF50',
                    borderRadius: 2,
                  }}
                />
              </View>
              <Text style={{marginTop: 4, fontSize: 12, color: '#666'}}>
                {uploadProgress}% uploaded
              </Text>
            </View>

            {/* Close Button */}
            <TouchableOpacity onPress={removeVideo} style={{padding: 4}}>
              <MaterialIcons name="close" size={24} color="#666" />
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button
          type={'green'}
          onPress={onPreview}
          style={{
            width: 160,
            backgroundColor: 'white',
            borderColor: colors.green,
            borderWidth: 1,
          }}>
          {t('Preview')}
        </Button>
        <Button type={'green'} onPress={onShare} style={{width: 160}}>
          {t('Share')}
        </Button>
      </View>

      <Modal
        style={{margin: 0}}
        onBackdropPress={() => setIsModalVisible(false)}
        backdropColor="black"
        isVisible={isModalVisible}
        animationIn={'slideInUp'}
        hasBackdrop={true}
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}>
        <View style={{flex: 1, justifyContent: 'flex-end', margin: 0}}>
          <View
            style={{
              backgroundColor: 'white',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 10,
              height: '20%',
              width: '100%',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  textAlign: 'right',
                  fontWeight: '500',
                  fontSize: 18,
                  width: '70%',
                  marginTop: 10,
                }}>
                {mediaType === 'image' ? 'Select Image' : 'Select Video'}
              </Text>
              <IconButton
                icon="close"
                size={20}
                onPress={() => setIsModalVisible(!isModalVisible)}
              />
            </View>
            {mediaType === 'image' ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <View style={{alignContent: 'center', marginLeft: 20}}>
                  <View
                    style={{
                      borderRadius: 30,
                      borderColor: 'black',
                      borderWidth: 1,
                      marginRight: 20,
                    }}>
                    <IconButton
                      icon="camera"
                      iconColor="#27D97F"
                      size={20}
                      onPress={() => handleImagePicker('camera')}
                    />
                  </View>
                  <Text style={{fontSize: 14, fontWeight: 500}}>Camera</Text>
                </View>
                <View style={{alignContent: 'center', marginLeft: 20}}>
                  <View
                    style={{
                      borderRadius: 30,
                      borderColor: 'black',
                      borderWidth: 1,
                    }}>
                    <IconButton
                      icon="image-outline"
                      iconColor="#27D97F"
                      size={20}
                      onPress={() => handleImagePicker('gallery')}
                    />
                  </View>
                  <Text style={{fontSize: 14, fontWeight: 500}}>Gallary</Text>
                </View>
              </View>
            ) : (
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  {/* <View style={{alignContent: 'center', marginLeft: 20}}>
                    <View
                      style={{
                        borderRadius: 30,
                        borderColor: 'black',
                        borderWidth: 1,
                      }}>
                      <IconButton
                        icon="video"
                        iconColor="#27D97F"
                        size={20}
                        onPress={() => {
                          handleVideoPicker();
                          setIsModalVisible(false);
                        }}
                      />
                    </View>
                    <Text style={{fontSize: 14, fontWeight: 500}}>
                      Select Video
                    </Text>
                  </View> */}
                  <View style={{alignContent: 'center', marginLeft: 20}}>
                    <View
                      style={{
                        borderRadius: 30,
                        borderColor: 'black',
                        borderWidth: 1,
                        marginRight: 20,
                      }}>
                      <IconButton
                        icon="camera"
                        iconColor="#27D97F"
                        size={20}
                        onPress={() => handleVideoPicker('camera')}
                      />
                    </View>
                    <Text style={{fontSize: 14, fontWeight: 500}}>Camera</Text>
                  </View>
                  <View style={{alignContent: 'center', marginLeft: 20}}>
                    <View
                      style={{
                        borderRadius: 30,
                        borderColor: 'black',
                        borderWidth: 1,
                      }}>
                      <IconButton
                        icon="image-outline"
                        iconColor="#27D97F"
                        size={20}
                        onPress={() => handleVideoPicker('gallery')}
                      />
                    </View>
                    <Text style={{fontSize: 14, fontWeight: 500}}>Gallary</Text>
                  </View>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default ReusableForm;
