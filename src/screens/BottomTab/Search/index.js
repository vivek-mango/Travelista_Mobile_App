import React from 'react';
import {View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
const Search = () => {
  const {t, i18n} = useTranslation();

  return (
    <View>
      <Text>{t('Search')}</Text>
    </View>
  );
};
export default React.memo(Search);
