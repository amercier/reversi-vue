import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { createStore } from '@/store'; // TODO Mock
import Header from '@/components/Header.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Header.vue', () => {
  it('renders without crashing', () => {
    const store = createStore();
    expect(() => shallowMount(Header, { store, localVue })).not.toThrow();
  });

  describe('when links are passed', () => {
    it('renders its components', () => {
      const store = createStore();
      const header = shallowMount(Header, { store, localVue });
      expect(header.element).toMatchSnapshot();
    });
  });
});
