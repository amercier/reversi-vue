<template>
  <div class="app">
    <Header class="app-header" />
    <router-view class="app-content" />
  </div>
</template>

<script>
import './assets/scss/reset.scss';
import './assets/scss/base.scss';
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

$background-texture: #170e07 url(./assets/wooden-planks.jpg) repeat top left;

html {
  background: radial-gradient(
      circle at center right,
      nth($light-gradient-colors, 1) 0,
      nth($light-gradient-colors, 2) 100%
    ),
    $background-texture;
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
  html {
    background: radial-gradient(
        circle at bottom center,
        nth($light-gradient-colors, 1) 0,
        nth($light-gradient-colors, 2) 100%
      ),
      $background-texture;
  }
}

// High-DPI devices
// TODO automate resolution
$wooden-planks-size: 2048px, 2048px;
@each $scale in (1.5, 2, 3) {
  @media (-webkit-min-device-pixel-ratio: $scale),
    (min-resolution: ($scale * 96)dpi) {
    html {
      background-size: auto,
        (nth($wooden-planks-size, 1) / (10 * $scale))
          (nth($wooden-planks-size, 2) / (10 * $scale));
    }
  }
}
</style>
