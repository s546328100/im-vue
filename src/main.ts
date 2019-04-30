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

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
