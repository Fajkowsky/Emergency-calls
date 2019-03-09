<template>
  <div id="language-switcher">
    <select @change="changeLanguage">
      <option
        v-for="language in languages"
        :key="language"
        :value="language"
        :selected="language === currentLanguage"
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
    changeLanguage(event) {
      this.$i18n.locale = event.target.value;
    },
    getLanguageTransKey(language) {
      return `LANG.${language.toUpperCase()}`
    }
  },
};
</script>

<style lang="scss" scoped>
  #language-switcher {
    display: flex;
    align-items: center;
  }
</style>
