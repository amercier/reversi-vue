import { shallowMount } from '@vue/test-utils';
import Player from '@/components/Player.vue';

describe('Player.vue', () => {
  it('renders a white player', () => {
    const player = shallowMount(Player, {
      propsData: { color: 'white', score: 10, status: 'idle' },
    });
    expect(player.element).toMatchSnapshot();
  });

  it('renders a black player', () => {
    const player = shallowMount(Player, {
      propsData: { color: 'black', score: 0, status: 'idle' },
    });
    expect(player.element).toMatchSnapshot();
  });

  it('renders a white player who has to play', () => {
    const player = shallowMount(Player, {
      propsData: { color: 'white', score: 10, status: 'play' },
    });
    expect(player.element).toMatchSnapshot();
  });

  it('renders a white player who has won', () => {
    const player = shallowMount(Player, {
      propsData: { color: 'white', score: 10, status: 'won' },
    });
    expect(player.element).toMatchSnapshot();
  });
});
