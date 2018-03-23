import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../views/Home';
import Routing from '../views/Routing';
import Vuex from '../views/Vuex';
import Dialogs from '../views/Dialogs';

const router = new VueRouter({
  pageRouting: true,
  routes: [
    {
      path: '/home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/routing/:a',
      component: Routing,
      meta: {
        title: 'routing',
      },
    },
    {
      path: '/vuex',
      component: Vuex,
      meta: {
        title: 'Vuex',
      },
    },
    {
      path: '/dialogs',
      component: Dialogs,
      meta: {
        title: 'Dialogs',
      },
    },
    { path: '*', redirect: '/home' },
  ],
});

router.replace('/home');

module.exports = router;
