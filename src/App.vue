<template>
  <div id="app">
    <title-bar />
    <custom-select :options="options" />
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar.vue';
import CustomSelect from '@/components/ui/CustomSelect.vue';

export default {
  name: 'App',
  components: { CustomSelect, TitleBar },
  data() {
    return {
      options: [
        {id: 1, text: 'Text1'},
        {id: 2, text: 'Text2'},
        {id: 3, text: 'Text3'},
        {id: 4, text: 'Text4'},
        {id: 5, text: 'Text5'},
      ]
    }
  }
};
</script>

<style lang="scss" src="./styles/app.scss" />
