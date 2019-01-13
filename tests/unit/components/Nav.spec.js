import { shallowMount } from '@vue/test-utils';
import Nav from '@/components/Nav.vue';

describe('Nav.vue', () => {
  const propsData = {
    links: [['/a', 'Link 1'], ['/b', 'Link 2'], ['/c', 'Link 3']],
  };

  it('renders without crashing', () => {
    shallowMount(Nav, { propsData, stubs: ['router-link'] });
  });

  it('renders its components', () => {
    const nav = shallowMount(Nav, { propsData, stubs: ['router-link'] });
    expect(nav.html()).toMatchSnapshot();
  });
});
