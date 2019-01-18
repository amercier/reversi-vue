import { shallowMount } from '@vue/test-utils';
import Move from '@/components/Move.vue';

describe('Move.vue', () => {
  it('renders a white move', () => {
    const move = shallowMount(Move, {
      propsData: { color: 'white' },
    });
    expect(move.element).toMatchSnapshot();
  });

  it('renders a black move', () => {
    const move = shallowMount(Move, {
      propsData: { color: 'black' },
    });
    expect(move.element).toMatchSnapshot();
  });

  it('emits a "clicked" event when clicked', () => {
    const move = shallowMount(Move, {
      propsData: { color: 'white' },
    });
    move.trigger('click');
    expect(move.emitted('clicked')).toBeArray();
    expect(move.emitted('clicked')).toHaveLength(1);
  });
});
