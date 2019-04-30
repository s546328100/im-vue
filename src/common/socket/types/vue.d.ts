/**
 * Extends interfaces in Vue.js
 */
import Vue from "vue";
import { Socket } from "..";

// declare module "vue/types/options" {
//   interface ComponentOptions<V extends Vue> {
//     sockets?: any;
//   }
// }

declare module "vue/types/vue" {
  interface Vue {
    $socket: Socket;
  }
}
