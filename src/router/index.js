import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../views/Home';
import Routing from '../views/Routing/index';
import ChildRoute from '../views/Routing/ChildRoute';
import Vuex from '../views/Vuex';
import Dialogs from '../views/Dialogs';
import Layouts from '../views/Layouts';

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
      children: [
        {
          path: 'childroute',
          component: ChildRoute,
        }
      ]
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
    {
      path: '/layouts',
      component: Layouts,
      meta: {},
    },
    { path: '*', redirect: '/home' },
  ],
});

router.replace('/home');

module.exports = router;
