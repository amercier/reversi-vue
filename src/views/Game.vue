<template>
  <main class="game">
    <Player
      class="game-player game-player--white"
      color="white"
      :score="5"
      status="idle"
    />
    <Player
      class="game-player game-player--black"
      color="black"
      :score="3"
      status="play"
    />
    <div class="game-content"><Board class="game-board" /></div>
  </main>
</template>

<script>
import Board from '@/components/Board.vue';
import Player from '@/components/Player.vue';

/**
 * Game page.
 */
export default {
  name: 'home',
  components: {
    Board,
    Player,
  },
};
</script>

<style lang="scss">
$player-width: 8em;
$container-padding: 1.5em;

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
@media screen and (max-width: 1200px) and (orientation: portrait) {
  .game {
    flex-direction: column;

    &-player {
      width: 100%;
      height: $player-width;
    }

    &-content {
      // All horizontal space, minus container padding
      width: calc(100vw - #{2 * $container-padding});
      height: calc(100vw - #{2 * $container-padding});

      // All vertical space, minus header and container padding
      $available-height: calc(
        100vh - #{$HEADER_HEIGHT} - #{2 * $player-width} - #{2 *
          $container-padding}
      );
      max-width: $available-height;
      max-height: $available-height;
    }
  }
}
</style>
