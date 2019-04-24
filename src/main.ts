import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import SocketIo from 'socket.io-client';
const VueSocketIo = require('vue-socket.io');

Vue.config.productionTip = false;

Vue.use(
  new VueSocketIo({
    debug: true,
    connection: SocketIo('http://127.0.0.1:3001'),
  }),
);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
