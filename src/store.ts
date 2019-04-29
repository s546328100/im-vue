import Vue, { PluginObject } from 'vue';
import Vuex from 'vuex';
import App from './App.vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    socket: null,
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    },
  },
});
