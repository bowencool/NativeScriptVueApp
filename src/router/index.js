import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../views/Home';
import HelloWorld from '../views/HelloWorld';
import Counter from '../views/Counter';
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
      path: '/hello',
      component: HelloWorld,
      meta: {
        title: 'Hello World',
      },
    },
    {
      path: '/counter',
      component: Counter,
      meta: {
        title: 'Counter',
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
