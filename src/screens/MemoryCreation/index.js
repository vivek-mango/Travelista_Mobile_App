import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Header from '../../components/Header';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../Context/ThemeContext';
import {Button} from 'react-native-paper';
import styles from './styles';
import MemoryCard from '../../components/MemoryCard';
import {MemoryData} from '../../MemoryCreationData';

const MemoryCreationScreen = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const theme = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header
          title={t('Memory Creation')}
          showSettings={true}
          onBackPress={() => navigation.goBack()}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Recent Posts</Text>
        <Button>See all</Button>
      </View>
      <View>
        <FlatList
          accessibilityElementsHidden
          style={{marginHorizontal: 10}}
          data={MemoryData}
          numColumns={2}
          keyExtractor={item => String(item.id)}
          renderItem={({item, index}) => (
            <View style={{flex: 1, maxWidth: '50%'}}>
              <MemoryCard Item={item} />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
export default MemoryCreationScreen;
