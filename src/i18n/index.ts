import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import PTPT from './locales/pt-pt.json';
import ENUS from './locales/en-us.json';
import store from '../store/index';

const lang = store.getState().user.lang;

const resources = {
  pt: {
    translation: PTPT,
  },
  'en-US': {
    translation: ENUS,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: lang,
  interpolation: {
    escapeValue: false,
  },
});
