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
import io from '../common/Socket';

@Component({})
export default class Login extends Vue {
  private loginParams = {
    name: '',
    password: '',
  };

  private submit() {
    // console.log(this.socket);
    // const io = new VueSocketIo({
    //   debug: true,
    //   connection: SocketIo('http://127.0.0.1:3001'),
    // });
    // Vue.use(io);

    // const socket = (this as any).$socket;

    // socket.on('connect', () => {
    //   console.log(123);
    // });
    const socket = io('http://127.0.0.1:3001');

    socket.emit('login', this.loginParams.name);

    socket.on('login', () => {
      console.log('hahah');
    });
  }
}
</script>
