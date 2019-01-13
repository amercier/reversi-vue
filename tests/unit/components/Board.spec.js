import { shallowMount } from '@vue/test-utils';
import Board from '@/components/Board.vue';

describe('Board.vue', () => {
  it('renders without crashing', () => {
    shallowMount(Board);
  });

  it('renders the board', () => {
    const board = shallowMount(Board, {
      propsData: {},
    });
    expect(board.html()).toMatchSnapshot();
  });
});
