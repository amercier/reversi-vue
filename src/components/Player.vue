<template>
  <div class="player">
    <Stone :class="`player-stone player-stone-${color}`" :color="color" />
    <div class="player-score">{{ score }}</div>
    <div v-if="status === 'play'" class="player-status player-status--play">
      Your turn
    </div>
    <div v-if="status === 'won'" class="player-status">You win!</div>
    <div v-if="status === 'idle'" class="player-status"></div>
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
  components: {
    Stone,
  },
  props: {
    /**
     * Player color.
     *
     * @type {String}
     */
    color: {
      type: String,
      required: true,
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
      required: true,
      validator: value => STATUSES.indexOf(value) !== -1,
    },
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
  padding-bottom: 2rem; // Room for status

  &-stone {
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
  }

  &-score {
    margin: 1rem 0;
    font-size: 2rem;
  }

  &-status {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    &--play {
      animation: 2s blink ease-out infinite;
    }
  }
}

// Portait mode
@media screen and (max-width: 1200px) and (orientation: portrait) {
  $status-width: 5rem;

  .player {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0;

    &-stone {
      width: 2.5rem;
      height: 2.5rem;
      margin: 0;
    }

    &-score {
      margin: 0 1rem;
    }

    &-status {
      position: static;
      width: $status-width;
      // Shift weverything to the right a bit
      margin-right: (-0.6 * $status-width);
    }
  }
}
</style>
