import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Game from '@/views/Game.vue';
import { createStore } from '@/store'; // TODO Mock

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Game.vue', () => {
  it('renders without crashing', () => {
    const store = createStore();
    expect(() => shallowMount(Game, { store, localVue })).not.toThrow();
  });

  it('renders its components', () => {
    const store = createStore();
    const game = shallowMount(Game, { store, localVue });
    expect(game.element).toMatchSnapshot();
  });
});
