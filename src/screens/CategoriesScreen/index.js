import React, {useState} from 'react';
import {View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import Title from '../../components/Title';
import colors from '../../constants/colors';
import {useTheme} from '../../Context/ThemeContext';
import {useTranslation} from 'react-i18next';

const categories = [
  {
    id: 1,
    title: 'Spa',
  },
  {
    id: 2,
    title: 'Hiking',
  },
  {
    id: 3,
    title: 'Swimming',
  },
  {
    id: 4,
    title: 'Museums',
  },
  {
    id: 5,
    title: 'Restaurants',
  },
  {
    id: 6,
    title: 'Spa',
  },
  {
    id: 7,
    title: 'Hiking',
  },
  {
    id: 8,
    title: 'Swimming',
  },
  {
    id: 9,
    title: 'Museums',
  },
  {
    id: 10,
    title: 'Restaurants',
  },
  {
    id: 11,
    title: 'Spa',
  },
  {
    id: 12,
    title: 'Hiking',
  },
  {
    id: 13,
    title: 'Swimming',
  },
  {
    id: 14,
    title: 'Museums',
  },
  {
    id: 15,
    title: 'Hiking',
  },
  {
    id: 16,
    title: 'Spa',
  },
  {
    id: 17,
    title: 'Hiking',
  },
  {
    id: 18,
    title: 'Swimming',
  },
  {
    id: 19,
    title: 'Museums',
  },
  {
    id: 20,
    title: 'Spa',
  },
];
const CategoriesScreen = ({navigation}) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const theme = useTheme();
  const {t} = useTranslation();

  const textStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };
  const borderColor = {
    borderColor: theme === 'dark' ? 'white' : 'black',
  };

  const handlePress = item => {
    const index = selectedCategories.findIndex(
      category => category.id === item.id,
    );
    if (index !== -1) {
      setSelectedCategories(prevSelected =>
        prevSelected.filter(c => c.id !== item.id),
      );
    } else {
      setSelectedCategories(prevSelected => [...prevSelected, item]);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.titleRow}>
        <Title children={t('Preferences')} style={textStyle} />
      </View>

      <View style={{paddingHorizontal: 10}}>
        <FlatList
          numColumns={3}
          data={categories}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View
              style={[
                styles.buttonContainer,
                {
                  backgroundColor: selectedCategories.some(
                    c => c.id === item.id,
                  )
                    ? colors.green
                    : 'transparent',
                },
              ]}>
              <Button
                style={[styles.button, borderColor]}
                mode="outlined"
                onPress={() => handlePress(item)}
                textColor={[styles.buttonText, textStyle]}>
                {item.title}
              </Button>
            </View>
          )}
        />

        <Button
          style={{marginTop: 20}}
          textColor={[styles.buttonText, textStyle]}
          mode="outlined"
          onPress={() => {
            console.log(selectedCategories);
            navigation.navigate('Routes');
          }}>
          {t('Next')}
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 2,
    marginVertical: 5,
    borderRadius: 20,
  },
  button: {borderColor: 'black'},
  buttonText: {
    color: 'black',
  },
  iconsContainer: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  icon: {
    width: 100,
    height: 100,
    marginLeft: 16,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 12,
  },
});

export default CategoriesScreen;
