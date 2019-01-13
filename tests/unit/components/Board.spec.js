import { shallowMount } from '@vue/test-utils';
import Board from '@/components/Board.vue';

describe('Board.vue', () => {
  const propsData = {
    cells: [
      { row: 0, col: 0, isStone: true, isMove: false, color: 'white' },
      { row: 0, col: 1, isStone: true, isMove: false, color: 'black' },
      { row: 1, col: 0, isStone: false, isMove: true, color: 'black' },
      { row: 1, col: 1, isStone: false, isMove: false, color: 'blank' },
    ],
    onMove: () => {},
  };

  it('renders without crashing', () => {
    shallowMount(Board, { propsData });
  });

  it('renders the board', () => {
    const board = shallowMount(Board, { propsData });
    expect(board.html()).toMatchSnapshot();
  });
});
