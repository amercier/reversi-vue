import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { createStore } from '@/store';
import Header from '@/components/Header.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Header.vue', () => {
  let store;

  beforeEach(() => {
    store = createStore(); // TODO Mock
  });

  it('renders without crashing', () => {
    shallowMount(Header, { store, localVue });
  });

  describe('when links are passed', () => {
    it('renders its components', () => {
      const header = shallowMount(Header, { store, localVue });
      expect(header.element).toMatchSnapshot();
    });
  });
});
