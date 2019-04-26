<template>
  <el-form :model="loginParams" status-icon :rules="rules" ref="ruleForm" label-width="100px">
    <el-form-item label="昵称" prop="name">
      <el-input type="name" v-model="loginParams.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import io from '../common/Socket';

@Component({})
export default class Login extends Vue {
  public loginParams = {
    name: '',
    // password: '',
  };

  public rules = {
    name: [
      {
        validator: (rule: any, value: string, callback: any) => {
          if (value === '') {
            callback(new Error('请输入昵称'));
          } else {
            callback();
          }
        },
        trigger: 'blur',
      },
    ],
  };

  public submitForm(formName: string) {
    (this.$refs[formName] as any).validate((valid: any) => {
      if (valid) {
        alert('submit!');
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }

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

    socket.emit('events', 'eeeee');

    socket.on('events', (data: any) => {
      console.log('data', data);
    });
  }
}
</script>
