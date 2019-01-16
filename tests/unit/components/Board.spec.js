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
  };

  it('renders without crashing', () => {
    shallowMount(Board, { propsData });
  });

  it('renders the board', () => {
    const board = shallowMount(Board, { propsData });
    expect(board.html()).toMatchSnapshot();
  });

  it('emits a "moved" event when a move is clicked', () => {
    const board = shallowMount(Board, { propsData });
    board.find('.board-move').vm.$emit('clicked');
    expect(board.emitted('moved')).toBeTruthy();
    expect(board.emitted('moved').length).toBe(1);
    expect(board.emitted('moved')[0]).toEqual([1, 0]);
  });
});
