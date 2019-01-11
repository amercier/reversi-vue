import { shallowMount } from '@vue/test-utils';
import About from '@/views/About.vue';

describe('About.vue', () => {
  it('renders without crashing', () => {
    shallowMount(About);
  });
});
