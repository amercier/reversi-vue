import { shallowMount } from '@vue/test-utils';
import Nav from '@/components/Nav.vue';

describe('Nav.vue', () => {
  it('renders without crashing', () => {
    shallowMount(Nav);
  });

  describe('when links are passed', () => {
    it('renders its components', () => {
      const propsData = {
        links: [['/a', 'Link 1'], ['/b', 'Link 2'], ['/c', 'Link 3']],
      };
      const nav = shallowMount(Nav, { propsData, stubs: ['router-link'] });
      expect(nav.html()).toMatchSnapshot();
    });
  });
});
