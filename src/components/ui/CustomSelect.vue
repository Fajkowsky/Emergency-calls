<template>
  <div id="custom-select">
    <ul>
      <li
        v-for="option in options"
        :key="option.id"
        :value="option.id"
      >
        {{ $t(option.text) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    options: {
      type: Array,
      required: true,
      validator(value) {
        return value.every(item => 'id' in item && 'text' in item);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
  #custom-select {
    color: black;
  }

</style>
