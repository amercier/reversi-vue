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
    expect(() => shallowMount(Board, { propsData })).not.toThrow();
  });

  it('renders the board', () => {
    const board = shallowMount(Board, { propsData });
    expect(board.element).toMatchSnapshot();
  });

  it('emits a "moved" event when a move is clicked', () => {
    const board = shallowMount(Board, { propsData });
    board.find('.board-move').vm.$emit('clicked');
    expect(board.emitted('moved')).toBeArray();
    expect(board.emitted('moved')).toHaveLength(1);
    expect(board.emitted('moved')[0]).toStrictEqual([1, 0]);
  });

  describe('methods', () => {
    const { methods } = Board;

    describe('position(row, col)', () => {
      const { position } = methods;

      it('returns A1 for [0,0]', () => {
        expect(position(0, 0)).toBe('A1');
      });

      it('returns H1 for [0,7]', () => {
        expect(position(0, 7)).toBe('H1');
      });

      it('returns A8 for [7,0]', () => {
        expect(position(7, 0)).toBe('A8');
      });

      it('returns H8 for [7,7]', () => {
        expect(position(7, 7)).toBe('H8');
      });
    });
  });
});
