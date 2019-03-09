import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from './languages/en.json';
import pl from './languages/pl.json';

Vue.use(VueI18n);

const DEFAULT_LANG = 'en';

const SUPPORTED_LANGS = {
  pl,
  en,
};

const user_lang = window.navigator.language.slice(0, 2);
const locale = user_lang in SUPPORTED_LANGS ? user_lang : DEFAULT_LANG;

export default new VueI18n({
  locale,
  messages: {
    en,
    pl,
  },
});
