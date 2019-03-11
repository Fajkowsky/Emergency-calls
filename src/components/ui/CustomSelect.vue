<template>
  <div id="custom-select">
    <select @change="setOption">
      <option
        v-for="option in options"
        :key="option.id"
        :value="option.id"
      >
        {{ $t(option.text) }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
      validator(value) {
        return value.every(item => 'id' in item && 'text' in item);
      },
    },
  },
  data() {
    return {
      local: this.value,
    };
  },
  watch: {
    value(value) {
      this.local = value;
    },
    local(value) {
      this.$emit('input', value);
    },
  },
  methods: {
    setOption($event) {
      this.local = $event.target.value;
    }
  }
};
</script>
