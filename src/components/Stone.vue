<template>
  <div :class="['stone', `stone--${color}`]"></div>
</template>

<script>
import { COLORS } from '../config';

/**
 * A stone on the board.
 */
export default {
  name: 'Stone',
  props: {
    /**
     * Color of the stone.
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
$inner-circle-padding: 10%;
$colors: (
  white: (
    #fff,
    #999,
  ),
  black: (
    #292929,
    #090909,
  ),
);

.stone {
  position: relative;
  box-shadow: 0 0 0.5em 0 #000;
  border-radius: 50%;

  &::before {
    content: '';
    position: absolute;
    border-radius: 50%;
    top: $inner-circle-padding;
    bottom: $inner-circle-padding;
    right: $inner-circle-padding;
    left: $inner-circle-padding;
  }

  @each $color, $gradient in $colors {
    &--#{$color} {
      background: linear-gradient(
        to bottom,
        nth($gradient, 1),
        nth($gradient, 2)
      );

      &::before {
        background: linear-gradient(
          to bottom,
          nth($gradient, 2),
          nth($gradient, 1)
        );
      }
    }
  }
}
</style>
