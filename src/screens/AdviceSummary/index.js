import {FlatList, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import Header from '../../components/Header';
import {AdviceSummaryData} from '../../AdviceSummaryData';
import AdviceSummaryCard from '../../components/AdviceSummaryCard';
import {useTheme} from '../../Context/ThemeContext';

const AdviceSummary = ({navigation}) => {
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
          {t('Advice Summary')}
        </Text>

        <FlatList
          accessibilityElementsHidden
          showsVerticalScrollIndicator={false}
          data={AdviceSummaryData}
          keyExtractor={item => String(item.id)}
          renderItem={({item, index}) => <AdviceSummaryCard Item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};
export default AdviceSummary;
