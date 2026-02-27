import * as Localization from 'react-native-localize';
import i18n from 'i18n-js';

const locales = Localization.getLocales();
if (Array.isArray(locales)) {
  i18n.locale = locales[0].languageCode;
}

i18n.fallbacks = true;
i18n.translations = {
  en: require('./en.json'),
  ar: require('./hi.json'),
  // Add other languages as needed
};
