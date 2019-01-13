import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Game from '@/views/Game.vue';
import { createStore } from '@/store';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Game.vue', () => {
  let store;

  beforeEach(() => {
    store = createStore(); // TODO Mock
  });

  it('renders without crashing', () => {
    shallowMount(Game, { store, localVue });
  });

  it('renders its components', () => {
    const game = shallowMount(Game, { store, localVue });
    expect(game.html()).toMatchSnapshot();
  });
});
