<template>
  <div id="language-switcher">
    <custom-select
      v-model="language"
      :options="languages"
    />
  </div>
</template>

<script>
import { SUPPORTED_LANGS } from '@/addons/i18n/const';
import CustomSelect from '@/components/ui/CustomSelect.vue';

export default {
  name: 'LanguageSwitcher',
  components: { CustomSelect },
  data() {
    return {
      language: this.$i18n.locale,
      languages: this.createLanguages(),
    };
  },
  watch: {
    language(value) {
      console.log(value);
      this.$i18n.locale = value;
    },
  },
  methods: {
    createLanguages() {
      return Object.keys(SUPPORTED_LANGS)
      .map((lang) => ({
        id: lang,
        text: `LANG.${lang.toUpperCase()}`,
      }));
    },
  },
};
</script>
