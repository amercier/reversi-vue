<template>
  <main class="game"><Board /></main>
</template>

<script>
import Board from '@/components/Board.vue';

export default {
  name: 'home',
  components: {
    Board,
  },
};
</script>
