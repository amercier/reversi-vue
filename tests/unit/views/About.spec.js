import { shallowMount } from '@vue/test-utils';
import About from '@/views/About.vue';

describe('About.vue', () => {
  it('renders without crashing', () => {
    expect(() => shallowMount(About)).not.toThrow();
  });

  it('renders its components', () => {
    const about = shallowMount(About);
    expect(about.element).toMatchSnapshot();
  });
});
