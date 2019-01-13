import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('Header.vue', () => {
  it('renders without crashing', () => {
    shallowMount(Header);
  });

  describe('when links are passed', () => {
    it('renders its components', () => {
      const nav = shallowMount(Header);
      expect(nav.html()).toMatchSnapshot();
    });
  });
});
