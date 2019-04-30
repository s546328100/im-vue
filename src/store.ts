import Vue, { PluginObject } from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import SocketIO from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    socket: null,
    count: 0,
  },
  mutations: {
    initSocket(state) {
      const socket = new VueSocketIO({
        debug: true,
        connection: SocketIO('http://127.0.0.1:3001'),
      });
      // state.socket = socket.io;
      Vue.use(socket);
    },
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
