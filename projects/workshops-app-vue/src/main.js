// we simply want to run the init.js by including it
import './init';

import Vue from 'vue'
import App from './App.vue'
// it is understood we are importing index.js within router folder (default file that is searched)
import router from './router';

Vue.config.productionTip = false

new Vue({
  // router: router,
  router,
  render: h => h(App),
}).$mount('#app')
