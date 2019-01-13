<template>
  <div class="app">
    <Header class="app-header" />
    <router-view class="app-content" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

/**
 * Application root component.
 */
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
// Gradient under black player status to improve contrast
$light-gradient-colors: rgba(220, 180, 50, 0.1), rgba(220, 180, 50, 0);

$background-texture: url(./assets/wooden-planks.jpg) repeat top left;

body {
  background: radial-gradient(
      circle at center right,
      nth($light-gradient-colors, 1) 0,
      nth($light-gradient-colors, 2) 100%
    ),
    $background-texture;
  color: white;
  font-family: 'Roboto Slab', serif;
  font-size: calc(8px + 1.2vmin);
}

a {
  color: inherit;
  text-decoration: none;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: hidden;

  &-content {
    flex-grow: 1;
    height: 100vh;
    overflow-y: auto;
  }
}

// Portait mode
@media screen and (max-width: 1024px) and (orientation: portrait) {
  body {
    background: radial-gradient(
        circle at bottom center,
        nth($light-gradient-colors, 1) 0,
        nth($light-gradient-colors, 2) 100%
      ),
      $background-texture;
  }
}
</style>
