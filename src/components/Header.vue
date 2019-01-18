<template>
  <header class="header">
    <Nav
      :links="[
        ['/', 'Game'],
        [handleRestart, 'Restart', $store.getters.isAtStart],
        ['/about', 'About'],
      ]"
    />
  </header>
</template>

<script>
import Nav from './Nav.vue';

export default {
  name: 'Header',
  components: {
    Nav,
  },
  methods: {
    /**
     * Function called whenever the user press Restart.
     *
     * @example
     *  <a v-on:click.prevent="handleRestart">Restart</a>
     * @returns {undefined} Nothing.
     */
    handleRestart() {
      if (
        confirm(
          'Do you really want to restart?\nYour current game will be lost...',
        )
      ) {
        this.$store.commit('restart');
      }
    },
  },
};
</script>

<style lang="scss">
.header {
  background: #a56538 url(../assets/wooden-board.jpg) repeat 0 0;
  background-attachment: fixed;
  color: #000;
  box-shadow: 0 0 2rem 0.5rem #000;
  height: $HEADER_HEIGHT;
  z-index: 1;
}

// High-DPI devices
// TODO automate resolution
$wooden-board-size: 430px, 556px;
@each $scale in (1.5, 2, 3) {
  @media (-webkit-min-device-pixel-ratio: $scale),
    (min-resolution: ($scale * 96)dpi) {
    .header {
      background-size: (nth($wooden-board-size, 1) / $scale)
        (nth($wooden-board-size, 2) / $scale);
    }
  }
}
</style>
