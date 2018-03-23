import Vue from 'nativescript-vue';

import './styles.scss';

import router from './router';

import store from './store';

// import dialogs from 'tns-core-modules/ui/dialogs';
const dialogs = require('tns-core-modules/ui/dialogs')

Object.defineProperties(Vue.prototype, {
  '$dialogs': {
    value: dialogs,
    writable: false,
  }
})

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

  router,

  store,

}).$start();
