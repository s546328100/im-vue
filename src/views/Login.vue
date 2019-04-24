<template>
  <div>
    <p>
      <input type="text" v-model="loginParams.name">
    </p>
    <p>
      <input type="text" v-model="loginParams.password">
    </p>
    <button @click="submit">登录</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {ISocket} from '../contracts/ISocket';

@Component({})
export default class Login extends Vue {
  private socket: ISocket  = (this as any).$socket;

  private loginParams = {
    name: '',
    password: '',
  };

  private submit() {
    // this.socket.on('connect', () => {
    //   console.log(123);
    // });
    console.log(this.socket);
  }
}
</script>
