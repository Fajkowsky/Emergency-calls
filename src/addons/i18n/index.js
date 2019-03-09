import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { DEFAULT_LANG, SUPPORTED_LANGS } from '@/addons/i18n/const';

Vue.use(VueI18n);

const user_lang = window.navigator.language.slice(0, 2);
const locale = user_lang in SUPPORTED_LANGS ? user_lang : DEFAULT_LANG;

export default new VueI18n({
  locale,
  messages: SUPPORTED_LANGS,
});
