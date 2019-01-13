import { shallowMount } from '@vue/test-utils';
import Game from '@/views/Game.vue';

describe('Game.vue', () => {
  it('renders without crashing', () => {
    shallowMount(Game);
  });

  it('renders its components', () => {
    const game = shallowMount(Game);
    expect(game.html()).toMatchSnapshot();
  });
});
