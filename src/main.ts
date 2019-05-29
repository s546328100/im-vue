import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Socket } from './common/socket';
import { config } from './config';

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
  Col,
  Row,
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
Vue.use(Col);
Vue.use(Row);

Vue.config.productionTip = false;

const socket = new Socket(config.socketUrl, { forceNew: true });
Vue.prototype.$socket = socket;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
