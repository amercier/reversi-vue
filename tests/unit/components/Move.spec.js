import { shallowMount } from '@vue/test-utils';
import Move from '@/components/Move.vue';

describe('Move.vue', () => {
  it('renders a white move', () => {
    const move = shallowMount(Move, {
      propsData: { color: 'white', onClick: () => {} },
    });
    expect(move.html()).toMatchSnapshot();
  });

  it('renders a black move', () => {
    const move = shallowMount(Move, {
      propsData: { color: 'black', onClick: () => {} },
    });
    expect(move.html()).toMatchSnapshot();
  });
});
