<template>
  <div id="app">
    <title-bar />
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar.vue';

export default {
  name: 'App',
  components: { TitleBar },
};
</script>

<style lang="scss" src="./styles/app.scss" />
