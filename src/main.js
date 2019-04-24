import 'core-js/fn/symbol';
import 'core-js/fn/number/is-nan';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import '@/assets/style/app.css';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
