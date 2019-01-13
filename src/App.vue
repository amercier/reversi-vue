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
body {
  background: radial-gradient(
      circle at top right,
      rgba(220, 180, 50, 0.15) 0,
      rgba(220, 180, 50, 0) 100%
    ),
    url(./assets/wooden-planks.jpg) repeat top left;
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
</style>
