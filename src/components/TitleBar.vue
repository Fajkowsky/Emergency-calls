<template>
  <header class="container">
    <span class="title mx-1">
      Emergency numbers
    </span>
  </header>
</template>

<script>
export default {
  name: 'TitleBar',
};
</script>

<style lang="scss" scoped>
  @import '../styles/variables';

  header {
    background-color: $primary-color;
    width: 100%;
    height: 64px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);

    &.container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .title {
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
</style>
