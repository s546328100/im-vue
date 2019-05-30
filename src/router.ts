import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const route = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('./views/Chat.vue'),
    },
  ],
});

route.beforeEach((to, f, next) => {
  const token = sessionStorage.getItem('user');
  if ((token && token.length > 0) || to.name === 'login') {
    next();
  } else {
    location.href = '/login?redirectUrl=' + location.pathname;
  }
});

export default route;
