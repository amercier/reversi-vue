import { shallowMount } from '@vue/test-utils';
import NotFound from '@/views/NotFound.vue';

describe('NotFound.vue', () => {
  it('renders without crashing', () => {
    expect(() => shallowMount(NotFound)).not.toThrow();
  });

  it('renders its components', () => {
    const about = shallowMount(NotFound);
    expect(about.element).toMatchSnapshot();
  });
});
