<template>
  <a
    href="#"
    :class="`move move--${color}`"
    v-on:click.prevent="$emit('clicked')"
  ></a>
</template>

<script>
import { COLORS } from '../config';

/**
 * Potential move button.
 */
export default {
  name: 'Move',
  props: {
    /**
     * Color of the player to play the move.
     *
     * @type {String}
     */
    color: {
      type: String,
      validator: value => COLORS.indexOf(value) !== -1,
      required: true,
    },
  },
};
</script>

<style lang="scss">
$colors: (
  white: (
    rgba(180, 180, 180, 0.8),
    rgba(255, 255, 255, 0.8),
  ),
  black: (
    #000,
    #161616,
  ),
);

.move {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    opacity: 0.4;
    transform: scale(0.25);
    transition: opacity 150ms ease-out, transform 150ms ease-out;
  }

  @each $color, $gradient in $colors {
    &--#{$color}::before {
      background: linear-gradient(
        to bottom,
        nth($gradient, 1),
        nth($gradient, 2)
      );
    }
  }

  &:hover::before,
  &:focus::before {
    opacity: 0.5;
    transform: scale(0.5);
  }
}
</style>
