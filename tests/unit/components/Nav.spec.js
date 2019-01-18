import { shallowMount } from '@vue/test-utils';
import Nav from '@/components/Nav.vue';

describe('Nav.vue', () => {
  const propsData = {
    links: [['/a', 'Link 1'], ['/b', 'Link 2'], [() => {}, 'Link 3']],
  };

  it('renders without crashing', () => {
    expect(() =>
      shallowMount(Nav, { propsData, stubs: ['RouterLink'] }),
    ).not.toThrow();
  });

  it('renders its components', () => {
    const nav = shallowMount(Nav, { propsData, stubs: ['RouterLink'] });
    expect(nav.element).toMatchSnapshot();
  });
});
