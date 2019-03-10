<template>
  <div id="language-switcher">
    <select @change="changeLanguage">
      <option
        v-for="language in languages"
        :key="language"
        :value="language"
        :selected="isLanguageSelected(language)"
      >
        {{ $t(getLanguageTransKey(language)) }}
      </option>
    </select>
  </div>
</template>

<script>
import { SUPPORTED_LANGS } from '@/addons/i18n/const';

export default {
  name: 'LanguageSwitcher',
  data() {
    return {
      languages: Object.keys(SUPPORTED_LANGS),
    };
  },
  computed: {
    currentLanguage() {
      return this.$i18n.locale;
    },
  },
  methods: {
    isLanguageSelected(language) {
      return language === this.currentLanguage;
    },
    changeLanguage(event) {
      this.$i18n.locale = event.target.value;
    },
    getLanguageTransKey(language) {
      return `LANG.${language.toUpperCase()}`;
    },
  },
};
</script>
