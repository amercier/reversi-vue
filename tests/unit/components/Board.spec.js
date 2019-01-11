import { shallowMount } from '@vue/test-utils';
import Board from '@/components/Board.vue';

describe('Board.vue', () => {
  it('renders without crashing', () => {
    shallowMount(Board);
  });
});
