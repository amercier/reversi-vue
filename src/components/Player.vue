<template>
  <div class="player">
    <Stone :class="`player-stone player-stone-${color}`" :color="color" />
    <div class="player-score">{{ score }}</div>
    <div v-if="status === 'play'" class="player-status player-status--move">
      Your turn
    </div>
    <div v-if="status === 'won'" class="player-status">You win!</div>
  </div>
</template>

<script>
import { COLORS } from '../config';
import Stone from './Stone.vue';

const STATUSES = ['idle', 'play', 'won'];

/**
 * Player information.
 */
export default {
  name: 'Player',
  props: {
    /**
     * Player color.
     *
     * @type {String}
     */
    color: {
      type: String,
      validator: value => COLORS.indexOf(value) !== -1,
    },

    /**
     * Player score.
     *
     * @type {String}
     */
    score: {
      type: Number,
      required: true,
    },

    /**
     * Player status, one of:
     * - "idle": do nothing,
     * - "play": player is playing,
     * - "won": player has won.
     *
     * @type {String}
     */
    status: {
      type: String,
      validator: value => STATUSES.indexOf(value) !== -1,
      required: true,
    },
  },
  components: {
    Stone,
  },
};
</script>

<style lang="scss">
@keyframes blink {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
}

.player {
  text-align: center;

  position: relative;
  padding-bottom: 2em; // Room for status

  &-stone {
    width: 3em;
    height: 3em;
    margin: 0 auto;
  }

  &-score {
    margin: 1em 0;
    font-size: 2em;
  }

  &-status {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    &--move {
      animation: 2s blink ease-out infinite;
    }
  }
}

// Portait mode
@media screen and (max-width: 1200px) and (orientation: portrait) {
  .player {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2em; // Room for status

    &-stone {
      margin: 0 2em 0 0;
    }
  }
}
</style>
