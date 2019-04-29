<template>
  <div class="login">
    <el-form
      class="login-form"
      :model="loginParams"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
      <el-form-item label="昵称" prop="name">
        <el-input type="name" v-model="loginParams.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { userLogin } from '@/views/request/Request';
import { ILoginParams } from '@/contracts/ICommon';

@Component({
  sockets: {
    connect: () => {
      console.log('socket connected');
    },
    disconnect: () => {
      console.log('socket disconnect');
    },
    login: (data: any) => {
      console.log(data);
    },
    sysMessage: (data: any) => {
      console.log(data);
    },
  },
})
export default class Login extends Vue {
  public loginParams: ILoginParams = {
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
        userLogin(this.loginParams).subscribe((item: any) => {
          console.log(item);
          sessionStorage.setItem('token', item);
          sessionStorage.setItem('user', item);

          this.$socket.emit('login', item);

          // this.$socket.on('login', (data: string) => {
          //   // this.sysMessages.push(data);
          //   console.log(123 + data);
          // });

          // this.$socket.on('sysMessage', (data: string) => {
          //   // this.sysMessages.push(data);
          //   console.log(data);
          // });
          // this.$router.push('/message');
        });
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: calc(100vh - 185px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 12.5vw;
}
.login-form {
  margin-right: 100px;
  width: 50%;
}
</style>