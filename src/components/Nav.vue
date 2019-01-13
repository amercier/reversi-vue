<template>
  <nav class="nav">
    <ul class="nav-list">
      <li
        class="nav-item"
        v-for="[href, label] in links"
        :key="`${href}-${label}`"
      >
        <router-link class="nav-link" :to="href">{{ label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
/**
 * Horizontal list of navigation links.
 */
export default {
  name: 'Nav',
  props: {
    /**
     * List of links. Each link consist of an URL (href) and a label.
     *
     * @type {String[][]}
     */
    links: Array,
  },
};
</script>

<style lang="scss">
.nav {
  text-align: center;
  height: 100%;

  &-list {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  &-item {
    display: flex;
    align-items: center;
    list-style: none;
    display: block;
    margin: 0 1em;
  }

  &-link {
    padding: 0.5em 1em;
    white-space: nowrap;

    &.router-link-exact-active {
      font-weight: bold;
      cursor: default;
    }

    &:not(.router-link-exact-active):hover,
    &:not(.router-link-exact-active):focus {
      text-decoration: underline;
    }
  }
}
</style>
