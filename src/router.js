import Vue from 'vue';
import Router from 'vue-router';
import Game from './views/Game.vue';
import About from './views/About.vue';
import NotFound from './views/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'game',
      component: Game,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/404',
      component: NotFound,
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});
