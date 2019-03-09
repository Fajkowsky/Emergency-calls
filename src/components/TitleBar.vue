<template>
  <div class="title-bar">
    <header>
      <div class="container px-1">
        <span class="title">
          {{ $t('TITLE') }}
        </span>
        <language-switcher/>
      </div>
    </header>
  </div>
</template>

<script>
import LanguageSwitcher from '@/components/partial/LanguageSwitcher.vue';

export default {
  name: 'TitleBar',
  components: { LanguageSwitcher },
};
</script>

<style lang="scss" scoped>
  @import '../styles/variables';

  .title-bar {
    header {
      background-color: $primary-color;
      width: 100%;
      height: 64px;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);

      .container {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .title {
        font-size: 1.2rem;
        font-weight: 400;
      }
    }
  }
</style>
