import { shallowMount } from '@vue/test-utils';
import Stone from '@/components/Stone.vue';

describe('Stone.vue', () => {
  it('renders a white stone', () => {
    const stone = shallowMount(Stone, {
      propsData: { color: 'white' },
    });
    expect(stone.html()).toMatchSnapshot();
  });

  it('renders a black stone', () => {
    const stone = shallowMount(Stone, {
      propsData: { color: 'black' },
    });
    expect(stone.html()).toMatchSnapshot();
  });
});
