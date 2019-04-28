import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const route = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('./views/Message.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/About.vue'),
    },
  ],
});

// route.beforeEach((to, f, next) => {
//   const token = sessionStorage.getItem('token');
//   if ((token && token.length > 0) || to.name === 'login') {
//     next();
//   } else {
//     location.href = '/login?redirectUrl=' + location.pathname;
//   }
// });

export default route;
