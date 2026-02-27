import {useTranslation} from 'react-i18next';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {useTheme} from '../../Context/ThemeContext';
import Header from '../../components/Header';
import styles from './styles';
import SearchImage from '../../../assets/Icons/search_normal_light.svg';
import {TextInput} from 'react-native';
import AdviceActivityCard from '../../components/AdviceActivityCard';
import {AdviceActivityData} from '../../AdviceActivityData';

const AdviceActivity = ({navigation}) => {
  const {t, i18n} = useTranslation();
  const theme = useTheme();
  const titleStyle = {
    color: theme === 'dark' ? 'white' : 'black',
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={t('Advice')}
        onBackPress={() => navigation.goBack()}
        showIcon={true}
      />
      <View style={{flex: 1}}>
        <Text
          style={[
            {
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: 14,
              color: 'black',
            },
            titleStyle,
          ]}>
          {t('Advice Activity')}
        </Text>

        <View style={styles.navContainer}>
          <View style={styles.inputContainer1}>
            <SearchImage style={{width: 20, height: 20, marginRight: 10}} />
            <TextInput
              style={styles.textInputStyle1}
              placeholderTextColor={theme === 'dark' ? '#000000' : '#999999'}
              placeholder={t('Search')}
            />
          </View>
        </View>

        <FlatList
          accessibilityElementsHidden
          showsVerticalScrollIndicator={false}
          data={AdviceActivityData}
          style={{marginTop: 20}}
          keyExtractor={item => String(item.id)}
          renderItem={({item, index}) => <AdviceActivityCard Item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};
export default AdviceActivity;
