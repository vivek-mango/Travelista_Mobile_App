import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import RenderHTML from 'react-native-render-html';
import LocationIcon from '../../../assets/activity/locationIcon.svg';
import LocationImage from '../../../assets/activity/location_1.svg';
import DownArrow from '../../../assets/Icons/dropdown.svg';
import {Button} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../Context/ThemeContext';
import Video from 'react-native-video';

const ActivityDay = ({
  day,
  index,
  expandedId,
  ActivityData,
  handlePress,
  showAddActivity = true,
  handleAddActivity,
  handleDeleteActivity,
}) => {
  const {t, i18n} = useTranslation();
  const theme = useTheme();
  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };

  console.log('ActivityData:>>>>>>>>>>>', ActivityData);
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 8,
        elevation: 2,
        margin: 10,
        padding: 12,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontWeight: 600,
            fontSize: 16,
            fontFamily: 'Inter',
            lineHeight: 19,
            color: 'black',
          }}>
          {day.day}
        </Text>
        <TouchableOpacity onPress={() => handlePress(index)}>
          <DownArrow
            style={{
              transform: [{rotate: expandedId === index ? '180deg' : '0deg'}],
            }}
          />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontWeight: 400,
          fontSize: 12,
          fontFamily: 'Inter',
          lineHeight: 14,
          color: 'black',
        }}>
        {day.date}
      </Text>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginVertical: 8}}>
        <LocationImage />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: 500,
            fontSize: 12,
            fontFamily: 'Inter',
            lineHeight: 14,
            color: 'black',
          }}>
          {day.location}
        </Text>
      </View>
      <RenderHTML
        style={{
          fontWeight: 400,
          fontSize: 12,
          fontFamily: 'Inter',
          lineHeight: 20,
          color: 'black',
        }}
        contentWidth={300}
        source={{html: day.description}}
      />

      {showAddActivity && (
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Button onPress={() => handleAddActivity(day.id)}>
            {t('+ Add Another Activity')}
          </Button>
        </View>
      )}

      {expandedId === index && (
        <View>
          {ActivityData.map((item, index) => (
            <View
              key={index}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: 8,
                elevation: 2,
                marginVertical: 8,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 12,
                  paddingHorizontal: 12,
                }}>
                <item.image style={{marginRight: 10}} />
                <View style={{flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: 4,
                    }}>
                    <View>
                      <Text
                        style={{
                          fontWeight: 600,
                          fontSize: 14,
                          fontFamily: 'Inter',
                          color: 'black',
                          marginBottom: 2,
                        }}>
                        {item.name}
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <LocationIcon style={{marginRight: 8}} />
                        <Text
                          style={{
                            fontWeight: 500,
                            fontSize: 12,
                            fontFamily: 'Inter',
                            color: '#57675F',
                          }}>
                          {item.location}
                        </Text>
                      </View>
                    </View>
                    {showAddActivity && (
                      <Text
                        onPress={() => handleDeleteActivity(item.id)}
                        style={{
                          fontWeight: 500,
                          fontSize: 12,
                          fontFamily: 'Inter',
                          color: '#E43A15',
                        }}>
                        Remove
                      </Text>
                    )}
                  </View>
                  <View style={{paddingRight: 12}}>
                    <Text
                      numberOfLines={2}
                      ellipsizeMode="tail"
                      style={{
                        fontWeight: 400,
                        fontSize: 12,
                        fontFamily: 'Inter',
                        color: 'black',
                        lineHeight: 20,
                      }}>
                      {item.description}
                    </Text>
                  </View>
                </View>
              </View>

              {item.images && (
                <View style={{marginBottom: 20}}>
                  <Text
                    style={
                      ([
                        {
                          fontSize: 14,
                          fontWeight: 'bold',
                          color: 'black',
                          fontFamily: 'Inter',
                          marginBottom: 8,
                          marginLeft: 8,
                        },
                      ],
                      textStyle)
                    }>
                    {t('Images')}
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      paddingHorizontal: 8,
                      justifyContent: 'center',
                      rowGap: 0,
                      columnGap: 12,
                    }}>
                    {item.images.map((image, index) => (
                      <View key={index}>
                        <image.uri
                          width={120}
                          // height={110}
                          style={{borderRadius: 8}}
                        />
                      </View>
                    ))}
                  </View>
                </View>
              )}

              {item.videos && (
                <View style={{marginBottom: 20}}>
                  <Text
                    style={
                      ([
                        {
                          fontSize: 14,
                          fontWeight: 'bold',
                          color: 'black',
                          fontFamily: 'Inter',
                          marginBottom: 8,
                          marginLeft: 8,
                        },
                      ],
                      textStyle)
                    }>
                    {t('Video')}
                  </Text>
                  <View style={{borderRadius: 12}}>
                    <Video
                      source={{uri: item.videos.uri}}
                      style={{
                        width: '100%',
                        height: 200,
                        borderRadius: 12,
                      }}
                      // controls={true}
                      resizeMode="cover"
                    />
                  </View>
                </View>
              )}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default ActivityDay;
