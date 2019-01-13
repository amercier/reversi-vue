<template>
  <header class="header">
    <Nav :links="[['/', 'Game'], ['/about', 'About']]" />
  </header>
</template>

<script>
import Nav from './Nav.vue';

export default {
  name: 'Header',
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
.header {
  background: #c58e57 url(../assets/wooden-board.jpg) repeat 0 0;
  background-attachment: fixed;
  color: #000;
  box-shadow: 0 0 2em 0.5em #000;
  height: $HEADER_HEIGHT;
}
</style>
