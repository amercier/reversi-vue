<template>
  <main class="not-found">
    <h1 class="not-found-title">Oooooops!</h1>
    <h2 class="not-found-subtitle">404</h2>
    <p class="not-found-paragraph">
      The link is broken or the page has been moved. Try these pages instead:
    </p>
    <Nav
      class="not-found-paragraph"
      link-class="not-found-link"
      :links="[['/', 'Game'], ['/about', 'About']]"
    />
  </main>
</template>

<script>
import Nav from '../components/Nav.vue';

export default {
  name: 'NotFound',
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 20rem;
  margin: 0 auto;
  text-align: center;
  line-height: 2;
  min-height: calc(100vh - #{$HEADER_HEIGHT});

  &-title {
    font-size: 3rem;
  }

  &-subtitle {
    margin: 1rem 0;
    font-size: 2rem;
  }

  &-paragraph {
    margin-bottom: 2rem;
  }

  &-link {
    text-decoration: underline;
  }
}
</style>
