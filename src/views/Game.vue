<template>
  <main class="game">
    <Player
      class="game-player game-player--white"
      color="white"
      :score="$store.getters.scores.white"
      :status="$store.getters.statuses.white"
    />
    <Player
      class="game-player game-player--black"
      color="black"
      :score="$store.getters.scores.black"
      :status="$store.getters.statuses.black"
    />
    <div class="game-content">
      <Board
        class="game-board"
        :cells="$store.getters.cells"
        @moved="handleMove"
      />
    </div>
  </main>
</template>

<script>
import Board from '@/components/Board.vue';
import Player from '@/components/Player.vue';

/**
 * Game page.
 */
export default {
  name: 'Home',
  components: {
    Board,
    Player,
  },
  methods: {
    /**
     * Function called whenever a move is made by a player.
     *
     * @example
     *   // Play on first row, last column
     *   <a v-on:click.prevent="handleMove(0, 7)">
     * @param {number} row - Row index.
     * @param {number} col - Column index.
     * @returns {undefined} Nothing.
     */
    handleMove(row, col) {
      this.$store.commit('play', { row, col });
    },
  },
};
</script>

<style lang="scss">
$player-width: 8rem;
$container-padding: 1.5rem;

.game {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: $container-padding;

  &-player {
    width: $player-width;
    margin: $container-padding;

    &--white {
      order: 0;
    }

    &--black {
      order: 2;
    }
  }

  /**
   * Content layout:
   * 1. Grow as flex child to occupy as much space as possible
   * 2. Constraint to 1:1 ratio by using a combination of width/height + max-width/max-height.
   *    Note: this requires the players to have a fixed width.
   */
  &-content {
    order: 1;

    // All horizontal space, minus players and container padding
    width: calc(100vw - #{2 * $player-width} - #{2 * $container-padding});
    height: calc(100vw - #{2 * $player-width} - #{2 * $container-padding});

    // All vertical space, minus header and container padding
    max-width: calc(100vh - #{$HEADER_HEIGHT} - #{2 * $container-padding});
    max-height: calc(100vh - #{$HEADER_HEIGHT} - #{2 * $container-padding});
  }
}

// Portait mode
@media screen and (max-width: 1024px) and (orientation: portrait) {
  $player-width: 2.5rem;

  .game {
    flex-direction: column;
    padding: $container-padding / 2;

    &-player {
      width: 100%;
      height: $player-width;
    }

    &-content {
      // All horizontal space, minus container padding
      width: calc(100vw - #{$container-padding});
      height: calc(100vw - #{$container-padding});

      // All vertical space, minus header and container padding
      $available-height: calc(
        100vh - #{$HEADER_HEIGHT} - #{2 * $player-width} - #{$container-padding}
      );
      max-width: $available-height;
      max-height: $available-height;
    }

    &-player {
      &--white {
        margin-top: 0;
      }

      &--black {
        margin-bottom: 0;
      }
    }
  }
}
</style>
