/**
 * Extends interfaces in Vue.js
 */
import Vue, { ComponentOptions } from "vue";
import {SocketIOClient} from "../../vue-socket.io";

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    sockets?: any;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $socket: SocketIOClient.Socket;
  }
}
