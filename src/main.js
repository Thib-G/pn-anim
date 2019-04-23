import 'core-js/fn/symbol';
import 'core-js/fn/number/is-nan';

import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
