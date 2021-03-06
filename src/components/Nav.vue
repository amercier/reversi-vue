<template>
  <nav class="nav">
    <ul class="nav-list">
      <li
        v-for="[location, label, disabled] in links"
        :key="`${label}`"
        class="nav-item"
      >
        <RouterLink
          v-if="typeof location === 'string'"
          :class="
            `${linkClass} nav-link ${disabled ? 'nav-link--disabled' : ''}`
          "
          :to="location"
          >{{ label }}</RouterLink
        >
        <a
          v-if="typeof location === 'function'"
          :class="
            `${linkClass} nav-link ${disabled ? 'nav-link--disabled' : ''}`
          "
          href="#"
          @click.prevent="disabled || location()"
          >{{ label }}</a
        >
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
    links: {
      type: Array,
      required: true,
    },

    /**
     * Class for links.
     *
     * @type {String}
     */
    linkClass: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.nav {
  text-align: center;

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
    margin: 0 1rem;
  }

  &-link {
    padding: 0.5rem 1rem;
    white-space: nowrap;
    transition: opacity 150ms;

    &.router-link-exact-active {
      font-weight: bold;
      cursor: default;
    }

    &:not(.router-link-exact-active):not(&--disabled) {
      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }

    &--disabled {
      opacity: 0.5;
      cursor: default;
    }
  }
}
</style>
