import { shallowMount } from '@vue/test-utils';
import Move from '@/components/Move.vue';

describe('Move.vue', () => {
  it('renders a white move', () => {
    const move = shallowMount(Move, {
      propsData: { color: 'white' },
    });
    expect(move.html()).toMatchSnapshot();
  });

  it('renders a black move', () => {
    const move = shallowMount(Move, {
      propsData: { color: 'black' },
    });
    expect(move.html()).toMatchSnapshot();
  });

  it('emits a "clicked" event when clicked', () => {
    const move = shallowMount(Move, {
      propsData: { color: 'white' },
    });
    move.trigger('click');
    expect(move.emitted('clicked')).toBeTruthy();
    expect(move.emitted('clicked').length).toBe(1);
  });
});
