import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import {
  Input,
  Button,
  Form,
  FormItem,
  Container,
  Header,
  Aside,
  Main,
  Footer,
} from 'element-ui';

Vue.use(Input);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);

Vue.config.productionTip = false;

import SocketIO from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

const socket = new VueSocketIO({
  debug: true,
  connection: SocketIO('http://127.0.0.1:3001'),
});

Vue.use(socket);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
